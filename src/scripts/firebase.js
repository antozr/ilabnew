
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdfXlnRAILb9w125vhhM2grnzTXAznOJs",
    authDomain: "ilabcastle.firebaseapp.com",
    projectId: "ilabcastle",
    storageBucket: "ilabcastle.appspot.com",
    messagingSenderId: "1003779176831",
    appId: "1:1003779176831:web:ee67d82ef353d5ba1ec24a",
    measurementId: "G-40VK8WXFS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
export default db;
