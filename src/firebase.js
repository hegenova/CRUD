/* eslint-disable */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBJ0OtAaN11gDTNTfehDsFDU0vAgtKh-8",
  authDomain: "project2-b5aff.firebaseapp.com",
  projectId: "project2-b5aff",
  storageBucket: "project2-b5aff.appspot.com",
  messagingSenderId: "494241502271",
  appId: "1:494241502271:web:e2ac4535e5fabbed24d48a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const taskColRef = collection(db, "task");
export default taskColRef;
