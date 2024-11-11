import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqk-PqVm5RGl-7S9h6TnbsHuiiVIDHuUE",
    authDomain: "fir-login-4629d.firebaseapp.com",
    projectId: "fir-login-4629d",
    storageBucket: "fir-login-4629d.firebasestorage.app",
    messagingSenderId: "12699510331",
    appId: "1:12699510331:web:3cadca98ea4b0694ecde1e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);