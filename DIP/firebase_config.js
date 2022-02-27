
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp_x4Q-bDdgY2isivuOi8xtRMVYm9zQOQ",
    authDomain: "dipcalender.firebaseapp.com",
    projectId: "dipcalender",
    storageBucket: "dipcalender.appspot.com",
    messagingSenderId: "117720083664",
    appId: "1:117720083664:web:8bd7f53cb122e1a24b02d5",
    measurementId: "G-WF4Z0W73YH"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);