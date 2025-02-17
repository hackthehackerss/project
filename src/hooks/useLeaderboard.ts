import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface LeaderboardFilters {
  timeRange: 'all' | 'month' | 'week' | 'day';
  category: 'xp' | 'challenges' | 'streak';
  subscription: 'all' | 'free' | 'pro';
}

export function useLeaderboard(filters: LeaderboardFilters) {
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let baseQuery = collection(db, 'user_stats');
    let queryConstraints: any[] = [];

    // Add time range filter
    if (filters.timeRange !== 'all') {
      const date = new Date();
      switch (filters.timeRange) {
        case 'month':
          date.setMonth(date.getMonth() - 1);
          break;
        case 'week':
          date.setDate(date.getDate() - 7);
          break;
        case 'day':
          date.setDate(date.getDate() - 1);
          break;
      }
      queryConstraints.push(where('lastActiveAt', '>=', date.toISOString()));
    }

    // Add sorting based on category
    const sortField = filters.category === 'xp' ? 'xp' : 
                     filters.category === 'challenges' ? 'challengesCompleted' : 'streakDays';
    queryConstraints.push(orderBy(sortField, 'desc'));
    queryConstraints.push(limit(100));

    const leaderboardQuery = query(baseQuery, ...queryConstraints);

    const unsubscribe = onSnapshot(
      leaderboardQuery,
      (snapshot) => {
        const leaderboardData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEntries(leaderboardData);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching leaderboard:', error);
        setError('Failed to fetch leaderboard data');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [filters]);

  return {
    entries,
    loading,
    error
  };
}