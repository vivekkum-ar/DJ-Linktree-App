// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_APIKEY_HERE",
  authDomain: "YOUR_AUTHDOMAIN_HERE",
  projectId: "YOUR_PROJECTID_HERE",
  storageBucket: "YOUR_STORAGEBUCKET_HERE",
  messagingSenderId: "YOUR_MESSAGINGSENDERID_HERE",
  appId: "YOUR_APPID_HERE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);