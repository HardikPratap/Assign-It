// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "assign-it-1daa7.firebaseapp.com",
  projectId: "assign-it-1daa7",
  storageBucket: "assign-it-1daa7.firebasestorage.app",
  messagingSenderId: "425206391685",
  appId: "1:425206391685:web:2a0b50afd47019858e5aec",
  measurementId: "G-L80RTMKKH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
