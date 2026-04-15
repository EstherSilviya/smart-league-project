import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjTu-q8UAgDrIxcGfT9ENu-TndctHikfw",
  authDomain: "smart-league-project.firebaseapp.com",
  projectId: "smart-league-project",
  storageBucket: "smart-league-project.appspot.com",
  messagingSenderId: "94453749029",
  appId: "1:94453749029:web:37d8c820b5d5b6414bf6cc"
};

const app = initializeApp(firebaseConfig);

// 👇 THIS IS REQUIRED
export const auth = getAuth(app);
export const db = getFirestore(app);