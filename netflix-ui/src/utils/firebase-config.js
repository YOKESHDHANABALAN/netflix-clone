import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuccIwXdCDtI6XQJRgisT7TLWj5O8Q5lk",
  authDomain: "netflix-clone-3a864.firebaseapp.com",
  projectId: "netflix-clone-3a864",
  storageBucket: "netflix-clone-3a864.appspot.com",
  messagingSenderId: "151428287622",
  appId: "1:151428287622:web:19322aa47f7873849ad507",
  measurementId: "G-DQF3CZ2J29"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
