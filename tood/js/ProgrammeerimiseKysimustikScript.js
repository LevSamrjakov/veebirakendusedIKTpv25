function CheckboxValik() {
    let Vastus1 = document.getElementById("Vastus1");
    let Csharp = document.getElementById("C#");
    let CSS = document.getElementById("CSS");
    let HTML = document.getElementById("HTML");
    let JavaScript = document.getElementById("JavaScript");
    let SQL = document.getElementById("SQL");

    let Valik1 = "";
    if (Csharp.checked) {
        Valik1 += Csharp.value +', ';
    } if (CSS.checked) {
        Valik1 += CSS.value +', ';
    } if (HTML.checked) {
        Valik1 += HTML.value +', ';
    } if (JavaScript.checked) {
        Valik1 += JavaScript.value +', ';
    } if (SQL.checked) {
        Valik1 += SQL.value +', ';
    } if (Valik1.checked) {
        Valik1 += Valik1.value +', ';
    }

    Vastus1.innerHTML = "Sinu valitud programmeerimiskeeled: " + Valik1;
    return Valik1;
}

function ArvamuseLugemine() {
    let Vastus2 = document.getElementById("Vastus2");

    let Arvamus = document.getElementById("Arvamus");

    Vastus2.innerHTML = "Sinu arvamus: " + Arvamus.value;

    return Arvamus.value;
}

function RangeValik() {
    let Vastus3 = document.getElementById("Vastus3");
    let Tund = document.getElementById("Tund");

    Vastus3.innerHTML = "Tegeled programmeerimisega: " + Tund.value + " tundi nädalas.";
    return Tund.value;
}

function RadioValik() {
    let Vastus4 = document.getElementById("Vastus4");
    let Jah = document.getElementById("Jah");
    let Ei = document.getElementById("Ei");
    let ValitudPilt = document.getElementById("ValitudPilt");

    let Valik2 = ""
    if (Jah.checked) {
        Valik2 = Jah.value;
        ValitudPilt.src = "../images/smile.png"
    } else if (Ei.checked) {
        Valik2 = Ei.value;
        ValitudPilt.src = "../images/kurb.png"
    } else {
        Valik2 = "Palun tee oma valik";
    }

    Vastus4.innerHTML = Valik2;
    return Valik2;
}

function TextLugemineKastist() {
    let Vastus5 = document.getElementById("Vastus5");
    let Tooristad = document.getElementById("Tooristad");

    Vastus5.innerHTML = "Sinu nimetatud tööriistad: " + Tooristad.value;

    return Tooristad.value;
}

function SelectValik() {
    let Vastus6 = document.getElementById("Vastus6");
    let Programmeerimiskeel = document.getElementById("Programmeerimiskeel");

    if(Programmeerimiskeel.selectedIndex !== 0) {
        Vastus6.innerHTML = "Sinu valik: " + Programmeerimiskeel.value;
    } else {
        Vastus6.innerHTML = "Palun tee oma valik: ";
    }

    return Programmeerimiskeel.value;
}

function NaitaKoike() {
    let VastusKoik = document.getElementById("VastusKoik");
    let Valik1 = CheckboxValik();
    let Arvamus = ArvamuseLugemine();
    let Tund = RangeValik();
    let Valik2 = RadioValik();
    let ValitudPilt = RadioValik();
    let Tooristad = TextLugemineKastist();
    let Programmeerimiskeel = SelectValik();

    VastusKoik.innerHTML = "Sinu valitud programmeerimiskeeled: " + Valik1 + '<br>' +
                            "Sinu arvamus: " + Arvamus + '<br>' +
                            "Tegeled programmeerimisega " + Tund + " tundi nädalas." + '<br>' +
                            Valik2 + ValitudPilt + '<br>' +
                            "Sinu nimetatud tööriistad: " + Tooristad + '<br>' +
                            "Sinu valik: " + Programmeerimiskeel;

}

function Puhasta() {
    Vastus1.innerHTML = "";
    Vastus2.innerHTML = "";
    Vastus3.innerHTML = "";
    Vastus4.innerHTML = "";
    Vastus5.innerHTML = "";
    Vastus6.innerHTML = "";
    ValitudPilt.innerHTML = "";
    VastusKoik.innerHTML = "";
}