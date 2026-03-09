import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC1uFJWGASiYQTkxUFb_sC5ohFqBSUFvJE",
  authDomain: "netflix-gpt-7c5c0.firebaseapp.com",
  projectId: "netflix-gpt-7c5c0",
  storageBucket: "netflix-gpt-7c5c0.firebasestorage.app",
  messagingSenderId: "615658156347",
  appId: "1:615658156347:web:48037044b9cfefdd85471e",
  measurementId: "G-E5XP1FZJBL"
};


const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();

