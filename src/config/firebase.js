import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCAIQ4QAnYc0J1Mkt-6tNuV4WR_qnrYPsM",
    authDomain: "marioplan-22f32.firebaseapp.com",
    databaseURL: "https://marioplan-22f32.firebaseio.com",
    projectId: "marioplan-22f32",
    storageBucket: "marioplan-22f32.appspot.com",
    messagingSenderId: "869726760192",
    appId: "1:869726760192:web:df42309c3b4da130de17e5"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase