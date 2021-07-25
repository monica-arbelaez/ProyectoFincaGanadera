import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-_eI17Kv6_hl2dtAGTpFvgrb7eCQGMDY",
    authDomain: "fincaganadera-cd51f.firebaseapp.com",
    projectId: "fincaganadera-cd51f",
    storageBucket: "fincaganadera-cd51f.appspot.com",
    messagingSenderId: "311210578380",
    appId: "1:311210578380:web:f4829cf732b69cf3a6cd69",
    measurementId: "G-Y65J8DCD7B"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;