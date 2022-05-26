import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2H_Mh0KJMGoBc1TsnAo5zCtAOXL9F9wU",
    authDomain: "reactgymster.firebaseapp.com",
    projectId: "reactgymster",
    storageBucket: "reactgymster.appspot.com",
    messagingSenderId: "740185294176",
    appId: "1:740185294176:web:068a8c0f277dc4bb654a05",
};

//initialize firebase

firebase.initializeApp(firebaseConfig);

//initialize services - firestore
const projectFirestore = firebase.firestore();

//initialize auth

const projectAuth = firebase.auth();

//initialize

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };