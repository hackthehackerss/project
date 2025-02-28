import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, Award, ShieldAlert, Flame, ExternalLink } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useUserStats } from '../hooks/useUserStats';

function UserProfileButton() {
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();
  const { stats } = useUserStats(profile?.uid || '');
  const [isOpen, setIsOpen] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!profile) return null;

  const isAdmin = profile.email.toLowerCase() === 'hackthehackres@gmail.com';

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleMenuClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center space-x-4">
      {stats && (
        <div className="relative group">
          <div className="flex items-center text-yellow-500">
            <Flame className="w-5 h-5" />
            <span className="ml-1 font-medium">{stats.streakDays || 0}</span>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-primary-dark/90 text-white text-xs rounded-lg py-2 px-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-dark/90 rotate-45"></div>
            <p className="mb-1">Day Streak: {stats.streakDays || 0}</p>
            <div className="h-px bg-gray-600 my-1"></div>
            <p className="text-green-400">Get 500 points - 10 day streak</p>
            <p className="text-green-400">Get 1000 points - 50 day streak</p>
          </div>
        </div>
      )}
      
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-white hover:text-primary-blue transition-colors focus:outline-none"
        >
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.username}
              className="w-8 h-8 rounded-full object-cover border-2 border-transparent hover:border-primary-blue transition-colors"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">
              <User className="w-5 h-5 text-primary-blue" />
            </div>
          )}
          <span className="hidden md:block">{profile.username}</span>
        </button>

        {isOpen && (
          <div 
            className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 z-50 bg-primary-dark border border-primary-blue/20 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            {isAdmin && (
              <button
                onClick={() => handleMenuClick(() => navigate('/admin'))}
                className="w-full text-left px-4 py-2 text-sm text-primary-red hover:bg-primary-red/10 transition-colors cursor-pointer flex items-center"
                role="menuitem"
              >
                <ShieldAlert className="w-4 h-4 mr-2" />
                Admin Panel
              </button>
            )}
            <button
              onClick={() => handleMenuClick(() => navigate('/profile'))}
              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-primary-blue/10 transition-colors cursor-pointer flex items-center"
              role="menuitem"
            >
              <Settings className="w-4 h-4 mr-2" />
              Profile Settings
            </button>
            <button
              onClick={() => handleMenuClick(() => navigate(`/profile/${profile.username}`))}
              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-primary-blue/10 transition-colors cursor-pointer flex items-center"
              role="menuitem"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Public Profile
            </button>
            <button
              onClick={() => handleMenuClick(() => navigate('/profile/certificates'))}
              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-primary-blue/10 transition-colors cursor-pointer flex items-center"
              role="menuitem"
            >
              <Award className="w-4 h-4 mr-2" />
              My Certificates
            </button>
            <button
              onClick={() => handleMenuClick(handleLogout)}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer flex items-center"
              role="menuitem"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfileButton;
