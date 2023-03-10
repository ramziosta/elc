// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOxvudPdTJWax5NBvFGW9DoGwVkD9mZTQ",
  authDomain: "native-5ee01.firebaseapp.com",
  databaseURL: "https://native-5ee01-default-rtdb.firebaseio.com",
  projectId: "native-5ee01",
  storageBucket: "native-5ee01.appspot.com",
  messagingSenderId: "712392916533",
  appId: "1:712392916533:web:06d859a5c440950bc97b7c",
  measurementId: "G-N7YGPC6N4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);