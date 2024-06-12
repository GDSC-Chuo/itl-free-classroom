// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAGkAmOsxdIvgugkCml5L405AEVk1s40M",
  authDomain: "itlfreeclassroom.firebaseapp.com",
  projectId: "itlfreeclassroom",
  storageBucket: "itlfreeclassroom.appspot.com",
  messagingSenderId: "804912363313",
  appId: "1:804912363313:web:f88be2245ae42cd1eb6210",
  measurementId: "G-VLXXT4WWWV"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };