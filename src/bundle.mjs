// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBddFzgmLBL74cvxssejGg7f3V4W3Vxyvc",
  authDomain: "gallerizia.firebaseapp.com",
  projectId: "gallerizia",
  storageBucket: "gallerizia.appspot.com",
  messagingSenderId: "309957033201",
  appId: "1:309957033201:web:3ea0515eae594c4c7b3d50",
  measurementId: "G-LJTJLY7CRH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user === null) {
    console.log("logged in!");
    const uid = user.uid;
    // ...
  } else {
    console.log("no user");
  }
});
