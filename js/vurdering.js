let stjernerEl = document.querySelectorAll(".stjerner a");
let ratingEl = document.querySelector("#rating")
let verdiEl = document.querySelector("#verdi")
let enEl = document.querySelector("#en")
let toEl = document.querySelector("#to")
let treEl = document.querySelector("#tre")
let fireEl = document.querySelector("#fire")
let femEl = document.querySelector("#fem")

verdiEl.innerText +=  localStorage.count

if (!localStorage.count){
    localStorage.count = 0
}

// Bruker denne YT videon: https://www.youtube.com/watch?v=dsRJTxieD4U for inspirasjon
stjernerEl.forEach((stjerne, idx) => {
    stjerne.addEventListener("click", () => {
        console.log(`stjerne ${idx + 1} ble trykket på`);
        localStorage.count = (idx+1);
        localStorage.count = Number(localStorage.count)
        //console.log(localStorage.count);
    });
});

enEl.addEventListener("click", count);
toEl.addEventListener("click", count);
treEl.addEventListener("click", count);
fireEl.addEventListener("click", count);
femEl.addEventListener("click", count);




function count(){
    localStorage.count = Number(localStorage.count)
    verdiEl.innerText =  localStorage.count
    console.log(localStorage.count)
}





