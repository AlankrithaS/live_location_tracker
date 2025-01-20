// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAob2jOe2EcBd_i2XjC_Pf_-0tLmUR3S6w",
  authDomain: "geo-tracker-f431c.firebaseapp.com",
  projectId: "geo-tracker-f431c",
  storageBucket: "geo-tracker-f431c.appspot.com",
  messagingSenderId: "503949324189",
  appId: "1:503949324189:web:4da47ef64288911fd28974",
  measurementId: "G-47V79WNKMM"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };