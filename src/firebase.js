import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "chaton-f10d3.firebaseapp.com",
  projectId: "chaton-f10d3",
  storageBucket: "chaton-f10d3.appspot.com",
  messagingSenderId: "731933097650",
  appId: "1:731933097650:web:c2350835120ef0dd0993ab",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
