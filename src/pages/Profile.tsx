import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, User, Shield, Award, Loader2, AlertCircle, 
  CheckCircle, LogOut, Save, ExternalLink, Settings, Activity,
  Twitter, Linkedin
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { formatDate } from '../utils/formatters';
import { useBadges } from '../hooks/useBadges';
import { useUserStats } from '../hooks/useUserStats';
import BadgeCard from '../components/BadgeCard';
import AvatarSelector from '../components/AvatarSelector';
import UserStatsCard from '../components/UserStatsCard';
import UserActivityFeed from '../components/UserActivityFeed';
import { doc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Navigation from '../components/Navigation';

// Challenge badge data
const challengeBadges = [
  {
    id: 'powershell-logs',
    name: 'PowerShell Analysis',
    description: 'Successfully analyzed suspicious PowerShell commands',
    imageUrl: '/Challenges/powershell-banner2.jpg'
  },
  {
    id: 'miner-on-the-run',
    name: 'Miner on the Run',
    description: 'Uncovered a hidden cryptocurrency mining operation',
    imageUrl: '/Challenges/cryptominer-banner.png'
  },
  {
    id: 'mft-analysis',
    name: 'Master File Trap',
    description: 'Mastered MFT analysis techniques',
    imageUrl: '/Challenges/mft-banner.png'
  },
  {
    id: 'email-analysis',
    name: 'Email Analysis Expert',
    description: 'Successfully analyzed phishing email indicators',
    imageUrl: '/Challenges/emailanalysischallenge.png'
  },
  {
    id: 'web-bruteforce',
    name: 'Brute Force Defense',
    description: 'Successfully analyzed a brute force attack',
    imageUrl: '/Challenges/bruteforcechallenge.png'
  },
  {
    id: 'hacked-by-captcha',
    name: 'CAPTCHA Analysis',
    description: 'Analyzed malicious CAPTCHA page interactions',
    imageUrl: '/Challenges/HackedByCaptcha.png'
  }
];

type TabType = 'profile' | 'stats';

function Profile() {
  const navigate = useNavigate();
  const { profile, loading: profileLoading, signOut } = useAuth();
  const { getUserBadges, incrementShareCount, generateShareUrl } = useBadges();
  const [badges, setBadges] = useState<Badge[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
    bio: profile?.bio || '',
    location: profile?.location || '',
    website: profile?.website || '',
    github: profile?.github || '',
    twitter: profile?.twitter || ''
  });
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const { stats, achievements, activityLog, loading: statsLoading } = useUserStats(profile?.uid || '');

  useEffect(() => {
    if (profile) {
      loadBadges();
      loadCompletedChallenges();
      setFormData({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        bio: profile.bio || '',
        location: profile.location || '',
        website: profile.website || '',
        github: profile.github || '',
        twitter: profile.twitter || ''
      });
    }
  }, [profile]);

  const loadBadges = async () => {
    if (!profile) return;
    try {
      const userBadges = await getUserBadges(profile.uid);
      setBadges(userBadges);
    } catch (error) {
      console.error('Error loading badges:', error);
    }
  };

  const loadCompletedChallenges = async () => {
    if (!profile) return;
    try {
      const challengesRef = collection(db, 'challenge_progress');
      const challengesQuery = query(
        challengesRef,
        where('userId', '==', profile.uid),
        where('completed', '==', true)
      );
      const challengesSnapshot = await getDocs(challengesQuery);
      const completedChallengeIds = challengesSnapshot.docs.map(doc => doc.data().challengeId);
      setCompletedChallenges(completedChallengeIds);
    } catch (err) {
      console.error('Error fetching completed challenges:', err);
      setCompletedChallenges([]);
    }
  };

  const handleAvatarChange = async (avatarUrl: string) => {
    if (!profile) return;
    
    try {
      const userRef = doc(db, 'profiles', profile.uid);
      await updateDoc(userRef, {
        avatarUrl
      });
      setMessage({
        type: 'success',
        text: 'Profile image updated successfully'
      });
    } catch (error) {
      console.error('Error updating avatar:', error);
      setMessage({
        type: 'error',
        text: 'Failed to update profile image'
      });
    }
  };

  const handleProfileUpdate = async () => {
    if (!profile) return;
    
    setSaving(true);
    try {
      const userRef = doc(db, 'profiles', profile.uid);
      await updateDoc(userRef, formData);
      setMessage({
        type: 'success',
        text: 'Profile updated successfully'
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({
        type: 'error',
        text: 'Failed to update profile'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleShare = async (badgeId: string, platform: 'twitter' | 'linkedin') => {
    const badge = badges.find(b => b.id === badgeId);
    if (!badge) return;

    const shareUrls = generateShareUrl(badge);
    window.open(shareUrls[platform], '_blank');
    await incrementShareCount(badgeId);
    loadBadges();
  };

  const handleShareBadge = (badgeName: string, platform: 'twitter' | 'linkedin') => {
    const shareText = encodeURIComponent(
      `I earned the ${badgeName} badge on HackTheHackers! Check out my cybersecurity skills! #cybersecurity #hacking #infosec`
    );
    
    const shareUrl = encodeURIComponent(window.location.href);
    
    let platformUrl = '';
    if (platform === 'twitter') {
      platformUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
    } else if (platform === 'linkedin') {
      platformUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&title=${shareText}`;
    }
    
    window.open(platformUrl, '_blank');
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      setMessage({
        type: 'error',
        text: 'Failed to sign out. Please try again.'
      });
    }
  };

  if (profileLoading) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-blue animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation darkMode={true} onToggleDarkMode={() => {}} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {message && (
          <div className={`mb-4 p-4 rounded-lg flex items-center ${
            message.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 mr-2" />
            ) : (
              <AlertCircle className="w-5 h-5 mr-2" />
            )}
            {message.text}
          </div>
        )}

        {/* Profile Header */}
        <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.username}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-primary-blue/20 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary-blue" />
                  </div>
                )}
                <AvatarSelector
                  currentAvatar={profile.avatarUrl}
                  onSelect={handleAvatarChange}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profile.firstName} {profile.lastName}</h1>
                <p className="text-gray-400">@{profile.username}</p>
                <p className="text-sm text-gray-400 mt-1">{profile.email}</p>
              </div>
            </div>
            <Link
              to={`/profile/${profile.username}`}
              className="bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-md hover:bg-primary-blue/20 transition flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Public Profile</span>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
              activeTab === 'profile'
                ? 'bg-primary-blue text-background'
                : 'text-gray-400 hover:text-white hover:bg-primary-blue/10'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Profile Settings</span>
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
              activeTab === 'stats'
                ? 'bg-primary-blue text-background'
                : 'text-gray-400 hover:text-white hover:bg-primary-blue/10'
            }`}
          >
            <Activity className="w-5 h-5" />
            <span>Stats & Activity</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' ? (
          <div className="space-y-8">
            <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20">
              <h2 className="text-xl font-bold mb-6">Profile Information</h2>
              <div className="space-y-6">
                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-4 py-2 rounded-md bg-background border border-primary-blue/20 text-white focus:outline-none focus:border-primary-blue"
                    rows={4}
                  />
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-background border border-primary-blue/20 text-white focus:outline-none focus:border-primary-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-background border border-primary-blue/20 text-white focus:outline-none focus:border-primary-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-background border border-primary-blue/20 text-white focus:outline-none focus:border-primary-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-background border border-primary-blue/20 text-white focus:outline-none focus:border-primary-blue"
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      GitHub Username
                    </label>
                    <input
                      type="text"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-background border border-primary-blue/20 text-white focus:outline-none focus:border-primary-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Twitter Username
                    </label>
                    <input
                      type="text"
                      value={formData.twitter}
                      onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-background border border-primary-blue/20 text-white focus:outline-none focus:border-primary-blue"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleProfileUpdate}
                    disabled={saving}
                    className="bg-primary-blue text-background px-6 py-2 rounded-md hover:bg-secondary-blue transition flex items-center space-x-2"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Sign Out Section */}
            <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20">
              <div className="flex items-center space-x-4 mb-6">
                <LogOut className="w-6 h-6 text-red-500" />
                <h2 className="text-xl font-bold">Account Actions</h2>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Sign Out</h3>
                  <p className="text-sm text-gray-400">
                    Sign out from your account on this device
                  </p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500/10 text-red-500 px-6 py-2 rounded-md hover:bg-red-500/20 transition flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Stats Card */}
            {stats && <UserStatsCard stats={stats} />}

            {/* Challenge Badges Section */}
            <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 mb-8 hover:border-primary-blue transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <Award className="w-6 h-6 text-primary-blue" />
                <h2 className="text-xl font-bold">Challenge Badges</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {challengeBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`relative bg-primary-dark/50 rounded-lg overflow-hidden border ${
                      completedChallenges.includes(badge.id)
                        ? 'border-green-500/50'
                        : 'border-gray-600/20'
                    } transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    <img
                      src={badge.imageUrl}
                      alt={badge.name}
                      className={`w-full h-24 object-cover ${
                        !completedChallenges.includes(badge.id) && 'grayscale opacity-50'
                      }`}
                    />
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm">{badge.name}</h3>
                        {completedChallenges.includes(badge.id) && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mb-2">{badge.description}</p>
                      
                      {completedChallenges.includes(badge.id) && (
                        <div className="flex space-x-2 mt-2">
                          <button 
                            onClick={() => handleShareBadge(badge.name, 'twitter')}
                            className="bg-blue-500 text-white p-1 rounded text-xs flex items-center"
                          >
                            <Twitter className="w-3 h-3 mr-1" />
                            Share
                          </button>
                          <button 
                            onClick={() => handleShareBadge(badge.name, 'linkedin')}
                            className="bg-blue-700 text-white p-1 rounded text-xs flex items-center"
                          >
                            <Linkedin className="w-3 h-3 mr-1" />
                            Share
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            {activityLog && activityLog.length > 0 && (
              <UserActivityFeed activities={activityLog} />
            )}

            {/* Badges Section */}
            {badges.length > 0 && (
              <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20">
                <div className="flex items-center space-x-4 mb-6">
                  <Award className="w-6 h-6 text-primary-blue" />
                  <h2 className="text-xl font-bold">Badges & Achievements</h2>
                </div>
                <div className="grid gap-4">
                  {badges.map((badge) => (
                    <BadgeCard
                      key={badge.id}
                      badge={badge}
                      onShare={(platform) => handleShare(badge.id, platform)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
