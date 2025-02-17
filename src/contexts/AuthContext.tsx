import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  AuthError
} from 'firebase/auth';
import { doc, setDoc, getDoc, onSnapshot, writeBatch, collection, query, where, getDocs, increment } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { Loader2 } from 'lucide-react';

interface AuthContextType {
  user: User | null;
  profile: any;
  loading: boolean;
  signUp: (email: string, password: string, username: string, fullName: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const handleAuthError = (error: AuthError): string => {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/user-disabled':
        return 'This account has been disabled';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Invalid email or password';
      case 'auth/email-already-in-use':
        return 'An account already exists with this email';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection';
      case 'auth/popup-closed-by-user':
        return 'Authentication cancelled';
      case 'auth/operation-not-allowed':
        return 'This authentication method is not enabled';
      default:
        console.error('Unhandled auth error:', error);
        return 'An unexpected error occurred. Please try again';
    }
  };

  const checkUserStatus = async (userId: string): Promise<boolean> => {
    try {
      const profileDoc = await getDoc(doc(db, 'profiles', userId));
      if (profileDoc.exists()) {
        const profileData = profileDoc.data();
        return profileData.status !== 'blocked';
      }
      return true; // New users are not blocked by default
    } catch (error) {
      console.error('Error checking user status:', error);
      return false;
    }
  };

  const signUp = async (email: string, password: string, username: string, fullName: string) => {
    try {
      // Check if username is already taken
      const usernameQuery = query(
        collection(db, 'profiles'),
        where('username', '==', username.toLowerCase())
      );
      const usernameSnapshot = await getDocs(usernameQuery);
      if (!usernameSnapshot.empty) {
        throw new Error('Username already taken');
      }

      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      const batch = writeBatch(db);

      // Create profile
      const profileRef = doc(db, 'profiles', user.uid);
      batch.set(profileRef, {
        username: username.toLowerCase(),
        fullName,
        email: email.toLowerCase(),
        status: 'active',
        createdAt: new Date().toISOString(),
        lastSeen: new Date().toISOString(),
        isOnline: true,
        loginAttempts: 0
      });

      // Initialize stats
      const statsRef = doc(db, 'user_stats', user.uid);
      batch.set(statsRef, {
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

      // Create welcome achievement
      const achievementRef = doc(collection(db, 'user_achievements'));
      batch.set(achievementRef, {
        userId: user.uid,
        achievementType: 'account_created',
        name: 'Welcome to HackTheHackers',
        description: 'Started your cybersecurity journey',
        earnedAt: new Date().toISOString(),
        metadata: {},
        createdAt: new Date().toISOString()
      });

      // Log first activity
      const activityRef = doc(collection(db, 'user_activity_log'));
      batch.set(activityRef, {
        userId: user.uid,
        activityType: 'account_created',
        description: 'Created HackTheHackers account',
        xpEarned: 100,
        pointsEarned: 0,
        metadata: {},
        createdAt: new Date().toISOString()
      });

      await batch.commit();
      return user;
    } catch (error: any) {
      console.error('Error during sign up:', error);
      if (error.message === 'Username already taken') {
        throw new Error('Username already taken');
      }
      throw new Error(handleAuthError(error));
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Check if user is blocked before attempting sign in
      const profileQuery = query(
        collection(db, 'profiles'),
        where('email', '==', email.toLowerCase())
      );
      const profileSnapshot = await getDocs(profileQuery);
      
      if (!profileSnapshot.empty) {
        const profileData = profileSnapshot.docs[0].data();
        if (profileData.status === 'blocked') {
          window.location.href = '/blocked';
          throw new Error('Your account has been blocked. Please contact support.');
        }

        // Check for too many failed attempts
        if (profileData.loginAttempts >= 5) {
          const lastAttempt = new Date(profileData.lastLoginAttempt);
          const cooldownPeriod = 15 * 60 * 1000; // 15 minutes
          if (Date.now() - lastAttempt.getTime() < cooldownPeriod) {
            throw new Error('Too many failed attempts. Please try again later');
          }
        }
      }

      const result = await signInWithEmailAndPassword(auth, email, password);
      
      if (result.user) {
        const batch = writeBatch(db);
        const profileRef = doc(db, 'profiles', result.user.uid);

        // Reset login attempts on successful login
        batch.update(profileRef, {
          lastSeen: new Date().toISOString(),
          isOnline: true,
          lastLoginAt: new Date().toISOString(),
          loginAttempts: 0
        });

        // Log successful login
        const activityRef = doc(collection(db, 'user_activity_log'));
        batch.set(activityRef, {
          userId: result.user.uid,
          activityType: 'login',
          description: 'Logged in successfully',
          createdAt: new Date().toISOString()
        });

        await batch.commit();
      }
      
      return result;
    } catch (error: any) {
      console.error('Error during sign in:', error);

      // Update failed login attempts
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        try {
          const profileQuery = query(
            collection(db, 'profiles'),
            where('email', '==', email.toLowerCase())
          );
          const profileSnapshot = await getDocs(profileQuery);
          
          if (!profileSnapshot.empty) {
            const profileRef = doc(db, 'profiles', profileSnapshot.docs[0].id);
            await setDoc(profileRef, {
              loginAttempts: increment(1),
              lastLoginAttempt: new Date().toISOString()
            }, { merge: true });
          }
        } catch (err) {
          console.error('Error updating login attempts:', err);
        }
      }

      throw new Error(handleAuthError(error));
    }
  };

  const signOut = async () => {
    try {
      if (user) {
        const batch = writeBatch(db);
        
        // Update profile
        const profileRef = doc(db, 'profiles', user.uid);
        batch.update(profileRef, {
          lastSeen: new Date().toISOString(),
          isOnline: false
        });

        // Log sign out
        const activityRef = doc(collection(db, 'user_activity_log'));
        batch.set(activityRef, {
          userId: user.uid,
          activityType: 'logout',
          description: 'Signed out',
          createdAt: new Date().toISOString()
        });

        await batch.commit();
      }
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Error during sign out:', error);
      throw error;
    }
  };

  useEffect(() => {
    let profileUnsubscribe: (() => void) | undefined;

    const authUnsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Check if user is blocked
          const isActive = await checkUserStatus(user.uid);
          if (!isActive) {
            await firebaseSignOut(auth);
            setUser(null);
            setProfile(null);
            window.location.href = '/blocked';
            return;
          }

          setUser(user);
          
          // Set up real-time listener for profile
          profileUnsubscribe = onSnapshot(
            doc(db, 'profiles', user.uid),
            async (doc) => {
              if (doc.exists()) {
                const profileData = {
                  uid: user.uid,
                  email: user.email,
                  ...doc.data()
                };

                // Check for blocked status in real-time
                if (profileData.status === 'blocked') {
                  await firebaseSignOut(auth);
                  setUser(null);
                  setProfile(null);
                  window.location.href = '/blocked';
                  return;
                }

                setProfile(profileData);
              }
            },
            (error) => {
              console.error('Error in profile listener:', error);
              setProfile(null);
            }
          );
        } catch (error) {
          console.error('Error setting up profile:', error);
          setProfile(null);
        }
      } else {
        if (profileUnsubscribe) {
          profileUnsubscribe();
        }
        setUser(null);
        setProfile(null);
      }
      
      setLoading(false);
    });

    return () => {
      authUnsubscribe();
      if (profileUnsubscribe) {
        profileUnsubscribe();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-blue animate-spin" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}