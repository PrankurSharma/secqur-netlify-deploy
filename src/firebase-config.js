import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAqjgzSoSTVF1H7k3kTq8R0oyTAD0FqNY4",
    authDomain: "secquralse-project.firebaseapp.com",
    projectId: "secquralse-project",
    storageBucket: "secquralse-project.appspot.com",
    messagingSenderId: "136264565220",
    appId: "1:136264565220:web:bfb4cdc0241449249607f1",
    measurementId: "G-K9SBM7Y5HB"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore();