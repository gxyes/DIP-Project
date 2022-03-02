
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUlO8uBXhRh-8VadkcQwY7TrNEskKJ5XI",
  authDomain: "dipcalendarsafe.firebaseapp.com",
  projectId: "dipcalendarsafe",
  storageBucket: "dipcalendarsafe.appspot.com",
  messagingSenderId: "212189152592",
  appId: "1:212189152592:web:91af02079d5d7b38bf9855",
  measurementId: "G-8MTKRWTFNB"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);