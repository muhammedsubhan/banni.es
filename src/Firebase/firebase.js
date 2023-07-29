import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD49ELSlhKuQ-bu3kJzNf4UA0ft9-H-i3A",
  authDomain: "banni-website.firebaseapp.com",
  projectId: "banni-website",
  storageBucket: "banni-website.appspot.com",
  messagingSenderId: "83907013449",
  appId: "1:83907013449:web:70e30f52c8df48ec8c4898",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
