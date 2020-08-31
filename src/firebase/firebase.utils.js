import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCq_-1coGdALIe7JPnbjjTCPfX1msEmo50",
  authDomain: "crwn-db-12f3e.firebaseapp.com",
  databaseURL: "https://crwn-db-12f3e.firebaseio.com",
  projectId: "crwn-db-12f3e",
  storageBucket: "crwn-db-12f3e.appspot.com",
  messagingSenderId: "125078943147",
  appId: "1:125078943147:web:82b9981b009f052ed28eee",
  measurementId: "G-CGQQ369W85",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
