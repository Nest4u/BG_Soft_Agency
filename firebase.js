// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKfwDjIYFutPnMlQQmBADtIEkCFANcZ5c",
  authDomain: "aadex-760ec.firebaseapp.com",
  projectId: "aadex-760ec",
  storageBucket: "aadex-760ec.appspot.com",
  messagingSenderId: "662969564761",
  appId: "1:662969564761:web:7ba1c53dc05d50d68f7b48",
  measurementId: "G-LKYKP1QHLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);