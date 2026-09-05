// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primeestate-6f35b.firebaseapp.com",
  projectId: "primeestate-6f35b",
  storageBucket: "primeestate-6f35b.firebasestorage.app",
  messagingSenderId: "397881172293",
  appId: "1:397881172293:web:0a0a352a5b94da5d2b1e2c",
  measurementId: "G-B2GRZ02WVK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
