import { doc, updateDoc, increment, getDoc, collection, setDoc, writeBatch } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface XPAward {
  amount: number;
  reason: string;
  type: 'path_completion' | 'challenge_completion' | 'achievement' | 'daily_streak' | 'admin_bonus';
  metadata?: Record<string, any>;
}

// Base XP values
export const XP_VALUES = {
  CHALLENGE_COMPLETION: {
    EASY: 200,
    MEDIUM: 500,
    HARD: 1000
  },
  DAILY_STREAK: {
    BASE: 50,
    BONUS_10_DAYS: 500,
    BONUS_50_DAYS: 1000
  }
};

export const awardXP = async (userId: string, award: XPAward) => {
  try {
    // Get current user stats
    const statsRef = doc(db, 'user_stats', userId);
    const statsDoc = await getDoc(statsRef);
    
    if (!statsDoc.exists()) {
      throw new Error('User stats not found');
    }

    const currentXP = statsDoc.data().xp || 0;
    const newXP = currentXP + award.amount;
    
    // Calculate new level (sqrt of XP/100)
    const newLevel = Math.floor(Math.sqrt(newXP / 100)) + 1;
    const currentLevel = statsDoc.data().level || 1;
    const leveledUp = newLevel > currentLevel;

    // Start a batch write
    const batch = writeBatch(db);
    
    // Update user stats
    batch.update(statsRef, {
      xp: increment(award.amount),
      level: newLevel,
      totalPoints: increment(award.amount),
      updatedAt: new Date().toISOString()
    });

    // Log activity
    const activityRef = doc(collection(db, 'user_activity_log'));
    batch.set(activityRef, {
      userId,
      activityType: 'xp_earned',
      description: award.reason,
      xpEarned: award.amount,
      metadata: {
        ...award.metadata,
        type: award.type,
        levelUp: leveledUp,
        previousLevel: currentLevel,
        newLevel: newLevel
      },
      createdAt: new Date().toISOString()
    });

    // If leveled up, create achievement
    if (leveledUp) {
      const achievementRef = doc(collection(db, 'user_achievements'));
      batch.set(achievementRef, {
        userId,
        achievementType: 'level_up',
        name: `Reached Level ${newLevel}`,
        description: `Advanced to level ${newLevel}`,
        earnedAt: new Date().toISOString(),
        metadata: {
          previousLevel: currentLevel,
          newLevel: newLevel
        },
        createdAt: new Date().toISOString()
      });
    }

    await batch.commit();

    return {
      previousXP: currentXP,
      newXP,
      xpGained: award.amount,
      leveledUp,
      previousLevel: currentLevel,
      newLevel
    };
  } catch (error) {
    console.error('Error awarding XP:', error);
    throw error;
  }
};

export const getChallengeCompletionXP = (difficulty: string): number => {
  const difficultyMap: { [key: string]: keyof typeof XP_VALUES.CHALLENGE_COMPLETION } = {
    'Easy': 'EASY',
    'Medium': 'MEDIUM',
    'Hard': 'HARD'
  };

  const xpKey = difficultyMap[difficulty];
  return xpKey ? XP_VALUES.CHALLENGE_COMPLETION[xpKey] : XP_VALUES.CHALLENGE_COMPLETION.EASY;
};
