import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Trophy, Star, Target, Award, Shield, Flame, 
  User, MapPin, Globe, Twitter, Github, Crown, Zap, 
  Calendar, Mail, MessageSquare, Share2, CheckCircle2, Linkedin,
  Book, Sword
} from 'lucide-react';
import { collection, query, where, getDocs, doc, getDoc, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { UserProfile, UserStats } from '../types/user';
import { formatDate } from '../utils/formatters';
import UserActivityFeed from '../components/UserActivityFeed';
import BadgeCard from '../components/BadgeCard';
import { useBadges } from '../hooks/useBadges';
import Navigation from '../components/Navigation';

// Challenge badge data
const challengeBadges = [
  {
    id: 'powershell-logs',
    name: 'PowerShell Analysis',
    description: 'Successfully analyzed suspicious PowerShell commands',
    imageUrl: '/Badges/powershell-banner2.png'
  },
  {
    id: 'miner-on-the-run',
    name: 'Miner on the Run',
    description: 'Uncovered a hidden cryptocurrency mining operation',
    imageUrl: '/Badges/cryptominer-banner.png'
  },
  {
    id: 'mft-analysis',
    name: 'Master File Trap',
    description: 'Mastered MFT analysis techniques',
    imageUrl: '/Badges/mft-banner.png'
  },
  {
    id: 'email-analysis',
    name: 'Email Analysis Expert',
    description: 'Successfully analyzed phishing email indicators',
    imageUrl: '/Badges/emailanalysischallenge.png'
  },
  {
    id: 'web-bruteforce',
    name: 'Brute Force Defense',
    description: 'Successfully analyzed a brute force attack',
    imageUrl: '/Badges/bruteforcechallenge.png'
  },
  {
    id: 'hacked-by-captcha',
    name: 'CAPTCHA Analysis',
    description: 'Analyzed malicious CAPTCHA page interactions',
    imageUrl: '/Badges/HackedByCaptcha.png'
  },
  {
    id: 'edr-investigation-challenge',
    name: 'Emotet Trace Challenge',
    description: 'Analyzed malicious Emotet file',
    imageUrl: '/Badges/emotet.png'
  }
];

function PublicProfile() {
  const { username } = useParams<{ username: string }>();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [badges, setBadges] = useState<any[]>([]);
  const [activityLog, setActivityLog] = useState<any[]>([]);
  const { getUserBadges, generateShareUrl } = useBadges();
  const [darkMode] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  // Debug function to log completed challenges
  const logCompletedChallenges = (challenges: string[]) => {
    console.log('Completed challenges:', challenges);
    challengeBadges.forEach(badge => {
      console.log(`Badge ${badge.name} (${badge.id}): ${challenges.includes(badge.id) ? 'Completed' : 'Not completed'}`);
    });
  };

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
        const profileData = { 
          id: profileDoc.id, 
          ...profileDoc.data(),
          fullName: profileDoc.data().fullName || '',
          username: profileDoc.data().username || '',
          createdAt: profileDoc.data().createdAt || new Date().toISOString()
        } as UserProfile;
        
        setProfile(profileData);

        // Get user stats with error handling
        try {
          const statsDoc = await getDoc(doc(db, 'user_stats', profileData.id));
          if (statsDoc.exists()) {
            const statsData = statsDoc.data();
            setStats({ 
              id: statsDoc.id, 
              ...statsData,
              xp: statsData.xp || 0,
              level: statsData.level || 1,
              rank: statsData.rank || 0,
              challengesCompleted: statsData.challengesCompleted || 0,
              totalPoints: statsData.totalPoints || 0,
              streakDays: statsData.streakDays || 0,
              lastActiveAt: statsData.lastActiveAt || new Date().toISOString()
            } as UserStats);
          } else {
            setStats({
              id: profileData.id,
              xp: 0,
              level: 1,
              rank: 0,
              challengesCompleted: 0,
              totalPoints: 0,
              streakDays: 0,
              lastActiveAt: new Date().toISOString(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            });
          }
        } catch (err) {
          console.error('Error fetching user stats:', err);
          setStats({
            id: profileData.id,
            xp: 0,
            level: 1,
            rank: 0,
            challengesCompleted: 0,
            totalPoints: 0,
            streakDays: 0,
            lastActiveAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
        }

        // Get completed challenges
        try {
          const challengesRef = collection(db, 'challenge_progress');
          const challengesQuery = query(
            challengesRef,
            where('userId', '==', profileData.id),
            where('completed', '==', true)
          );
          const challengesSnapshot = await getDocs(challengesQuery);
          const completedChallengeIds = challengesSnapshot.docs.map(doc => doc.data().challengeId);
          console.log("Raw challenge IDs from database:", completedChallengeIds);
          setCompletedChallenges(completedChallengeIds);
          logCompletedChallenges(completedChallengeIds);
        } catch (err) {
          console.error('Error fetching completed challenges:', err);
          setCompletedChallenges([]);
        }

        // Get user badges with error handling
        try {
          if (typeof getUserBadges === 'function') {
            const userBadges = await getUserBadges(profileData.id);
            setBadges(Array.isArray(userBadges) ? userBadges : []);
          } else {
            console.warn('getUserBadges is not a function');
            setBadges([]);
          }
        } catch (err) {
          console.error('Error fetching badges:', err);
          setBadges([]);
        }

        // Get activity log with error handling
        try {
          const activityRef = collection(db, 'user_activity_log');
          const activityQuery = query(
            activityRef,
            where('userId', '==', profileData.id),
            orderBy('createdAt', 'desc'),
            limit(10)
          );
          const activitySnapshot = await getDocs(activityQuery);
          const activities = activitySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            activityType: doc.data().activityType || 'unknown',
            description: doc.data().description || 'Activity',
            xpEarned: doc.data().xpEarned || 0,
            pointsEarned: doc.data().pointsEarned || 0,
            createdAt: doc.data().createdAt || new Date().toISOString()
          }));
          setActivityLog(activities);
        } catch (err) {
          console.error('Error fetching activity log:', err);
          setActivityLog([]);
        }
      } catch (err) {
        console.error('Error loading profile:', err);
        setError('Error loading profile');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      loadProfile();
    } else {
      setLoading(false);
      setError('Username not provided');
    }
  }, [username]);

  const calculateXPProgress = (xp: number): number => {
    if (!xp || isNaN(xp)) return 0;
    const xpForNextLevel = (Math.floor(Math.sqrt(xp / 100)) + 1) * 100;
    const xpForCurrentLevel = Math.floor(Math.sqrt(xp / 100)) * 100;
    const progress = ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowContactForm(false);
    setContactMessage('');
  };

  const handleShareProfile = () => {
    const profileUrl = window.location.href;
    navigator.clipboard.writeText(profileUrl)
      .then(() => {
        alert('Profile URL copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy URL:', err);
      });
  };

  const handleShareBadge = (badgeName: string, platform: string) => {
    console.log(`Sharing badge "${badgeName}" on ${platform}`);
    // Integrate generateShareUrl if needed.
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <div className="flex flex-col items-center animate-fadeInUp">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mb-4"></div>
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-background text-white">
        <Navigation darkMode={darkMode} onToggleDarkMode={() => {}} />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center animate-fadeInUp">
          <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 max-w-md mx-auto">
            <Shield className="w-16 h-16 text-primary-blue mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
            <p className="text-gray-400 mb-6">{error || 'The requested profile could not be found.'}</p>
            <Link
              to="/"
              className="inline-flex items-center text-primary-blue hover:text-secondary-blue transition-colors duration-300"
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

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8 animate-fadeInUp">
        {/* Profile Header */}
        <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300 transform hover:scale-105">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.username}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary-blue/20 transition-all duration-300 transform hover:scale-105"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-primary-blue/20 flex items-center justify-center border-4 border-primary-blue/20">
                <User className="w-12 h-12 text-primary-blue" />
              </div>
            )}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
                <h1 className="text-3xl font-bold">{profile.fullName || profile.username}</h1>
                {profile.subscription?.plan === 'pro' && (
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm font-semibold flex items-center mt-2 md:mt-0 transition-colors duration-300">
                    <Crown className="w-4 h-4 mr-1" />
                    PRO
                  </span>
                )}
              </div>
              <p className="text-gray-400">@{profile.username}</p>
              {profile.bio && (
                <p className="text-gray-300 mt-2 max-w-2xl">{profile.bio}</p>
              )}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
                {profile.location && (
                  <span className="text-gray-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {profile.location}
                  </span>
                )}
                {profile.website && (
                  <a
                    href={profile.website.startsWith('http') ? profile.website : `https://${profile.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blue/80 flex items-center transition-colors duration-300"
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
                    className="text-primary-blue hover:text-primary-blue/80 flex items-center transition-colors duration-300"
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
                    className="text-primary-blue hover:text-primary-blue/80 flex items-center transition-colors duration-300"
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
                className="bg-primary-blue text-background px-4 py-2 rounded-lg hover:bg-secondary-blue transition-all duration-300 flex items-center transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact
              </button>
              <button
                onClick={handleShareProfile}
                className="border border-primary-blue text-primary-blue px-4 py-2 rounded-lg hover:bg-primary-blue/10 transition-all duration-300 flex items-center transform hover:scale-105"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Profile
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-primary-dark/95 rounded-lg p-8 border border-primary-blue/20 max-w-md w-full animate-fadeInUp">
              <h2 className="text-xl font-bold mb-4">Contact {profile.fullName || profile.username}</h2>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 bg-background border border-primary-blue/20 rounded-lg focus:outline-none focus:border-primary-blue transition-colors duration-300"
                  rows={4}
                />
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300"
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

        {/* Stats Grid with 3D Effect */}
        <div className="card-3d">
          <div className="card-3d-inner grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fadeInUp">
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300 transform hover:scale-105">
              <Star className="w-8 h-8 text-primary-blue mb-2" />
              <div className="text-2xl font-bold">Level {stats.level || 1}</div>
              <div className="text-sm text-gray-400">{stats.xp?.toLocaleString() || 0} XP</div>
              <div className="mt-2 h-2 bg-primary-dark rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-blue transition-all duration-300"
                  style={{ width: `${calculateXPProgress(stats.xp || 0)}%` }}
                />
              </div>
            </div>
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300 transform hover:scale-105">
              <Trophy className="w-8 h-8 text-primary-blue mb-2" />
              <div className="text-2xl font-bold">#{stats.rank || 'N/A'}</div>
              <div className="text-sm text-gray-400">Global Rank</div>
            </div>
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300 transform hover:scale-105">
              <Target className="w-8 h-8 text-primary-blue mb-2" />
              <div className="text-2xl font-bold">{stats.challengesCompleted || 0}</div>
              <div className="text-sm text-gray-400">Challenges Completed</div>
              <div className="text-xs text-gray-500">{stats.totalPoints?.toLocaleString() || 0} Points</div>
            </div>
            <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300 transform hover:scale-105">
              <Flame className="w-8 h-8 text-yellow-500 mb-2" />
              <div className="text-2xl font-bold">{stats.streakDays || 0}</div>
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

        {/* Learning Paths Progress Section */}
        <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 mb-8 animate-fadeInUp">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Book className="w-6 h-6 text-primary-blue mr-2" />
            Learning Paths Progress
          </h2>
          {/* Blue Team Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary-blue mr-2" />
                <h3 className="text-lg font-semibold">Blue Team</h3>
              </div>
              <span className="text-sm text-gray-400">0%</span>
            </div>
            <div className="w-full h-2 bg-primary-dark rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-blue transition-all duration-300"
                style={{ width: '0%' }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-400">
              0 of 5 paths completed
            </div>
          </div>
          {/* Red Team Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Sword className="w-5 h-5 text-primary-red mr-2" />
                <h3 className="text-lg font-semibold">Red Team</h3>
              </div>
              <span className="text-sm text-gray-400">0%</span>
            </div>
            <div className="w-full h-2 bg-primary-dark rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-red transition-all duration-300"
                style={{ width: '0%' }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-400">
              0 of 4 paths completed
            </div>
          </div>
        </div>

        {/* Badges Section */}
        {badges && badges.length > 0 && (
          <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 mb-8 hover:border-primary-blue transition-all duration-300 animate-fadeInUp">
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

{/* Challenge Badges Section */}
<div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 mb-8 hover:border-primary-blue transition-all duration-300 animate-fadeInUp">
  {/* Section Title */}
  <div className="flex items-center space-x-4 mb-6">
    <Award className="w-6 h-6 text-primary-blue" />
    <h2 className="text-xl font-bold">Challenge Badges</h2>
  </div>
  {/* Badge Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {challengeBadges.map((badge) => (
      <div
        key={badge.id}
        className="flex flex-col items-center p-4 bg-primary-dark/50 rounded-lg border transition-all duration-300 hover:scale-105"
      >
        {/* Badge Image Container */}
        <div className="relative w-32 h-32 mb-2">
          <img
            src={badge.imageUrl}
            alt={badge.name}
            className={`w-full h-full object-cover rounded-full ${
              !completedChallenges.includes(badge.id) ? 'grayscale opacity-50' : ''
            }`}
          />
        </div>
        <h3 className="font-semibold text-sm text-center">{badge.name}</h3>
        <p className="text-xs text-gray-400 text-center">{badge.description}</p>
      </div>
    ))}
  </div>
</div>

        {/* Activity Feed */}
        {activityLog && activityLog.length > 0 && (
          <UserActivityFeed activities={activityLog} />
        )}

        {/* Member Since */}
        <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue transition-all duration-300 animate-fadeInUp">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Member since</p>
              <p className="text-lg">{profile.createdAt ? formatDate(new Date(profile.createdAt)) : 'Unknown'}</p>
            </div>
            <Shield className="w-6 h-6 text-primary-blue" />
          </div>
        </div>

        {/* Footer */}
        <footer className={`${darkMode ? "bg-primary-dark/30 border-primary-blue/20" : "bg-gray-200 border-gray-300"} text-white py-8 mt-16 border-t`}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>© 2025 HackTheHackers. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PublicProfile;
