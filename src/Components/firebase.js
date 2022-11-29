import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_JVJYlOXtjXIc5cQ9__3t7rdG7ghvuz8",
    authDomain: "drive-clone-53100.firebaseapp.com",
    databaseURL: "https://drive-clone-53100-default-rtdb.firebaseio.com",
    projectId: "drive-clone-53100",
    storageBucket: "drive-clone-53100.appspot.com",
    messagingSenderId: "1038142992056",
    appId: "1:1038142992056:web:409f2021fdc969f0628e4d"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }