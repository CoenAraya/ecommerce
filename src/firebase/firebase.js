// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYP9gD56Z6aJwvffoCBR8vA5sonB4XCE0",
  authDomain: "coenaraya-e-commerce.firebaseapp.com",
  projectId: "coenaraya-e-commerce",
  storageBucket: "coenaraya-e-commerce.appspot.com",
  messagingSenderId: "350186786123",
  appId: "1:350186786123:web:5de31532570d2a8b016cce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)