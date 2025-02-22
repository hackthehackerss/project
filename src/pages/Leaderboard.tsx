import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, Medal, Search, User, Shield, ArrowUp, ArrowDown 
} from 'lucide-react';
import { collection, query, orderBy, limit, onSnapshot, where, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { UserProfile, UserStats } from '../types/user';
import Navigation from '../components/Navigation';

interface LeaderboardEntry {
  profile: UserProfile;
  stats: UserStats;
}

interface LeaderboardFilter {
  timeRange: 'all' | 'month' | 'week' | 'day';
  category: 'xp' | 'challenges' | 'streak';
  subscription: 'all' | 'free' | 'pro';
}

function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<LeaderboardFilter>({
    timeRange: 'all',
    category: 'xp',
    subscription: 'all'
  });
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    // Build the query based on filters
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

    // Add sorting
    const sortField = filters.category === 'xp' ? 'xp' : 
                     filters.category === 'challenges' ? 'challengesCompleted' : 'streakDays';
    queryConstraints.push(orderBy(sortField, sortDirection));
    queryConstraints.push(limit(100));

    const statsQuery = query(baseQuery, ...queryConstraints);

    const unsubscribe = onSnapshot(statsQuery, async (snapshot) => {
      try {
        const leaderboardData: LeaderboardEntry[] = [];

        for (const statsDoc of snapshot.docs) {
          const profileDoc = await getDoc(doc(db, 'profiles', statsDoc.id));
          
          if (profileDoc.exists()) {
            // Apply subscription filter
            if (filters.subscription !== 'all') {
              const profile = profileDoc.data();
              if (filters.subscription === 'pro' && profile.subscription?.plan !== 'pro') continue;
              if (filters.subscription === 'free' && profile.subscription?.plan === 'pro') continue;
            }

            leaderboardData.push({
              profile: { id: profileDoc.id, ...profileDoc.data() } as UserProfile,
              stats: { id: statsDoc.id, ...statsDoc.data() } as UserStats
            });
          }
        }

        setEntries(leaderboardData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [filters, sortDirection]);

  const filteredEntries = entries.filter(entry => 
    entry.profile.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.profile.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation darkMode={true} onToggleDarkMode={() => {}} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Trophy className="w-8 h-8 text-primary-blue" />
            <h1 className="text-3xl font-bold">Global Leaderboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-primary-dark/30 border border-primary-blue/20 rounded-md focus:outline-none focus:border-primary-blue"
              />
            </div>

            <select
              value={filters.timeRange}
              onChange={(e) => setFilters(prev => ({ ...prev, timeRange: e.target.value as any }))}
              className="px-4 py-2 bg-primary-dark/30 border border-primary-blue/20 rounded-md focus:outline-none focus:border-primary-blue"
            >
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
              <option value="day">Today</option>
            </select>

            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value as any }))}
              className="px-4 py-2 bg-primary-dark/30 border border-primary-blue/20 rounded-md focus:outline-none focus:border-primary-blue"
            >
              <option value="xp">XP</option>
              <option value="challenges">Challenges</option>
              <option value="streak">Streak</option>
            </select>

            <select
              value={filters.subscription}
              onChange={(e) => setFilters(prev => ({ ...prev, subscription: e.target.value as any }))}
              className="px-4 py-2 bg-primary-dark/30 border border-primary-blue/20 rounded-md focus:outline-none focus:border-primary-blue"
            >
              <option value="all">All Users</option>
              <option value="free">Free Users</option>
              <option value="pro">Pro Users</option>
            </select>

            <button
              onClick={toggleSortDirection}
              className="p-2 bg-primary-dark/30 border border-primary-blue/20 rounded-md hover:bg-primary-blue/10 transition"
              title={`Sort ${sortDirection === 'desc' ? 'Ascending' : 'Descending'}`}
            >
              {sortDirection === 'desc' ? (
                <ArrowDown className="w-5 h-5" />
              ) : (
                <ArrowUp className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="cyber-loading">
              <div className="cyber-loader">
                <Shield className="w-12 h-12 text-primary-blue" />
                <div className="cyber-dots">
                  <span className="cyber-dot"></span>
                  <span className="cyber-dot"></span>
                  <span className="cyber-dot"></span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">Securing leaderboard data...</p>
            </div>
          </div>
        ) : (
          <div className="bg-primary-dark/30 rounded-lg border border-primary-blue/20">
            <div className="p-6">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-400 mb-4">
                <div className="col-span-1 text-center">Rank</div>
                <div className="col-span-4">User</div>
                <div className="col-span-2 text-center">Level</div>
                <div className="col-span-2 text-center">
                  {filters.category === 'xp' ? 'XP' : 
                   filters.category === 'challenges' ? 'Challenges' : 'Streak'}
                </div>
                <div className="col-span-3 text-right">Last Active</div>
              </div>

              {filteredEntries.map((entry, index) => (
                <Link
                  key={entry.profile.id}
                  to={`/profile/${entry.profile.username}`}
                  className="grid grid-cols-12 gap-4 py-4 border-t border-primary-blue/10 items-center hover:bg-primary-blue/5 transition-colors"
                >
                  <div className="col-span-1 text-center flex justify-center">
                    {index === 0 ? (
                      <Medal className="w-6 h-6 text-yellow-400" />
                    ) : index === 1 ? (
                      <Medal className="w-6 h-6 text-gray-400" />
                    ) : index === 2 ? (
                      <Medal className="w-6 h-6 text-amber-700" />
                    ) : (
                      <span className="text-gray-400">#{index + 1}</span>
                    )}
                  </div>
                  <div className="col-span-4 flex items-center space-x-3">
                    {entry.profile.avatarUrl ? (
                      <img
                        src={entry.profile.avatarUrl}
                        alt={entry.profile.username}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-blue" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium">{entry.profile.fullName}</div>
                      <div className="text-sm text-gray-400">@{entry.profile.username}</div>
                    </div>
                    {entry.profile.subscription?.plan === 'pro' && (
                      <span className="px-2 py-1 bg-primary-blue/20 text-primary-blue text-xs rounded-full">
                        PRO
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="bg-primary-blue/20 text-primary-blue px-2 py-1 rounded-full">
                      {entry.stats.level}
                    </span>
                  </div>
                  <div className="col-span-2 text-center font-mono">
                    {filters.category === 'xp' ? entry.stats.xp.toLocaleString() :
                     filters.category === 'challenges' ? entry.stats.challengesCompleted.toLocaleString() :
                     entry.stats.streakDays}
                  </div>
                  <div className="col-span-3 text-right text-gray-400">
                    {new Date(entry.stats.lastActiveAt).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
