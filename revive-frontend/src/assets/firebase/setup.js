// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHa8JAunF7HmaG_iQgv7WCWgMX46KWA7k",
  authDomain: "ecommerce-p2-fcf16.firebaseapp.com",
  projectId: "ecommerce-p2-fcf16",
  storageBucket: "ecommerce-p2-fcf16.appspot.com",
  messagingSenderId: "1085461707790",
  appId: "1:1085461707790:web:014bd94ebb4e5e0673d05f",
  measurementId: "G-H0Z2CYRGYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app)

export default auth