
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

// Your web app's Firebase configuration
// Jessie database
const firebaseConfig = {
  apiKey: "AIzaSyCUlO8uBXhRh-8VadkcQwY7TrNEskKJ5XI",
  authDomain: "dipcalendarsafe.firebaseapp.com",
  projectId: "dipcalendarsafe",
  storageBucket: "dipcalendarsafe.appspot.com",
  messagingSenderId: "212189152592",
  appId: "1:212189152592:web:91af02079d5d7b38bf9855",
  measurementId: "G-8MTKRWTFNB"
  };

// Marcus database
// const firebaseConfig = {
//   apiKey: "AIzaSyAp_x4Q-bDdgY2isivuOi8xtRMVYm9zQOQ",
//   authDomain: "dipcalender.firebaseapp.com",
//   projectId: "dipcalender",
//   storageBucket: "dipcalender.appspot.com",
//   messagingSenderId: "117720083664",
//   appId: "1:117720083664:web:8bd7f53cb122e1a24b02d5",
//   measurementId: "G-WF4Z0W73YH"
// };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const db = getFirestore(app);