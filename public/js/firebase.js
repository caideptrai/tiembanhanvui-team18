// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5ekF9tt12PDqhWFApUUwzzwacJndlB3I",
  authDomain: "tiembanhanvui-team18.firebaseapp.com",
  projectId: "tiembanhanvui-team18",
  storageBucket: "tiembanhanvui-team18.appspot.com",
  messagingSenderId: "613634226904",
  appId: "1:613634226904:web:030c41625b18c6bdcd75ad",
  measurementId: "G-LKYJRFCDPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);