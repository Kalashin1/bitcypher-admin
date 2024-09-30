// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ULb7JhPgjhVqUHCOuKRcYXdVZfXWV60",
  authDomain: "bitcypher-a1fe5.firebaseapp.com",
  projectId: "bitcypher-a1fe5",
  storageBucket: "bitcypher-a1fe5.appspot.com",
  messagingSenderId: "932559059023",
  appId: "1:932559059023:web:64c0a32b2fa78a0480123a",
  measurementId: "G-26ZZXGSEKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
