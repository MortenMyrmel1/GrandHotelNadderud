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

let collectionName = "kunder"

// Henter elementer fra DOM
let mainEl = document.querySelector("#main")
let fornavnEl = document.querySelector("#fornavn")
let etternavnEl = document.querySelector("#etternavn")
let dagEl = document.querySelector("#dag")
let epostEl = document.querySelector("#epost")

let registrerBtn = document.querySelector("#registrer")

// Legger til lytter på knappen
registrerBtn.addEventListener("click", addUser)

// Funksjon som legger kunder i database
function addUser() {

    db.collection(collectionName).add({
        fornavn: fornavnEl.value,
        etternavn: etternavnEl.value,
        dag: dagEl.value,
        epost: epostEl.value
    })

    console.log("Brukeren ble lagt inn databasen.")

    // Tømmer input feltene
    fornavnEl.value = ""
    etternavnEl.value = ""
    dagEl.value = ""
    epostEl.value = ""

    // Oppdaterer kundene
    getUsers()
}


function deleteUser(e){
    // henter id til det vi trykket på
    let id = e.target.getAttribute("data-id")
    
    // Slettet kunden
    db.collection(collectionName).doc(id).delete()

    console.log("Kunden ble slettet")

    getUsers()
}


function getUsers() {
    // Henter data, når dataene er ferdig hentet, starter "then"-biten
    db.collection(collectionName).orderBy("dag").get().then((snapshot) => { // sorterer etter dag
        // Henter ut dokumentene
        let dokumenter = snapshot.docs

        // Skriver dokumentene til konsoll
        //console.log(dokumenter)

        // Tømmer diven
        mainEl.innerHTML = ""

        // Viser innholdet i kolleksjonen til nettsiden
        for (let i = 0; i < dokumenter.length; i++) {
            let data = dokumenter[i].data()
            //console.log(data)

            // Henter id til dokumentet
            let id = dokumenter[i].id

            mainEl.innerHTML += `<h2>Bestillingen din er registrert!</h2>`
            mainEl.innerHTML += `<p>Med navnet: ${data.fornavn} den ${data.dag}. juli. </p>`

            // Knapp som angrer bestillingen til kunden
            mainEl.innerHTML += `<button data-id="${id}" class="slett">Angre Bestilling</button>`
        }

        // Henter slett-knappene fra DOM 
        let slettBtn = document.querySelectorAll(".slett")
        //console.log(slettBtn)

        // Legger til lytter til hver slett-knapp
        for(let i=0; i<slettBtn.length; i++){
            slettBtn[i].addEventListener("click", deleteUser)
        }
    })
}

// Kaller funksjonen som henter kundene fra databasen
getUsers()