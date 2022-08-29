// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let REACT_APP_FIREBASE_API_KEY = 'AIzaSyCf5v90t_Ky05zw739IVb-HVCKA9ALzrYA';
let REACT_APP_FIREBASE_AUTH_DOMAIN = 'netflexclone-58c36.firebaseapp.com';
let REACT_APP_FIREBASE_PROJECT_ID = 'netflexclone-58c36';
let REACT_APP_FIREBASE_STORAGE_BUCKET = 'netflexclone-58c36.appspot.com';
let REACT_APP_MESSAGING_SENDER = '863104009699';
let REACT_APP_APP_ID = '1:863104009699:web:95f18dcfc0d25731450cd6';


const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER,
  appId: REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
