// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX0JQ_CLl6Hw14qoPKjQ8w2j3oTAM5UsM",
  authDomain: "blockstream-23826.firebaseapp.com",
  projectId: "blockstream-23826",
  storageBucket: "blockstream-23826.appspot.com",
  messagingSenderId: "26442626047",
  appId: "1:26442626047:web:01bbb4b4bb669209bcedca",
  measurementId: "G-BM4QNCWZY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
