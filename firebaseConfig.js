// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCtc-MSJ-LxSDWDa4rAJtTjjbyuiuoDz6E",
	authDomain: "thapp-c5c10.firebaseapp.com",
	projectId: "thapp-c5c10",
	storageBucket: "thapp-c5c10.appspot.com",
	messagingSenderId: "762894309925",
	appId: "1:762894309925:web:ea87bbf448d835f0effdcc",
	measurementId: "G-WZ5CFDQMSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
