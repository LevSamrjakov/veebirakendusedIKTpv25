function kujundiValik() {
    let valik3 = document.getElementsByName("valik3");

    document.getElementById("ruutInput").style.display = "none";
    document.getElementById("ristkulikInput").style.display = "none";
    document.getElementById("ringInput").style.display = "none";
    document.getElementById("kolmnurkInput").style.display = "none";

    for (let i = 0; i < valik3.length; i++) {
        if (valik3[i].checked) {
            if (valik3[i].value === "ruut") {
                document.getElementById("ruutInput").style.display = "block";
            } else if (valik3[i].value === "ristkulik") {
                document.getElementById("ristkulikInput").style.display = "block";
            } else if (valik3[i].value === "ring") {
                document.getElementById("ringInput").style.display = "block";
            } else if (valik3[i].value === "kolmnurk") {
                document.getElementById("kolmnurkInput").style.display = "block";
            }
        }
    }
}

function pindalaArvutamine() {
    let valik3 = document.getElementsByName("valik3");
    let vastus3 = document.getElementById("vastus3");
    let vastusepilt3 = document.getElementById("vastusepilt3");

    let ruutKulg = Number(document.getElementById("ruutKulg").value);
    let pikkus = Number(document.getElementById("pikkus").value);
    let laius = Number(document.getElementById("laius").value);
    let raadius = Number(document.getElementById("raadius").value);
    let alus = Number(document.getElementById("alus").value);
    let korgus = Number(document.getElementById("korgus").value);

    for (let i = 0; i < valik3.length; i++) {
        if (valik3[i].checked) {
            if (valik3[i].value === "ruut") {
                if (ruutKulg <= 0 || document.getElementById("ruutKulg").value === "") {
                    vastus3.innerHTML = "Sisesta positiivne külje pikkus";
                    vastusepilt3.src = "";
                } else {
                    let pindala = ruutKulg * ruutKulg;
                    vastus3.innerHTML = "Ruudu pindala on " + pindala + " cm².";
                    vastus3.style.color = "green";
                    vastusepilt3.src = "https://www.freebiefindingmom.com/wp-content/uploads/2021/02/Free-Printable-Square-Shape.jpg";
                }

            } else if (valik3[i].value === "ristkulik") {
                if (pikkus <= 0 || laius <= 0 ||
                    document.getElementById("pikkus").value === "" ||
                    document.getElementById("laius").value === "") {
                    vastus3.innerHTML = "Sisesta positiivne pikkus ja laius";
                    vastusepilt3.src = "";
                } else {
                    let pindala = pikkus * laius;
                    vastus3.innerHTML = "Ristküliku pindala on " + pindala + " cm².";
                    vastus3.style.color = "green";
                    vastusepilt3.src = "https://www.freebiefindingmom.com/wp-content/uploads/2021/07/Free-Printable-Rectangle-Shape-683x1024.jpg";
                }

            } else if (valik3[i].value === "ring") {
                if (raadius <= 0 || document.getElementById("raadius").value === "") {
                    vastus3.innerHTML = "Sisesta positiivne raadius";
                    vastusepilt3.src = "";
                } else {
                    let pindala = Math.PI * raadius * raadius;
                    vastus3.innerHTML = "Ringi pindala on " + pindala.toFixed(2) + " cm².";
                    vastus3.style.color = "purple";
                    vastusepilt3.src = "https://www.freebiefindingmom.com/wp-content/uploads/2021/07/Free-Printable-Circle-Shape-1-683x1024.jpg";
                }

            } else if (valik3[i].value === "kolmnurk") {
                if (alus <= 0 || korgus <= 0 ||
                    document.getElementById("alus").value === "" ||
                    document.getElementById("korgus").value === "") {
                    vastus3.innerHTML = "Sisesta positiivne alus ja kõrgus";
                    vastusepilt3.src = "";
                } else {
                    let pindala = alus * korgus / 2;
                    vastus3.innerHTML = "Kolmnurga pindala on " + pindala + " cm².";
                    vastus3.style.color = "red";
                    vastusepilt3.src = "https://www.freebiefindingmom.com/wp-content/uploads/2021/07/Free-Printable-Triangle-Shape-1-683x1024.jpg";
                }
            }
        }
    }
}
