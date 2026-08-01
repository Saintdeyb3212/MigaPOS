// Configuración e inicialización de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Tus NUEVAS llaves del servidor de la pastelería
const firebaseConfig = {
  apiKey: "AIzaSyAGj-X2enWoNOjg4Z9Mgox9FGiixIP1FzI",
  authDomain: "migapos-kprichitosangie.firebaseapp.com",
  projectId: "migapos-kprichitosangie",
  storageBucket: "migapos-kprichitosangie.firebasestorage.app",
  messagingSenderId: "544971547565",
  appId: "1:544971547565:web:0b790822694f478a643724",
  measurementId: "G-11GGRP2Q5H"
};

// Inicializamos la App y Analytics
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

// ACTIVAMOS LA CACHÉ PERSISTENTE (Mantenemos tu lógica Pro)
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});