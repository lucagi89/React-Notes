
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW67CUSD4XzY98UhWXyRhbFA0FVfAAjts",
  authDomain: "react-notes-9b67b.firebaseapp.com",
  projectId: "react-notes-9b67b",
  storageBucket: "react-notes-9b67b.appspot.com",
  messagingSenderId: "993774840080",
  appId: "1:993774840080:web:c9ee7833654abad7469d95"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const notesCollection = collection(db, "notes")
