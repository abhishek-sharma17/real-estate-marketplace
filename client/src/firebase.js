// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-marketplace-97e5a.firebaseapp.com",
  projectId: "real-estate-marketplace-97e5a",
  storageBucket: "real-estate-marketplace-97e5a.appspot.com",
  messagingSenderId: "802838047682",
  appId: "1:802838047682:web:481af2f4fa5edffbd2445b"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
