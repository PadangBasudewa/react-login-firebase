import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYeYCTAADdU8UkDI-TehJK8sbQs9DH9Sg",
  authDomain: "loginfirebase-82c14.firebaseapp.com",
  databaseURL: "https://loginfirebase-82c14.firebaseio.com",
  projectId: "loginfirebase-82c14",
  storageBucket: "loginfirebase-82c14.appspot.com",
  messagingSenderId: "33901833567",
  appId: "1:33901833567:web:8ce0b2533bc64364355aea",
  measurementId: "G-GVH231QH31"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;