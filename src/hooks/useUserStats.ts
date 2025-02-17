import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, doc, onSnapshot, query, where, orderBy, limit, getDoc, setDoc } from 'firebase/firestore';
import { UserStats, UserAchievement, UserActivityLog } from '../types/user';

export function useUserStats(userId: string) {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const [activityLog, setActivityLog] = useState<UserActivityLog[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) return;

    let unsubStats: () => void;
    let unsubAchievements: () => void;
    let unsubActivity: () => void;

    const setupListeners = async () => {
      try {
        // Initialize stats if needed
        const statsRef = doc(db, 'user_stats', userId);
        const statsDoc = await getDoc(statsRef);
        if (!statsDoc.exists()) {
          await setDoc(statsRef, {
            xp: 0,
            level: 1,
            rank: 0,
            challengesCompleted: 0,
            totalPoints: 0,
            streakDays: 0,
            lastActiveAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
        }

        // Stats listener
        unsubStats = onSnapshot(
          doc(db, 'user_stats', userId),
          (doc) => {
            if (doc.exists()) {
              setStats({ id: doc.id, ...doc.data() } as UserStats);
            }
          },
          (error) => {
            console.error('Error in stats listener:', error);
            setError(error as Error);
          }
        );

        // Achievements listener with fallback
        try {
          const achievementsQuery = query(
            collection(db, 'user_achievements'),
            where('userId', '==', userId),
            orderBy('earnedAt', 'desc')
          );

          unsubAchievements = onSnapshot(achievementsQuery, (snapshot) => {
            const achievements = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as UserAchievement[];
            setAchievements(achievements);
          });
        } catch (error: any) {
          if (error.code === 'failed-precondition') {
            // Fallback to simple query if index doesn't exist
            const fallbackQuery = query(
              collection(db, 'user_achievements'),
              where('userId', '==', userId)
            );
            unsubAchievements = onSnapshot(fallbackQuery, (snapshot) => {
              const achievements = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              })) as UserAchievement[];
              // Sort in memory
              achievements.sort((a, b) => 
                new Date(b.earnedAt).getTime() - new Date(a.earnedAt).getTime()
              );
              setAchievements(achievements);
            });
          } else {
            throw error;
          }
        }

        // Activity log listener with fallback
        try {
          const activityQuery = query(
            collection(db, 'user_activity_log'),
            where('userId', '==', userId),
            orderBy('createdAt', 'desc'),
            limit(10)
          );

          unsubActivity = onSnapshot(activityQuery, (snapshot) => {
            const activities = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as UserActivityLog[];
            setActivityLog(activities);
          });
        } catch (error: any) {
          if (error.code === 'failed-precondition') {
            // Fallback to simple query if index doesn't exist
            const fallbackQuery = query(
              collection(db, 'user_activity_log'),
              where('userId', '==', userId)
            );
            unsubActivity = onSnapshot(fallbackQuery, (snapshot) => {
              const activities = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              })) as UserActivityLog[];
              // Sort in memory and limit
              activities.sort((a, b) => 
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              );
              setActivityLog(activities.slice(0, 10));
            });
          } else {
            throw error;
          }
        }

        setLoading(false);
      } catch (error) {
        console.error('Error setting up listeners:', error);
        setError(error as Error);
        setLoading(false);
      }
    };

    setupListeners();

    return () => {
      if (unsubStats) unsubStats();
      if (unsubAchievements) unsubAchievements();
      if (unsubActivity) unsubActivity();
    };
  }, [userId]);

  return {
    loading,
    error,
    stats,
    achievements,
    activityLog
  };
}