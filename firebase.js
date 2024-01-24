import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection } from 'firebase/firestore';
import dbconfig from './dbconfig.js';

const firebaseConfig = {
  apiKey: dbconfig.apiKey,
  authDomain: dbconfig.authDomain,
  projectId: dbconfig.projectId,
  storageBucket: dbconfig.storageBucket,
  messagingSenderId: dbconfig.messagingSenderId,
  appId: dbconfig.appId,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
