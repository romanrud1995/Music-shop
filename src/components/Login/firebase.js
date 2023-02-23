// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCLuPO7Lr_VsKTpgBM6YNjvl8r68IOnuio",
  authDomain: "music-cart-login.firebaseapp.com",
  projectId: "music-cart-login",
  storageBucket: "music-cart-login.appspot.com",
  messagingSenderId: "50720724372",
  appId: "1:50720724372:web:13496f6a731576a74d6b81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
