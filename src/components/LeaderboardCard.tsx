import React from 'react';
import { Trophy, Star, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LeaderboardCardProps {
  title: string;
  entries: Array<{
    username: string;
    fullName: string;
    avatarUrl?: string;
    value: number;
  }>;
  valueLabel: string;
  icon: 'trophy' | 'star' | 'target' | 'clock';
}

function LeaderboardCard({ title, entries, valueLabel, icon }: LeaderboardCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="w-6 h-6 text-primary-blue" />;
      case 'star':
        return <Star className="w-6 h-6 text-primary-blue" />;
      case 'target':
        return <Target className="w-6 h-6 text-primary-blue" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-primary-blue" />;
    }
  };

  return (
    <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          {getIcon()}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <Link 
          to="/leaderboard" 
          className="text-sm text-primary-blue hover:text-secondary-blue transition"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {entries.map((entry, index) => (
          <Link
            key={index}
            to={`/profile/${entry.username}`}
            className="flex items-center justify-between hover:bg-primary-blue/10 p-2 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 w-6">{index + 1}</span>
              {entry.avatarUrl ? (
                <img
                  src={entry.avatarUrl}
                  alt={entry.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">
                  <span className="text-primary-blue text-sm">
                    {entry.fullName.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <div className="font-medium">{entry.fullName}</div>
                <div className="text-sm text-gray-400">@{entry.username}</div>
              </div>
            </div>
            <div className="text-primary-blue font-medium">
              {entry.value.toLocaleString()} {valueLabel}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardCard;