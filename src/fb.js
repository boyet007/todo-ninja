import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyATXMfhlqGmTy0BwB6cDnf9dBnrcHJZvr0",
    authDomain: "belajar-vue-2.firebaseapp.com",
    databaseURL: "https://belajar-vue-2.firebaseio.com",
    projectId: "belajar-vue-2",
    storageBucket: "belajar-vue-2.appspot.com",
    messagingSenderId: "839065585321",
    appId: "1:839065585321:web:c72806cebd55d89a888bb8",
    measurementId: "G-91JZ3NELW0"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;