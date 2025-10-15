// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_RGlPqg-aroQzKEHDeoDb--T0bByvJlY",
  authDomain: "fir-iti-9192b.firebaseapp.com",
  databaseURL: "https://fir-iti-9192b-default-rtdb.firebaseio.com",
  projectId: "fir-iti-9192b",
  storageBucket: "fir-iti-9192b.firebasestorage.app",
  messagingSenderId: "1044344554416",
  appId: "1:1044344554416:web:4a5dd615d8c64827c54c75",
  measurementId: "G-XPXXL3LZWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
