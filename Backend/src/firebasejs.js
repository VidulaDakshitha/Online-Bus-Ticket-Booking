import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AuthDomain,
    databaseURL: process.env.REACT_APP_DatabaseURL,
    projectId: process.env.REACT_APP_ProjectId,
    storageBucket: process.env.REACT_APP_StorageBucket,
    messagingSenderId: process.env.REACT_APP_MessagingSenderId,
    appId: process.env.REACT_APP_AppId,
    measurementId: process.env.REACT_APP_MeasurementId
};

firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const firestore=firebase.firestore();
const database=firebase.database();
const storage = firebase.storage();


export {auth,firebase,firestore,database,storage};