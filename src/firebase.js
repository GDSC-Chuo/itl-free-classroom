// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoXYA1QbZwnCckbRqqZ0popV9eyCiUyhg",
  authDomain: "gdsc-team3.firebaseapp.com",
  projectId: "gdsc-team3",
  storageBucket: "gdsc-team3.appspot.com",
  messagingSenderId: "923194764787",
  appId: "1:923194764787:web:db2831c06ff221273bb686",
  measurementId: "G-BNZ605498K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);