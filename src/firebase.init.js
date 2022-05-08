// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-O6JBC-5iZow3tsm6e-lyvToUdH6n2rU",
  authDomain: "genius-car-e6bc6.firebaseapp.com",
  projectId: "genius-car-e6bc6",
  storageBucket: "genius-car-e6bc6.appspot.com",
  messagingSenderId: "180503217999",
  appId: "1:180503217999:web:f9b6dfba18dbbb1a36273a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
