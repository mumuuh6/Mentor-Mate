// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9vGtVYbkN4Ze3Bgk1l6m3oueRpJEhAYE",
  authDomain: "mentormate-ecccd.firebaseapp.com",
  projectId: "mentormate-ecccd",
  storageBucket: "mentormate-ecccd.firebasestorage.app",
  messagingSenderId: "114146977905",
  appId: "1:114146977905:web:5988fdc0c2f2a94942d3d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;