// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
/* import { getAnalytics } from "firebase/analytics"; */
/* import Constants from 'expo-constants'; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfV0FHojN-L5DLlEFMKl-dmfGRG_0wCxE",
  authDomain: "front-rn.firebaseapp.com",
  projectId: "front-rn",
  storageBucket: "front-rn.appspot.com",
  messagingSenderId: "345941823075",
  appId: "1:345941823075:web:56f7c7d4301ca7b5d13256",
  measurementId: "G-LPFGTS9GR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */