import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmtlHL5TOJ3MzRCNG5qZPaD1KjnqyghAI",
  authDomain: "docs-3bc9f.firebaseapp.com",
  projectId: "docs-3bc9f",
  storageBucket: "docs-3bc9f.appspot.com",
  messagingSenderId: "1072613984200",
  appId: "1:1072613984200:web:e2e3fea93e9d40748722fd"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDFxFGdHl9obp9j_eIYebG2Ywd_QKp0rgE",
//   authDomain: "next--docs-719cd.firebaseapp.com",
//   projectId: "next--docs-719cd",
//   storageBucket: "next--docs-719cd.appspot.com",
//   messagingSenderId: "725211284405",
//   appId: "1:725211284405:web:7ddb1da1664a79228ccffc",
//   measurementId: "G-B9PNJTTN4T",
// };

// checking whether the app is already initialize or not
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// initialize and access db
const db = app.firestore();

// exporting db
export { db, firebaseConfig };
