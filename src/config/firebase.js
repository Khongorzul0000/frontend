// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiRZ7ugMN-gP50T5brGzvCzbD_IEpzSW8",
  authDomain: "shine-9de8d.firebaseapp.com",
  projectId: "shine-9de8d",
  storageBucket: "shine-9de8d.appspot.com",
  messagingSenderId: "444122401177",
  appId: "1:444122401177:web:1ee208bc031d9dd2d92b08",
  measurementId: "G-631S7CTTM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
