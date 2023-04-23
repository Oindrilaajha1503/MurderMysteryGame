import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore, setDoc, addDoc, doc,collection} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAEx9ZWNgTLh4g4ESYvoXHwrwCmZ-KesU",
  authDomain: "auth-form-40be6.firebaseapp.com",
  databaseURL: "https://auth-form-40be6-default-rtdb.firebaseio.com",
  projectId: "auth-form-40be6",
  storageBucket: "auth-form-40be6.appspot.com",
  messagingSenderId: "572384282011",
  appId: "1:572384282011:web:d5fa9ca84a0c7fd1110d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userPuzzleStart = () => {
    addDoc(collection(db, "progress"), {
        uid: localStorage.uid,
        status: "puzzleHomePage",
        score: 0
    });
    console.log("User Puzzle Started")
}
module.exports ={
    userPuzzleStart: userPuzzleStart
}