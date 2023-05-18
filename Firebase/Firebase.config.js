// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_apiKey);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADGLpcAqBgl_qQDCNJpms12brfnSbd8PU",
  authDomain: "superheros-toys-87e11.firebaseapp.com",
  projectId: "superheros-toys-87e11",
  storageBucket: "superheros-toys-87e11.appspot.com",
  messagingSenderId: "1069772542422",
  appId: "1:1069772542422:web:50f0da41018f0068d05477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;