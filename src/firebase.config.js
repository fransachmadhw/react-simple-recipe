// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs-MONffi3WihairQcljIX1BeYW_oiRWg",
  authDomain: "react-recipe-app-77865.firebaseapp.com",
  projectId: "react-recipe-app-77865",
  storageBucket: "react-recipe-app-77865.appspot.com",
  messagingSenderId: "1086525416391",
  appId: "1:1086525416391:web:58bc78a24a9c8ef4f3efe2",
  measurementId: "G-P4E7MD8V5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };