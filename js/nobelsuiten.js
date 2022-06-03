// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa3LKI4liZcS_cQ9Rpx0WKjY_sXcSvS1I",
    authDomain: "forste-prosjekt-be7a5.firebaseapp.com",
    projectId: "forste-prosjekt-be7a5",
    storageBucket: "forste-prosjekt-be7a5.appspot.com",
    messagingSenderId: "1095711270868",
    appId: "1:1095711270868:web:4fcf49853813f70dcbd841",
    measurementId: "G-Q9S4V25NFV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Lager en referanse til databasen
let db = firebase.firestore();

let collectionName = "nobelsuiten"

// Henter elementer fra DOM
let mainEl = document.querySelector("#main")
let fornavnEl = document.querySelector("#fornavn")
let etternavnEl = document.querySelector("#etternavn")
let nummerEl = document.querySelector("#nummer")

let registrerBtn = document.querySelector("#registrer")

// Legger til lytter på knappen
registrerBtn.addEventListener("click", addKunde)

// Funksjon som legger kunder i database
function addKunde() {

    db.collection(collectionName).add({
        fornavn: fornavnEl.value,
        etternavn: etternavnEl.value,
        nummer: nummerEl.value
    })


    // Tømmer input feltene
    fornavnEl.value = ""
    etternavnEl.value = ""
    nummerEl.value = ""

    // Oppdaterer kundene
    getKunde()
}

