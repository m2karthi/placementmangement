import firebase from "firebase";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc9TZiJXk7SOayIlvYMNhnxwXtGguyNjY",
    authDomain: "the-village-administrator-app.firebaseapp.com",
    projectId: "the-village-administrator-app",
    storageBucket: "the-village-administrator-app.appspot.com",
    messagingSenderId: "933037916007",
    appId: "1:933037916007:web:3a444bf5f6bb0c0a23b9c2",
    measurementId: "G-CH6CQSFHJ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize functions
const functions = firebaseApp.functions();
// Initialize Firebstore
const db = firebaseApp.firestore();
//Initialize storage



export { db,  functions };
