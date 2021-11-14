import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "satriales-30443.firebaseapp.com",
  projectId: "satriales-30443",
  storageBucket: "satriales-30443.appspot.com",
  messagingSenderId: "399232979349",
  appId: "1:399232979349:web:73dbefe32b24b8a0aea69c",
  measurementId: "G-6FRHV43ZWK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
