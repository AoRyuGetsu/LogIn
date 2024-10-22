// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWkaIOMfjNxoYC_OlWWxKn0D4WK4-DKpY",
  authDomain: "proyecto-login-2ff97.firebaseapp.com",
  projectId: "proyecto-login-2ff97",
  storageBucket: "proyecto-login-2ff97.appspot.com",
  messagingSenderId: "821199222566",
  appId: "1:821199222566:web:93328d0ed13cf3088b73e7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;