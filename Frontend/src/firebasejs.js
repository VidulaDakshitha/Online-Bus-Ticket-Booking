import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAjS-NRIKCIYOh5zLQg4mE3dLoWFSzBXcM",
    authDomain: "ticketsystem-e895b.firebaseapp.com",
    databaseURL: "https://ticketsystem-e895b.firebaseio.com",
    projectId: "ticketsystem-e895b",
    storageBucket: "ticketsystem-e895b.appspot.com",
    messagingSenderId: "195590015564",
    appId: "1:195590015564:web:aaaca6fba7d06801e642e9",
    measurementId: process.env.REACT_APP_MeasurementId
};

firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const firestore=firebase.firestore();
const database=firebase.database();
const storage = firebase.storage();


export {auth,firebase,firestore,database,storage};

