// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAGkAmOsxdIvgugkCml5L405AEVk1s40M",
  authDomain: "itlfreeclassroom.firebaseapp.com",
  projectId: "itlfreeclassroom",
  storageBucket: "itlfreeclassroom.appspot.com",
  messagingSenderId: "804912363313",
  appId: "1:804912363313:web:f88be2245ae42cd1eb6210",
  measurementId: "G-VLXXT4WWWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { app, db };