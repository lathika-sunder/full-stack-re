// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZiNRZWWm7YPGyI8nyFjXiSwrA_0L416w",
  authDomain: "full-stack-re.firebaseapp.com",
  projectId: "full-stack-re",
  storageBucket: "full-stack-re.appspot.com",
  messagingSenderId: "998748032075",
  appId: "1:998748032075:web:5430e88fc58b4f05b211ce",
  measurementId: "G-JP0JTDS9VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app)

export default auth