// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd1cyBwqlJOJqiBAPZbr7-WUDFd2S0WCs",
  authDomain: "flashcardsaas-6b734.firebaseapp.com",
  projectId: "flashcardsaas-6b734",
  storageBucket: "flashcardsaas-6b734.appspot.com",
  messagingSenderId: "158719278136",
  appId: "1:158719278136:web:e3f953ccfb91952f437acd",
  measurementId: "G-N8FVWX380L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db}