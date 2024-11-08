// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASjYZkse1l2LQwmgIA6PEZDeepMhbtqvk",
  authDomain: "nick-summarist.firebaseapp.com",
  projectId: "nick-summarist",
  storageBucket: "nick-summarist.firebasestorage.app",
  messagingSenderId: "1019066083602",
  appId: "1:1019066083602:web:f1242e4e7b0ff14d972bcb",
  measurementId: "G-H4QKR4GP9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics};