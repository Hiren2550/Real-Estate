// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-741dd.firebaseapp.com",
  projectId: "mern-estate-741dd",
  storageBucket: "mern-estate-741dd.appspot.com",
  messagingSenderId: "501518918708",
  appId: "1:501518918708:web:1e2fbaa0675ac81b54d661",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
