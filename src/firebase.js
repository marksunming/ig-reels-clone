import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaA4Trn6Doom75Z_7J-7hyfZxiC6wki88",
    authDomain: "ig-reels-clone-60006.firebaseapp.com",
    projectId: "ig-reels-clone-60006",
    storageBucket: "ig-reels-clone-60006.appspot.com",
    messagingSenderId: "414729168097",
    appId: "1:414729168097:web:e116cef47c07d5a07e43a0",
    measurementId: "G-3PNQCQS37W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

