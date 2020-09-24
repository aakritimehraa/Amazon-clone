import firebase from'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCNIBCC--F2q6Mguulj74uGL9kFIzPHmL4",
        authDomain: "fir-4310b.firebaseapp.com",
        databaseURL: "https://fir-4310b.firebaseio.com",
        projectId: "fir-4310b",
        storageBucket: "fir-4310b.appspot.com",
        messagingSenderId: "911818795486",
        appId: "1:911818795486:web:143e6afc386d2529e3154f",
        measurementId: "G-92S09Y57CJ"
})

const auth = firebase.auth()

export {auth};