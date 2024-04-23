// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUE19qLswWQ8MtIwx5cCcD-MGQN_k0B9Q",
  authDomain: "netflixgpt-b2f32.firebaseapp.com",
  projectId: "netflixgpt-b2f32",
  storageBucket: "netflixgpt-b2f32.appspot.com",
  messagingSenderId: "644281248468",
  appId: "1:644281248468:web:11f4eaf94d7f00e072a941",
  measurementId: "G-S1NNKC0THX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
