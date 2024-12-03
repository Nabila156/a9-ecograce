// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRDjtYkVbyieAPmpt1DoQuDUfVJiXyHJk",
  authDomain: "ecograce-a9.firebaseapp.com",
  projectId: "ecograce-a9",
  storageBucket: "ecograce-a9.firebasestorage.app",
  messagingSenderId: "353904705264",
  appId: "1:353904705264:web:eabca00c45983984c78c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;