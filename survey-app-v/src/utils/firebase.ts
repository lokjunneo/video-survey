// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your actual API key
  authDomain: "video-survey-60af5.firebaseapp.com",
  projectId: "video-survey-60af5",
  storageBucket: "video-survey-60af5.appspot.com",
  messagingSenderId: "1025600104460",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }; // Export db so you can use it in your React components
