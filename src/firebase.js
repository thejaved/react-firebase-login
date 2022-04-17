import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_BASE,
  authDomain: "fir-app-3c73b.firebaseapp.com",
  projectId: "fir-app-3c73b",
  storageBucket: "fir-app-3c73b.appspot.com",
  messagingSenderId: "377417871841",
  appId: "1:377417871841:web:105f774e16a44ace34e2a0",
  measurementId: "G-CC623CS4N5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
