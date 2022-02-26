// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkvY4-idH7S9KE8SJdceyFQlm3X_j1e1k",
  authDomain: "pasteleria-carlos.firebaseapp.com",
  projectId: "pasteleria-carlos",
  storageBucket: "pasteleria-carlos.appspot.com",
  messagingSenderId: "471375250255",
  appId: "1:471375250255:web:43c048653bc3c090dabb3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)