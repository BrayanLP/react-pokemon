
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCme6yMPgn2dWHVr2QSppJCeOmG07f7VNQ",
  authDomain: "clinica-maison.firebaseapp.com",
  databaseURL: "https://clinica-maison-default-rtdb.firebaseio.com",
  projectId: "clinica-maison",
  storageBucket: "clinica-maison.appspot.com",
  messagingSenderId: "519318873803",
  appId: "1:519318873803:web:3c4d7bee6d7d762874dd4e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);