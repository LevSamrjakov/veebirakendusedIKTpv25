function nimiLugemineKastist() {
    let Vastus = document.getElementById("Vastus");

    let nimi = document.getElementById("nimi");

    Vastus1.innerHTML = "Sisestatud nimi on:" + nimi.value;
    Vastus1.style.backgroundColor = "lightgreen";

    return nimi.value;
}

//radio valikud
function radioValik() {
    let Vastus2 = document.getElementById("Vastus2");
    let spotify = document.getElementById("spotify");
    let youtubeMusic = document.getElementById("youtubeMusic");
    let soundcloud = document.getElementById("soundcloud");
    let raadio = document.getElementById("raadio");
    let vinyl = document.getElementById("vinüüplaat");
    let pilt = document.getElementById("piltLogo");

    let valik = "";
    if (spotify.checked) {
        valik = spotify.value
        pilt.src = "../images/spotifyLogo.png"
    } else if (youtubeMusic.checked) {
        valik = youtubeMusic.value
        pilt.src = "../images/youtubeMsuicLogo.png"
    } else if (soundcloud.checked) {
        valik = soundcloud.value
        pilt.src = "../images/soundcloudLogo.png"
    } else if (raadio.checked) {
        valik = raadio.value
        pilt.src = "../images/raadio.png"
    } else if (vinüüplaat.checked) {
        valik = vinüüplaat.value
        pilt.src = "../images/vinuplaat.png"
    } else {
        valik = "Palun tee oma valik"
    }

    Vastus2.innerHTML = "Valik: " + valik;
    return valik;
}

//checkbox valik
function checkboxValik() {
    let vastus3 = document.getElementById("vastus3");
    let rollingstones = document.getElementById("rollingstones");
    let judaspriest = document.getElementById("judaspriest");
    let manowar = document.getElementById("manowar");
    let deepPurple = document.getElementById("deepPurple");
    let rammstein = document.getElementById("rammstein");

    let valik2="";
    if (rollingstones.checked) {
        valik2 += rollingstones.value +', ';
    } if (judaspriest.checked) {
        valik2 += judaspriest.value +', ';
    } if (manowar.checked) {
        valik2 += manowar.value +', ';
    } if (deepPurple.checked) {
        valik2 += deepPurple.value +', ';
    } if (rammstein.checked) {
        valik2 += rammstein.value +', ';
    } if (valik2.checked) {
        valik2 += valik2.value +', ';
    }

    vastus3.innerHTML = "Sinu lemmikud on: " + valik2;
    vastus3.style.backgroundColor = "lightgreen";
    return valik2;
}

//Kasutab teisi funktsioone
function näitaKõike() {
    let vastusKõik = document.getElementById("vastusKõik");
    let nimi = nimiLugemineKastist();
    let valik = radioValik();
    let valik2 = checkboxValik();
    let tund = rangeValik();
    let stiil = selectValik();
    let arvamus = arvamuselugemine();
    let radiojaam = raadiojaamad();
    let kuulanraadio = KuuladRaadio();

    vastusKõik.innerHTML = "Sinu nimi on: " + nimi + '<br>' +
                            'Sinu lemmikud on: ' + valik2 + '<br>' +
                            'Sa kasutad ' + valik + '<br>' +
                            'Sa kuuled ' + tund + ' tundi' + '<br>' +
                            'Sa valisid ' + stiil + '<br>' +
                            'Sinu arvamus: ' + arvamus + '<br>' +
                            'Sinu nimetatud jaamad: ' + radiojaam + '<br>' +
                            'Kuulan raadio: ' + kuulanraadio;

    function puhasta() {
        Vastus1.innerHTML = "";
        Vastus2.innerHTML = "";
        vastus3.innerHTML = "";
        vastus4.innerHTML = "";
        vastus5.innerHTML = "";
        vastus6.innerHTML = "";
        vastusKõik.innerHTML = "";
    }
}

//range
function rangeValik() {
    let vastus4 = document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML = "Sa kuuled muusikat: " + tund.value + " tundi.";
    return tund.value;
}

//Select valik
function selectValik() {
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");

    //0 - 1. rida loetelus
    if(stiil.selectedIndex !== 0) {
        vastus5.innerHTML = "Sa valisid " + stiil.value;
    } else {
        vastus5.innerHTML = "Palun tee oma valik: ";
    }

    return stiil.value;
}

function arvamuselugemine() {
    let vastus6 = document.getElementById("vastus6");

    let arvamus = document.getElementById("arvamus");

    vastus6.innerHTML = "Teie arvamus:" + arvamus.value;
    vastus6.style.backgroundColor = "lightgreen";

    return arvamus.value;
}

function raadiojaamad() {
    let vastus7 = document.getElementById("vastus7");

    let raadiojaam = document.getElementById("raadiojaam");

    vastus7.innerHTML = "Sinu nimetatud jaamad: " + raadiojaam.value;
    vastus7.style.backgroundColor = "lightgreen";

    return raadiojaam.value;
}

function KuuladRaadio() {
    let vastus8 = document.getElementById("vastus8");
    let kuulanRadio = document.getElementById("kuulanRadio");
    let eiKuulanRadio = document.getElementById("eiKuulanRadio");

    let valik3 = "";
    if (kuulanRadio.checked) {
        valik3 = kuulanRadio.value
    } else if (eiKuulanRadio.checked) {
        valik3 = eiKuulanRadio.value
    } else {
        "Palun tee oma valik"
    }

    vastus8.innerHTML = "Kuulan raadio: " + valik3;
    return valik3;
}

