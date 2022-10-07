import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDiDd14JET6f0Mj-_F7SVZDkELWzFmzeEI",
  authDomain: "cross-guild-1ab9f.firebaseapp.com",
  projectId: "cross-guild-1ab9f",
  storageBucket: "cross-guild-1ab9f.appspot.com",
  messagingSenderId: "1091394927570",
  appId: "1:1091394927570:web:e83909e258bc2092f7e60b",
  measurementId: "G-7756ESCKH6",
});


export const db = getFirestore();
export const storage = getStorage(app);
