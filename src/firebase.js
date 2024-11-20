// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ9LYXNuSUm3zNswrtnXio-oiDWKuEIVc",
  authDomain: "it3101-todo.firebaseapp.com",
  projectId: "it3101-todo",
  storageBucket: "it3101-todo.firebasestorage.app",
  messagingSenderId: "679843888605",
  appId: "1:679843888605:web:d665e2a724bbf4e8b5ca34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);