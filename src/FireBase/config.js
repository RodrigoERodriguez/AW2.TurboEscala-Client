import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZaYEprmIwywal2kGbf3ZjKattxUqz6Rk",
    authDomain: "escalasobreruedas.firebaseapp.com",
    projectId: "escalasobreruedas",
    storageBucket: "escalasobreruedas.appspot.com",
    messagingSenderId: "727962288692",
    appId: "1:727962288692:web:4bb43e8504059e55788061"
};

const app = initializeApp(firebaseConfig);

export const baseDeDatos = getFirestore(app); 

export const pedidos = getFirestore(app);

export const usuarios = getFirestore(app);

export const auth = getAuth(app);