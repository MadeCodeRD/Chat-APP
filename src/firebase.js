
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
console.log(firebase.config().config.apikey);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "chat-app-720bb.firebaseapp.com",
  projectId: "chat-app-720bb",
  storageBucket: "chat-app-720bb.appspot.com",
  messagingSenderId: "136644382031",
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);
