// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC36g14VyAcTfsxbmV2eOCI3FL2cRyygW4",
  authDomain: "proyecto-77dcb.firebaseapp.com",
  projectId: "proyecto-77dcb",
  storageBucket: "proyecto-77dcb.appspot.com",
  messagingSenderId: "801350801339",
  appId: "1:801350801339:web:6f67d23c2a1b55f3c7169e",
  measurementId: "G-Z8L54NZ7BJ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const autentificacion = getAuth(app);
//const analytics = getAnalytics(app);

export { app, autentificacion };
