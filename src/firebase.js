import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCNA-m4gGbtP-zPXo1_D4kjg1dr2-f4cfk",
  authDomain: "clone-3b08d.firebaseapp.com",
  projectId: "clone-3b08d",
  storageBucket: "clone-3b08d.appspot.com",
  messagingSenderId: "947782223773",
  appId: "1:947782223773:web:53b3faaa80b53ee90a9174",
  measurementId: "G-ZK485EH0TW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
export default getFirestore();
