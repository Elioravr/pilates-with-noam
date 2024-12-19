// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZp7OiaTyvBdAbJnhYr8PpkRYotIP9mTg',
  authDomain: 'pilates-with-noam.firebaseapp.com',
  projectId: 'pilates-with-noam',
  storageBucket: 'pilates-with-noam.firebasestorage.app',
  messagingSenderId: '1066938638642',
  appId: '1:1066938638642:web:005216200b1590af38f72b',
  measurementId: 'G-MT1015BH0C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export
const database = getDatabase(app);

export { database, get, ref };
