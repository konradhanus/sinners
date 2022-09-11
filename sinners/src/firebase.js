// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi5Doz8XbItqfwwcF4RkfzovUY_rt6rOE",
  authDomain: "scoreboardthesinners.firebaseapp.com",
  databaseURL: "https://scoreboardthesinners-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scoreboardthesinners",
  storageBucket: "scoreboardthesinners.appspot.com",
  messagingSenderId: "1022176421417",
  appId: "1:1022176421417:web:0e32df5ca2db1ba580de38",
  measurementId: "G-909XRZF7XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app, analytics};