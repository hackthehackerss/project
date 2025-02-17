import { doc, updateDoc, increment, getDoc, collection, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface XPAward {
  amount: number;
  reason: string;
  type: 'path_completion' | 'challenge_completion' | 'achievement' | 'daily_streak' | 'admin_bonus';
  metadata?: Record<string, any>;
}

// Base XP values
export const XP_VALUES = {
  PATH_COMPLETION: {
    BEGINNER: 1000,
    INTERMEDIATE: 2000,
    ADVANCED: 3000,
    EXPERT: 4000
  },
  CHALLENGE_COMPLETION: {
    VERY_EASY: 100,
    EASY: 200,
    MEDIUM: 500,
    HARD: 1000,
    EXPERT: 2000
  },
  DAILY_STREAK: {
    BASE: 50,
    BONUS_PER_WEEK: 100,
    BONUS_PER_MONTH: 500
  },
  ACHIEVEMENTS: {
    COMMON: 100,
    RARE: 250,
    EPIC: 500,
    LEGENDARY: 1000
  }
};

// XP multipliers
const XP_MULTIPLIERS = {
  PRO_MEMBER: 1.5,
  WEEKEND_BONUS: 1.25,
  EVENT_BONUS: 2.0
};

export const awardXP = async (userId: string, award: XPAward) => {
  try {
    // Get current user stats and profile
    const [statsDoc, profileDoc] = await Promise.all([
      getDoc(doc(db, 'user_stats', userId)),
      getDoc(doc(db, 'profiles', userId))
    ]);
    
    if (!statsDoc.exists()) {
      throw new Error('User stats not found');
    }

    // Calculate XP multipliers
    let multiplier = 1;
    const profile = profileDoc.data();
    
    // Pro member bonus
    if (profile?.subscription?.plan === 'pro') {
      multiplier *= XP_MULTIPLIERS.PRO_MEMBER;
    }
    
    // Weekend bonus
    const isWeekend = [0, 6].includes(new Date().getDay());
    if (isWeekend) {
      multiplier *= XP_MULTIPLIERS.WEEKEND_BONUS;
    }

    // Calculate final XP amount
    const finalXPAmount = Math.round(award.amount * multiplier);
    const currentXP = statsDoc.data().xp || 0;
    const newXP = currentXP + finalXPAmount;
    
    // Calculate new level
    const newLevel = Math.floor(Math.sqrt(newXP / 100)) + 1;
    const currentLevel = statsDoc.data().level || 1;
    const leveledUp = newLevel > currentLevel;

    // Batch updates
    const batch = db.batch();
    
    // Update user stats
    const statsRef = doc(db, 'user_stats', userId);
    batch.update(statsRef, {
      xp: increment(finalXPAmount),
      level: newLevel,
      updatedAt: new Date().toISOString()
    });

    // Log activity
    const activityRef = doc(collection(db, 'user_activity_log'));
    batch.set(activityRef, {
      userId,
      activityType: 'xp_earned',
      description: award.reason,
      xpEarned: finalXPAmount,
      metadata: {
        ...award.metadata,
        type: award.type,
        baseAmount: award.amount,
        multiplier,
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
      xpGained: finalXPAmount,
      leveledUp,
      previousLevel: currentLevel,
      newLevel
    };
  } catch (error) {
    console.error('Error awarding XP:', error);
    throw error;
  }
};

// Helper functions
export const getPathCompletionXP = (difficulty: string): number => {
  const difficultyMap: { [key: string]: keyof typeof XP_VALUES.PATH_COMPLETION } = {
    'Beginner': 'BEGINNER',
    'Intermediate': 'INTERMEDIATE',
    'Advanced': 'ADVANCED',
    'Expert': 'EXPERT'
  };

  const xpKey = difficultyMap[difficulty];
  return xpKey ? XP_VALUES.PATH_COMPLETION[xpKey] : XP_VALUES.PATH_COMPLETION.BEGINNER;
};

export const getChallengeCompletionXP = (difficulty: string): number => {
  const difficultyMap: { [key: string]: keyof typeof XP_VALUES.CHALLENGE_COMPLETION } = {
    'Very Easy': 'VERY_EASY',
    'Easy': 'EASY',
    'Medium': 'MEDIUM',
    'Hard': 'HARD',
    'Expert': 'EXPERT'
  };

  const xpKey = difficultyMap[difficulty];
  return xpKey ? XP_VALUES.CHALLENGE_COMPLETION[xpKey] : XP_VALUES.CHALLENGE_COMPLETION.EASY;
};

export const calculateStreakBonus = (streakDays: number): number => {
  const baseBonus = XP_VALUES.DAILY_STREAK.BASE;
  const weeklyBonus = Math.floor(streakDays / 7) * XP_VALUES.DAILY_STREAK.BONUS_PER_WEEK;
  const monthlyBonus = Math.floor(streakDays / 30) * XP_VALUES.DAILY_STREAK.BONUS_PER_MONTH;
  return baseBonus + weeklyBonus + monthlyBonus;
};

export const getAchievementXP = (rarity: string): number => {
  const rarityMap: { [key: string]: keyof typeof XP_VALUES.ACHIEVEMENTS } = {
    'Common': 'COMMON',
    'Rare': 'RARE',
    'Epic': 'EPIC',
    'Legendary': 'LEGENDARY'
  };

  const xpKey = rarityMap[rarity];
  return xpKey ? XP_VALUES.ACHIEVEMENTS[xpKey] : XP_VALUES.ACHIEVEMENTS.COMMON;
};