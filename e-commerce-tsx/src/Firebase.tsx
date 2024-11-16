import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2tvp_GQFkx2Pz1NoI9wMednsF3x3sF3I",
  authDomain: "fir-tsx-17245.firebaseapp.com",
  projectId: "fir-tsx-17245",
  storageBucket: "fir-tsx-17245.firebasestorage.app",
  messagingSenderId: "274007301568",
  appId: "1:274007301568:web:cc5f28067f2fe9aa753c25",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
