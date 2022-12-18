// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjmXKEZZx0MPYxTLnuNZjtyBLyXChu52U",
    authDomain: "books-library-43ef0.firebaseapp.com",
    projectId: "books-library-43ef0",
    storageBucket: "books-library-43ef0.appspot.com",
    messagingSenderId: "1074682755849",
    appId: "1:1074682755849:web:4c353018d67ecbe36631d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);