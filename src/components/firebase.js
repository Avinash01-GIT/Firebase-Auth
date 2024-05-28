// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Te-UMuI5vBb3zt8zP2X1ZbH7Lqgazrg",
  authDomain: "login-auth-f52fd.firebaseapp.com",
  projectId: "login-auth-f52fd",
  storageBucket: "login-auth-f52fd.appspot.com",
  messagingSenderId: "1094122739644",
  appId: "1:1094122739644:web:8efd4ff502c16bcdb57db9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Export the Firestore instance
export const db = getFirestore(app);