const now = new Date();

const paev = now.getDate(); //Tagastab päeva
console.log("Tänane päev on " + paev + " päev");

const kuu = now.getMonth() + 1 //Tagastab kuu
console.log("Kuu number on " + kuu)

const aasta = now.getFullYear();
console.log("Aasta on: " + aasta);

const nadalapaev = now.getDay(); //0 - 6, kus number on 0-pühapäev
console.log("Nadalapaeva number on " + nadalapaev);

function tana(){
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on " + paev + "." + kuu + "." + aasta;
}
//Lisa veel getHours() ja getMinutes() ja lisa veel üks functioon
//Mis näitab aeg
const tund = now.getHours();
console.log("Tund: " + tund);

const minut = now.getMinutes();
console.log("Minut: " + minut);

function praegu(){
    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Praegu on kell:" + tund + ":" + minut;
}

const konsultatsioon = new Date(2026, 10, 2) //2.11.26
const vahe = konsultatsioon.getTime() - now.getTime();
const konspaev = vahe / (1000 * 60 * 60 * 24); //Sekundid * minuit * tunnid * päevad

console.log("Konsultatsiooni nädalani " + konspaev.toFixed(0) + " päeva");

function konsultatsiooniNadalani(){
    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = "Konsultatsiooni nädalani " + konspaev.toFixed(0) + " päeva"
}

const sunnipaev = new Date(2027, 7, 25);
const vahe2 = sunnipaev.getTime() - now.getTime();
const synnipaev = vahe2 / (1000 * 60 * 60 * 24);
function minuSunnipaev(){
    let vastus4 = document.getElementById("vastus4");
    vastus4 = "Minu sünnipäev on " + synnipaev.toFixed(0) + " päevad";
    console.log ("Minu sünnipäev on " + synnipaev.toFixed(0));
}



