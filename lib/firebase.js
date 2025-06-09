import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBs9HnbC0xolKStO9Mco35lZozWzpr7Exo",
  authDomain: "react-4b628.firebaseapp.com",
  databaseURL: "https://react-4b628-default-rtdb.firebaseio.com",
  projectId: "react-4b628",
  storageBucket: "react-4b628.firebasestorage.app",
  messagingSenderId: "1081072125108",
  appId: "1:1081072125108:web:ae21362638c54db63bc3e1",
  measurementId: "G-78LFFCLXHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Analytics (only on client)
let analytics = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, analytics };
