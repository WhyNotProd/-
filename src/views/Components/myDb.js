import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC2mr95XRvM5c_UrhaWLvow12CU9W3Uxic",
    authDomain: "dentistrydb.firebaseapp.com",
    projectId: "dentistrydb",
    storageBucket: "dentistrydb.appspot.com",
    messagingSenderId: "347646784732",
    appId: "1:347646784732:web:0bf21b2f63ca6d083cb019"
};

firebase.initializeApp(config);
export default firebase;