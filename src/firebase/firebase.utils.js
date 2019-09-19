import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZZWzWdXjXDR4Mg0eugY4ViwrpcAFkhFQ",
    authDomain: "crown-db-648f0.firebaseapp.com",
    databaseURL: "https://crown-db-648f0.firebaseio.com",
    projectId: "crown-db-648f0",
    storageBucket: "",
    messagingSenderId: "842864486825",
    appId: "1:842864486825:web:cf0e380942d43da808bcb8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;