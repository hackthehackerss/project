import { useState } from 'react';
import { doc, updateDoc, collection, query, where, getDocs, writeBatch, increment, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { awardXP } from '../utils/xpSystem';

export function useAdminControls() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const blockUser = async (userId: string, reason: string) => {
    setLoading(true);
    try {
      const batch = writeBatch(db);
      
      // Update user profile
      const profileRef = doc(db, 'profiles', userId);
      batch.update(profileRef, {
        status: 'blocked',
        blockedAt: serverTimestamp(),
        blockReason: reason,
        updatedAt: serverTimestamp()
      });

      // Log the action
      const actionRef = doc(collection(db, 'admin_actions'));
      batch.set(actionRef, {
        type: 'user_blocked',
        userId,
        reason,
        performedAt: serverTimestamp(),
        metadata: {
          action: 'block',
          reason
        }
      });

      await batch.commit();
    } catch (err) {
      setError('Failed to block user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const unblockUser = async (userId: string) => {
    setLoading(true);
    try {
      const batch = writeBatch(db);
      
      // Update user profile
      const profileRef = doc(db, 'profiles', userId);
      batch.update(profileRef, {
        status: 'active',
        unblockedAt: serverTimestamp(),
        blockReason: null,
        updatedAt: serverTimestamp()
      });

      // Log the action
      const actionRef = doc(collection(db, 'admin_actions'));
      batch.set(actionRef, {
        type: 'user_unblocked',
        userId,
        performedAt: serverTimestamp(),
        metadata: {
          action: 'unblock'
        }
      });

      await batch.commit();
    } catch (err) {
      setError('Failed to unblock user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetUserProgress = async (userId: string) => {
    setLoading(true);
    try {
      const batch = writeBatch(db);
      
      // Reset stats
      const statsRef = doc(db, 'user_stats', userId);
      batch.update(statsRef, {
        xp: 0,
        level: 1,
        challengesCompleted: 0,
        totalPoints: 0,
        streakDays: 0,
        updatedAt: serverTimestamp()
      });

      // Clear achievements
      const achievementsQuery = query(
        collection(db, 'user_achievements'),
        where('userId', '==', userId)
      );
      const achievementDocs = await getDocs(achievementsQuery);
      achievementDocs.forEach(doc => {
        batch.delete(doc.ref);
      });

      // Log the action
      const actionRef = doc(collection(db, 'admin_actions'));
      batch.set(actionRef, {
        type: 'progress_reset',
        userId,
        performedAt: serverTimestamp(),
        metadata: {
          action: 'reset_progress'
        }
      });

      await batch.commit();
    } catch (err) {
      setError('Failed to reset user progress');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId: string, newRole: string) => {
    setLoading(true);
    try {
      const batch = writeBatch(db);
      
      // Update user profile
      const profileRef = doc(db, 'profiles', userId);
      batch.update(profileRef, {
        role: newRole,
        updatedAt: serverTimestamp()
      });

      // Log the action
      const actionRef = doc(collection(db, 'admin_actions'));
      batch.set(actionRef, {
        type: 'role_update',
        userId,
        performedAt: serverTimestamp(),
        metadata: {
          action: 'update_role',
          newRole
        }
      });

      await batch.commit();
    } catch (err) {
      setError('Failed to update user role');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const awardCustomXP = async (userId: string, amount: number, reason: string) => {
    setLoading(true);
    try {
      await awardXP(userId, {
        amount,
        reason,
        type: 'admin_bonus',
        metadata: {
          awardedBy: 'admin',
          customAward: true
        }
      });
    } catch (err) {
      setError('Failed to award XP');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateChallenge = async (challengeId: string, updates: any) => {
    setLoading(true);
    try {
      const challengeRef = doc(db, 'challenges', challengeId);
      await updateDoc(challengeRef, {
        ...updates,
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      setError('Failed to update challenge');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateLearningPath = async (pathId: string, updates: any) => {
    setLoading(true);
    try {
      const pathRef = doc(db, 'learning_paths', pathId);
      await updateDoc(pathRef, {
        ...updates,
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      setError('Failed to update learning path');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const bulkUpdateUsers = async (userIds: string[], updates: any) => {
    setLoading(true);
    try {
      const batch = writeBatch(db);
      userIds.forEach(userId => {
        const userRef = doc(db, 'profiles', userId);
        batch.update(userRef, updates);
      });
      await batch.commit();
    } catch (err) {
      setError('Failed to update users');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    blockUser,
    unblockUser,
    resetUserProgress,
    updateUserRole,
    awardCustomXP,
    updateChallenge,
    updateLearningPath,
    bulkUpdateUsers
  };
}