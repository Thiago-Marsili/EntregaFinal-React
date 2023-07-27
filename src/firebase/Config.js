
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA-cGVynKgYv6qtDAJDYyCDiCD0hWEjuvc",
  authDomain: "clase13-69108.firebaseapp.com",
  projectId: "clase13-69108",
  storageBucket: "clase13-69108.appspot.com",
  messagingSenderId: "918374853507",
  appId: "1:918374853507:web:a5d201269824047e1664b6",
  measurementId: "G-5RRT2T6751"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
