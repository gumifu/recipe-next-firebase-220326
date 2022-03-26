import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCsK5Lf-q8iCmJiF-QB7HzSRh_UNMFJ5nQ",
  authDomain: "next-firebase-app-220324.firebaseapp.com",
  projectId: "next-firebase-app-220324",
  storageBucket: "next-firebase-app-220324.appspot.com",
  messagingSenderId: "118130149105",
  appId: "1:118130149105:web:b5ae73016cde3016a04b50"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
