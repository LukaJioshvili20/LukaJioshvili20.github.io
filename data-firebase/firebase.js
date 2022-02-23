'use strict';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhT0ozt13qeUYV8u8ZAbO483AXrBT6KfM",
    authDomain: "javascript-form-send.firebaseapp.com",
    projectId: "javascript-form-send",
    storageBucket: "javascript-form-send.appspot.com",
    messagingSenderId: "153914514147",
    appId: "1:153914514147:web:7dc3f28d03de68d94b43d6"

};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();