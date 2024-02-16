import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_ID_DE_PROYECTO",
  storageBucket: "TU_BUCKET.appspot.com",
  messagingSenderId: "TU_ID_DE_MENSAJES",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
