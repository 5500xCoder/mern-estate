// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93395.firebaseapp.com",
  projectId: "mern-estate-93395",
  storageBucket: "mern-estate-93395.appspot.com",
  messagingSenderId: "434324465998",
  appId: "1:434324465998:web:a7d35b485ecd4d4043561f",
  measurementId: "G-QF5E84P3D2"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);