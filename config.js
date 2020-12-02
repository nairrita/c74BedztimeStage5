import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBqIO2SkF2RCE0eGQpjMyAXkku0rd9r3oE",
    authDomain: "bedtimestories-99718.firebaseapp.com",
    databaseURL: "https://bedtimestories-99718.firebaseio.com",
    projectId: "bedtimestories-99718",
    storageBucket: "bedtimestories-99718.appspot.com",
    messagingSenderId: "834085691292",
    appId: "1:834085691292:web:bccd8ae0663e45a41df259"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()