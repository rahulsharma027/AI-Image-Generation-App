import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGPPcRGDOqThWG1tnzFIi4FM0FnGOkPRM",
  authDomain: "ai-img-gen-308bb.firebaseapp.com",
  projectId: "ai-img-gen-308bb",
  storageBucket: "ai-img-gen-308bb.appspot.com",
  messagingSenderId: "1070288353934",
  appId: "1:1070288353934:web:7252305935caa7b21c27df",
  measurementId: "G-W44JLH4SWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
export const Provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
