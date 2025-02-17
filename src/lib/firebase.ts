import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2acFisql4JMzNTHUPQA06J8hjtccxYZM",
  authDomain: "hackthehackers-3a983.firebaseapp.com",
  projectId: "hackthehackers-3a983",
  storageBucket: "hackthehackers-3a983.firebasestorage.app",
  messagingSenderId: "200316725086",
  appId: "1:200316725086:web:1a9588dc25d9a909e551cf",
  measurementId: "G-52TPBPCPVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

// Initialize Firestore
const db = getFirestore(app);

// Initialize collections if they don't exist
const initializeUserCollections = async (userId: string) => {
  try {
    const batch = writeBatch(db);

    // Initialize user_stats
    const statsRef = doc(db, 'user_stats', userId);
    const statsDoc = await getDoc(statsRef);
    if (!statsDoc.exists()) {
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
    }

    // Initialize welcome achievement
    const achievementRef = doc(collection(db, 'user_achievements'), `${userId}_welcome`);
    const achievementDoc = await getDoc(achievementRef);
    if (!achievementDoc.exists()) {
      batch.set(achievementRef, {
        userId,
        achievementType: 'account_created',
        name: 'Welcome to HackTheHackers',
        description: 'Started your cybersecurity journey',
        earnedAt: new Date().toISOString(),
        metadata: {},
        createdAt: new Date().toISOString()
      });
    }

    // Initialize welcome activity
    const activityRef = doc(collection(db, 'user_activity_log'), `${userId}_welcome`);
    const activityDoc = await getDoc(activityRef);
    if (!activityDoc.exists()) {
      batch.set(activityRef, {
        userId,
        activityType: 'account_created',
        description: 'Created HackTheHackers account',
        xpEarned: 100,
        pointsEarned: 0,
        metadata: {},
        createdAt: new Date().toISOString()
      });
    }

    // Commit all changes in a single batch
    await batch.commit();
  } catch (error) {
    console.error('Error initializing user collections:', error);
    throw error;
  }
};

// Helper function to ensure collections exist
const ensureCollections = async (userId: string) => {
  if (!userId) return;
  
  try {
    const statsRef = doc(db, 'user_stats', userId);
    const statsDoc = await getDoc(statsRef);
    
    if (!statsDoc.exists()) {
      await initializeUserCollections(userId);
    }
  } catch (error) {
    console.error('Error ensuring collections:', error);
  }
};

export { auth, db, initializeUserCollections, ensureCollections };