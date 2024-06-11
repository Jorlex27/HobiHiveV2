// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu40OkVgY5Zsd-kfH2He2nrdurBk3pKFI",
  authDomain: "hive-3c205.firebaseapp.com",
  projectId: "hive-3c205",
  storageBucket: "hive-3c205.appspot.com",
  messagingSenderId: "1050129273617",
  appId: "1:1050129273617:web:e3063ddd2077c21f6872b0",
  measurementId: "G-JGDDYJL905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);