import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBPQgd21fhchLwOqbXlTy1a8mBRrDkpUg",
    authDomain: "delivery-app-71443.firebaseapp.com",
    projectId: "delivery-app-71443",
    storageBucket: "delivery-app-71443.appspot.com",
    messagingSenderId: "726140770230",
    appId: "1:726140770230:web:6a368fd9f12f2c548dd317",
    measurementId: "G-51EB7W2MGG"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);
