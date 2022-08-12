import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs7DGzoBViGbY1MGzkJuKo11f4w_xMlUo",
  authDomain: "metallica-aafa2.firebaseapp.com",
  projectId: "metallica-aafa2",
  storageBucket: "metallica-aafa2.appspot.com",
  messagingSenderId: "8251596808",
  appId: "1:8251596808:web:41fd425b3c3a513f29b1bd"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
