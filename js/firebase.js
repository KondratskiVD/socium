const firebaseConfig = {
    apiKey: "AIzaSyB5EjAyOUz8MRiSwvflHOIonCO40Ot4C9k",
    authDomain: "socium-596f9.firebaseapp.com",
    projectId: "socium-596f9",
    storageBucket: "socium-596f9.appspot.com",
    messagingSenderId: "873254647439",
    appId: "1:873254647439:web:6514b9ac001618024322fa"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log('app', db);
