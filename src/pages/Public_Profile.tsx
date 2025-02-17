import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Trophy, Star, Target, Award, Shield, Clock, 
  User, MapPin, Globe, Twitter, Github, Crown, Zap, 
  Calendar, Mail, MessageSquare, Share2
} from 'lucide-react';
import { collection, query, where, getDocs, doc, getDoc, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { UserProfile, UserStats } from '../types/user';
import { formatDate } from '../utils/formatters';
import UserActivityFeed from '../components/UserActivityFeed';
import BadgeCard from '../components/BadgeCard';
import { useBadges } from '../hooks/useBadges';
import Navigation from '../components/Navigation';

function PublicProfile() {
  const { username } = useParams<{ username: string }>();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [badges, setBadges] = useState<any[]>([]);
  const [activityLog, setActivityLog] = useState<any[]>([]);
  const { getUserBadges } = useBadges();
  const [darkMode] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      if (!username) {
        setError('Username not provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Query profile by username
        const profilesRef = collection(db, 'profiles');
        const q = query(profilesRef, where('username', '==', username.toLowerCase()));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setError('Profile not found');
          setLoading(false);
          return;
        }

        const profileDoc = querySnapshot.docs[0];
        const profileData = { id: profileDoc.id, ...profileDoc.data() } as UserProfile;
        setProfile(profileData);

        // Get user stats
        const statsDoc = await getDoc(doc(db, 'user_stats', profileData.id));
        if (statsDoc.exists()) {
          setStats({ id: statsDoc.id, ...statsDoc.data() } as UserStats);
        }

        // Get user badges
        const userBadges = await getUserBadges(profileData.id);
        setBadges(userBadges);

        // Get activity log
        const activityRef = collection(db, 'user_activity_log');
        const activityQuery = query(
          activityRef,
          where('userId', '==', profileData.id),
          orderBy('createdAt', 'desc'),
          limit(10)
        );
        const activitySnapshot = await getDocs(activityQuery);
        setActivityLog(activitySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));

        setLoading(false);
      } catch (err) {
        console.error('Error loading profile:', err);
        setError('Error loading profile');
        setLoading(false);
      }
    };

    loadProfile();
  }, [username, getUserBadges]);

  const calculateXPProgress = (xp: number): number => {
    const xpForNextLevel = (Math.floor(Math.sqrt(xp / 100)) + 1) * 100;
    const xpForCurrentLevel = Math.floor(Math.sqrt(xp / 100)) * 100;
    const progress = ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement contact form submission logic here
    setShowContactForm(false);
    setContactMessage('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-background text-white">
        <Navigation darkMode={darkMode} onToggleDarkMode={() => {}} />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 max-w-md mx-auto">
            <Shield className="w-16 h-16 text-primary-blue mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
            <p className="text-gray-400 mb-6">The requested profile could not be found.</p>
            <Link
              to="/"
              className="inline-flex items-center text-primary-blue hover:text-secondary-blue"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation darkMode={darkMode} onToggleDarkMode={() => {}} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 mb-8 hover:border-primary-blue transition-all duration-300">
          <div className="flex items-center space-x-6">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.username}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary-blue/20"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-primary-blue/20 flex items-center justify-center border-4 border-primary-blue/20">
                <User className="w-12 h-12 text-primary-blue" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold">{profile.fullName}</h1>
                {profile.subscription?.plan === 'pro' && (
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    PRO
                  </span>
                )}
              </div>
              <p className="text-gray-400">@{profile.username}</p>
              {profile.bio && (
                <p className="text-gray-300 mt-2 max-w-2xl">{profile.bio}</p>
              )}
              <div className="flex items-center space-x-4 mt-4">
                {profile.location && (
                  <span className="text-gray-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {profile.location}
                  </span>
                )}
                {profile.website && (
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blue/80 flex items-center"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    Website
                  </a>
                )}
                {profile.github && (
                  <a
                    href={`https://github.com/${profile.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blue/80 flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                )}
                {profile.twitter && (
                  <a
                    href={`https://twitter.com/${profile.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blue/80 flex items-center"
                  >
                    <Twitter className="w-4 h-4 mr-1" />
                    Twitter
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-primary-blue text-background px-4 py-2 rounded-lg hover:bg-secondary-blue transition-all duration-300 flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact
              </button>
              <button
                className="border border-primary-blue text-primary-blue px-4 py-2 rounded-lg hover:bg-primary-blue/10 transition-all duration-300 flex items-center"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Profile
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-primary-dark/95 rounded-lg p-8 border border-primary-blue/20 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Contact {profile.fullName}</h2>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 bg-background border border-primary-blue/20 rounded-lg focus:outline-none focus:border-primary-blue"
                  rows={4}
                />
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary-blue text-background px-4 py-2 rounded-lg hover:bg-secondary-blue transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300">
              <Star className="w-8 h-8 text-primary-blue mb-2" />
              <div className="text-2xl font-bold">Level {stats.level}</div>
              <div className="text-sm text-gray-400">{stats.xp.toLocaleString()} XP</div>
              <div className="mt-2 h-2 bg-primary-dark rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-blue transition-all duration-300"
                  style={{ width: `${calculateXPProgress(stats.xp)}%` }}
                />
              </div>
            </div>
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300">
              <Trophy className="w-8 h-8 text-primary-blue mb-2" />
              <div className="text-2xl font-bold">#{stats.rank}</div>
              <div className="text-sm text-gray-400">Global Rank</div>
            </div>
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300">
              <Target className="w-8 h-8 text-primary-blue mb-2" />
              <div className="text-2xl font-bold">{stats.challengesCompleted}</div>
              <div className="text-sm text-gray-400">Challenges Completed</div>
              <div className="text-xs text-gray-500">{stats.totalPoints.toLocaleString()} Points</div>
            </div>
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300">
              <Clock className="w-8 h-8 text-primary-blue mb-2" />
              <div className="text-2xl font-bold">{stats.streakDays}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
          </div>
        )}

        {/* Badges Section */}
        {badges.length > 0 && (
          <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 mb-8 hover:border-primary-blue transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <Award className="w-6 h-6 text-primary-blue" />
              <h2 className="text-xl font-bold">Badges & Achievements</h2>
            </div>
            <div className="grid gap-4">
              {badges.map((badge) => (
                <BadgeCard
                  key={badge.id}
                  badge={badge}
                  onShare={() => {}}
                />
              ))}
            </div>
          </div>
        )}

        {/* Activity Feed */}
        {activityLog.length > 0 && (
          <UserActivityFeed activities={activityLog} />
        )}

        {/* Member Since */}
        <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Member since</p>
              <p className="text-lg">{formatDate(new Date(profile.createdAt))}</p>
            </div>
            <Shield className="w-6 h-6 text-primary-blue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;