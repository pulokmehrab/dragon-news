// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNwdpFHkhK-H2YXIm9cGWfhpn-oyGiVWY",
  authDomain: "dragon-news-e3dbc.firebaseapp.com",
  projectId: "dragon-news-e3dbc",
  storageBucket: "dragon-news-e3dbc.appspot.com",
  messagingSenderId: "1018112831735",
  appId: "1:1018112831735:web:476e929289a54c8271e3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;