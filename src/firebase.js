// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyBzCQRg-2vqgpNyms4Zd0J67j8WQBQr9Vk",
  authDomain: "instagram-cl-2200e.firebaseapp.com",
  projectId: "instagram-cl-2200e",
  storageBucket: "instagram-cl-2200e.appspot.com",
  messagingSenderId: "987422915828",
  appId: "1:987422915828:web:c152cc8cdd4ba715a032a1",
  measurementId: "G-HW2C7MHNK9",
});

// Initialize Firebase
const analytics = getAnalytics(app);
export const auth = app.auth();
export default app;
