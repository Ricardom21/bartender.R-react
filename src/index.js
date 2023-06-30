import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJxeEW77stxShU6dEYrjV4ezRJEzRc6rc",
  authDomain: "bartender-ricardo.firebaseapp.com",
  projectId: "bartender-ricardo",
  storageBucket: "bartender-ricardo.appspot.com",
  messagingSenderId: "227167652611",
  appId: "1:227167652611:web:536222d439fcb25a533736"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
