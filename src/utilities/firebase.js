import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8hg3BNT-NIBnnfUSxVp2tPc4xxkaAc4I",
    authDomain: "vue3-a26c2.firebaseapp.com",
    projectId: "vue3-a26c2",
    storageBucket: "vue3-a26c2.appspot.com",
    messagingSenderId: "645460187691",
    appId: "1:645460187691:web:5dc2060071cf8e92e4686e"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;