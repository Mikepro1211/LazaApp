import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig ={
    apiKey: "AIzaSyDAsc9bU9bdA0740q8rTmvlMEHhl4yo-JI",
    authDomain: "lazaapp-397515.firebaseapp.com",
    projectId: "lazaapp-397515",
    storageBucket: "lazaapp-397515.appspot.com",
    messagingSenderId: "444058057384",
    appId: "1:444058057384:web:be8f1af5fc4b6e08b1209d",
    measurementId: "G-NNL49HZ9VH"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export {firebase};