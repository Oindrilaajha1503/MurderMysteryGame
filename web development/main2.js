const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCAEx9ZWNgTLh4g4ESYvoXHwrwCmZ-KesU",
    authDomain: "auth-form-40be6.firebaseapp.com",
    projectId: "auth-form-40be6",
    storageBucket: "auth-form-40be6.appspot.com",
    messagingSenderId: "572384282011",
    appId: "1:572384282011:web:d5fa9ca84a0c7fd1110d3e"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in 
        //document.write("You are Signed Up")
        //alert("You are signed up");
        window.location.assign('./front page/index.html')
        console.log(result)
    
        // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
    });
}
const signIn=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in
        //document.write("You are Signed In")
        //alert("You are signed in");
        
        console.log(result)
        console.log(result.user.uid)
        userSession(result.user)
        window.location.assign('./front page/index.html')
        // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
    });
}

const userSession = (user) => {
    console.log(user.uid)

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("uid", user.uid);
    } else {
    
    }
} 