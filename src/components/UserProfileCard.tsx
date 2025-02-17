import React from 'react';
import { Shield, Star, Trophy, Award, Clock } from 'lucide-react';
import { UserProfile, UserStats } from '../types/user';
import { formatDate } from '../utils/formatters';

interface UserProfileCardProps {
  profile: UserProfile;
  stats: UserStats;
}

function UserProfileCard({ profile, stats }: UserProfileCardProps) {
  return (
    <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20">
      <div className="flex items-center space-x-6 mb-6">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={profile.username}
            className="w-24 h-24 rounded-full object-cover border-4 border-primary-blue/20"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-primary-blue/20 flex items-center justify-center">
            <Shield className="w-12 h-12 text-primary-blue" />
          </div>
        )}
        
        <div>
          <h2 className="text-2xl font-bold">{profile.fullName}</h2>
          <p className="text-gray-400">@{profile.username}</p>
          <div className="flex items-center mt-2">
            <span className={`px-3 py-1 rounded-full text-sm ${
              profile.subscription?.plan === 'pro' 
                ? 'bg-primary-blue/20 text-primary-blue'
                : 'bg-gray-500/20 text-gray-400'
            }`}>
              {profile.subscription?.plan === 'pro' ? 'Pro Member' : 'Free Member'}
            </span>
          </div>
        </div>
      </div>

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
          <Award className="w-6 h-6 text-primary-blue mb-2" />
          <div className="text-2xl font-bold">{stats.challengesCompleted}</div>
          <div className="text-sm text-gray-400">Challenges</div>
          <div className="text-xs text-gray-500">{stats.totalPoints} Points</div>
        </div>

        <div className="bg-background/50 rounded-lg p-4 border border-primary-blue/10">
          <Clock className="w-6 h-6 text-primary-blue mb-2" />
          <div className="text-2xl font-bold">{stats.streakDays}</div>
          <div className="text-sm text-gray-400">Day Streak</div>
        </div>
      </div>

      {profile.bio && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-gray-400">{profile.bio}</p>
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-primary-blue/20">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>Member since {formatDate(new Date(profile.createdAt))}</span>
          <span>Last active {formatDate(new Date(stats.lastActiveAt))}</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;