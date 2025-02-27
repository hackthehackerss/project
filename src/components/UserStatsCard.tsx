import React from 'react';
import { Trophy, Star, Activity, Flame } from 'lucide-react';
import { UserStats } from '../types/user';

interface UserStatsCardProps {
  stats: UserStats;
}

export default function UserStatsCard({ stats }: UserStatsCardProps) {
  return (
    <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <Trophy className="w-6 h-6 text-primary-blue mr-2" />
        Stats & Progress
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-background/50 rounded-lg p-4 border border-primary-blue/10">
          <Star className="w-6 h-6 text-primary-blue mb-2" />
          <div className="text-2xl font-bold">{stats.level}</div>
          <div className="text-sm text-gray-400">Level</div>
          <div className="text-xs text-gray-500">{stats.xp} XP</div>
        </div>

        <div className="bg-background/50 rounded-lg p-4 border border-primary-blue/10">
          <Trophy className="w-6 h-6 text-primary-blue mb-2" />
          <div className="text-2xl font-bold">#{stats.rank}</div>
          <div className="text-sm text-gray-400">Global Rank</div>
        </div>

        <div className="bg-background/50 rounded-lg p-4 border border-primary-blue/10">
          <Activity className="w-6 h-6 text-primary-blue mb-2" />
          <div className="text-2xl font-bold">{stats.challengesCompleted}</div>
          <div className="text-sm text-gray-400">Challenges</div>
          <div className="text-xs text-gray-500">{stats.totalPoints} Points</div>
        </div>

        <div className="bg-background/50 rounded-lg p-4 border border-primary-blue/10">
          <Flame className="w-6 h-6 text-yellow-500 mb-2" />
          <div className="text-2xl font-bold">{stats.streakDays}</div>
          <div className="text-sm text-gray-400">Day Streak</div>
          <div className="text-xs text-gray-500 group relative">
            <span className="cursor-help">Streak rewards</span>
            <div className="absolute bottom-full left-0 mb-2 w-48 bg-primary-dark/90 text-white text-xs rounded-lg py-2 px-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
              <p className="text-green-400">Get 500 points - 10 day streak</p>
              <p className="text-green-400">Get 1000 points - 50 day streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
