import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCJLVmrQqiVYlaAgR5gpT7ivIcAA1xGBtE",
  authDomain: "chat-app-a2fdb.firebaseapp.com",
  projectId: "chat-app-a2fdb",
  storageBucket: "chat-app-a2fdb.appspot.com",
  messagingSenderId: "463049315121",
  appId: "1:463049315121:web:885a150f20082f5c8b9610",
  measurementId: "G-51HT47T30N"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()
