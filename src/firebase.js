// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmhUhhHt6nYlhF4vQ6Yv0X1aejCYkM8cs",
    authDomain: "lets-chat-fa5d3.firebaseapp.com",
    projectId: "lets-chat-fa5d3",
    storageBucket: "lets-chat-fa5d3.appspot.com",
    messagingSenderId: "460334324918",
    appId: "1:460334324918:web:8f91d94cf85111b73fda17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()