import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CreditCard, Trophy, Sun, Moon, FlaskConical, Award, BookOpen } from 'lucide-react'; // Added BookOpen icon
import UserProfileButton from './UserProfileButton';
import { useAuth } from '../contexts/AuthContext';
import logoShieldImg from '/Main/logo-shield.png';

interface NavigationProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

function Navigation({ darkMode, onToggleDarkMode }: NavigationProps) {
  const { profile } = useAuth();

  return (
    <nav className={`${darkMode ? 'bg-primary-dark border-b border-primary-blue/20' : 'bg-white border-b border-gray-200'} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="logo-glitch">
                <img 
                  src={logoShieldImg} 
                  alt="HackTheHackers Logo" 
                  className="h-10 w-auto animate-float"
                />
              </div>
              <span className="text-xl font-bold">
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Hack</span>
                <span className="text-primary-red">The</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Hackers</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* New Blog Tab inserted before Learning Paths */}
            <Link 
              to="/blog" 
              className={`${darkMode ? 'text-gray-300 hover:text-primary-blue' : 'text-gray-700 hover:text-gray-900'} flex items-center space-x-1 transition-colors text-sm`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>

            <Link 
              to="/learning-paths" 
              className={`${darkMode ? 'text-gray-300 hover:text-primary-blue' : 'text-gray-700 hover:text-gray-900'} flex items-center space-x-1 transition-colors text-sm`}
            >
              <Shield className="w-4 h-4" />
              <span>Learning Paths</span>
            </Link>
            
            <Link 
              to="/challenges" 
              className={`${darkMode ? 'text-gray-300 hover:text-primary-blue' : 'text-gray-700 hover:text-gray-900'} flex items-center space-x-1 transition-colors text-sm`}
            >
              <Award className="w-4 h-4" />
              <span>Challenges</span>
            </Link>

            {/* Labs Section */}
            <Link 
              to="/labs" 
              className={`${darkMode ? 'text-gray-300 hover:text-primary-blue' : 'text-gray-700 hover:text-gray-900'} flex items-center space-x-1 transition-colors text-sm`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Labs</span>
            </Link>
            
            <Link 
              to="/leaderboard" 
              className={`${darkMode ? 'text-gray-300 hover:text-primary-blue' : 'text-gray-700 hover:text-gray-900'} flex items-center space-x-1 transition-colors text-sm`}
            >
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
            </Link>
            
            <Link 
              to="/pricing" 
              className={`${darkMode ? 'text-gray-300 hover:text-primary-blue' : 'text-gray-700 hover:text-gray-900'} flex items-center space-x-1 transition-colors text-sm`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Pricing Plans</span>
            </Link>

            <button 
              onClick={onToggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>

            {profile ? (
              <UserProfileButton />
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/signin" 
                  className={`${darkMode ? 'text-gray-300 hover:text-primary-blue' : 'text-gray-700 hover:text-gray-900'} transition-colors text-sm`}
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-primary-red text-white px-4 py-2 rounded-md hover:bg-secondary-red transition text-sm min-w-[100px] text-center"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
