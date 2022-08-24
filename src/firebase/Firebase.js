// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIZL2g5ap2XHWIaHDvlBtSM5ItAKLcwes",
  authDomain: "luigicart-fa579.firebaseapp.com",
  projectId: "luigicart-fa579",
  storageBucket: "luigicart-fa579.appspot.com",
  messagingSenderId: "769037702077",
  appId: "1:769037702077:web:7f16ff84697af93359b8d4",
  measurementId: "G-EZNQYHNWJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const productsColeection = collection(db,'products')