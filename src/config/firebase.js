import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8ECLrkIgXZkZRmuV-i2cpetKcXqHyhm8",
  authDomain: "trial-auth-571c7.firebaseapp.com",
  projectId: "trial-auth-571c7",
  storageBucket: "trial-auth-571c7.appspot.com",
  messagingSenderId: "240409518925",
  appId: "1:240409518925:web:494256d1a2a02e8efc4d04",
  measurementId: "G-YPZTE4N4M9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
