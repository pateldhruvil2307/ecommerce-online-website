
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyBqr3vj93rL0HtfAc9YZxlNu12K45KDlQY",
  authDomain: "xshop-a6ebc.firebaseapp.com",
  projectId: "xshop-a6ebc",
  storageBucket: "xshop-a6ebc.firebasestorage.app",
  messagingSenderId: "909554309068",
  appId: "1:909554309068:web:7b91e0c55e1257eb95af69",
  measurementId: "G-VT572DXLB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);

export {app,auth , db}
