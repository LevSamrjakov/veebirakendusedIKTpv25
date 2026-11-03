let Raamat = {
    Pealkiri: "Decision at Thunder Rift",
    Autor: "Robert Thurston",
    Aasta: 1986,

    kuvaKirjeldus: function() {
        console.log(
            this.Pealkiri + " kirjutas " +
            this.Autor + " " + this.Aasta + ". Aastal"
        );
    },

    muudaAastat: function(uusAasta) {
        this.Aasta = uusAasta;
        console.log("Uus ilmumisaasta: " + this.Aasta);
    }
};

Raamat.kuvaKirjeldus();

Raamat.muudaAastat(1987);
Raamat.muudaAastat(1986);

let Raamatukogu = {
    Raamatud: [
        Raamat,
        {
            Pealkiri: "Wolves on the Border",
            Autor: "Robert N. Charrette",
            Aasta: 1987
        },
        {
            Pealkiri: "Lethal Heritage",
            Autor: "Michael A. Stackpole",
            Aasta: 1989
        }
    ],

    kuvaRaamatud: function() {
        console.log("Raamatud raamatukogus:");

        this.Raamatud.forEach(function(Raamat) {
            console.log(
                Raamat.Pealkiri + " - " +
                Raamat.Autor + " (" +
                Raamat.Aasta + ")"
            );
        });
    },

    lisaRaamat: function(uusRaamat) {
        this.Raamatud.push(uusRaamat);
        console.log("Uus raamat on lisatud: " + uusRaamat.Pealkiri);
    },

    kokkuRaamatud: function() {
        console.log("Kokku raamatud: " + this.Raamatud.length);
    },

    raamatudParast2000: function() {
        let result = this.Raamatud.filter(Raamat => Raamat.Aasta > 2000);
        console.log("Pärast 2000. aastat ilmunud raamatud: " + result.length);
    },

    otsiAutoriJargi: function(autorNimi) {
        let result = this.Raamatud.filter(
            Raamat => Raamat.Autor === autorNimi
        );

        console.log("Raamatud, mille autor on " + autorNimi + ":");

        result.forEach(Raamat => console.log(Raamat.Pealkiri));

        return result;
    }
};

Raamatukogu.lisaRaamat({
    Pealkiri: "Blood Legacy",
    Autor: "Michael A. Stackpole",
    Aasta: 1990
});

Raamat.kuvaKirjeldus();
Raamatukogu.kokkuRaamatud();
Raamatukogu.raamatudParast2000();
Raamatukogu.otsiAutoriJargi("Michael A. Stackpole");

function kuvaRaamatukogu() {
    let output = document.getElementById("Raamatukogu");

    output.innerHTML = "";

    Raamatukogu.Raamatud.forEach(function(Raamat) {
        output.innerHTML += `
            <div class="Raamat">
                <h3>${Raamat.Pealkiri}</h3>
                <p><strong>Autor:</strong> ${Raamat.Autor}</p>
                <p><strong>Aasta:</strong> ${Raamat.Aasta}</p>
            </div>
        `;
    });

    document.getElementById("Kokku").textContent =
        "Kokku raamatud: " + Raamatukogu.Raamatud.length;

    document.getElementById("Parast2000").textContent =
        "Pärast 2000. aastat ilmunud raamatud: " +
        Raamatukogu.Raamatud.filter(Raamat => Raamat.Aasta > 2000).length;
}

kuvaRaamatukogu();