//Lisame Raamat objekt
let Raamat = {
    Pealkiri: "Decision at Thunder Rift",
    Autor: "Robert Thurston",
    Aasta: 1986,

    //Raamatu kirjeldus meetod
    kuvaKirjeldus: function() {
        console.log(
            this.Pealkiri + " kirjutas " +
            this.Autor + " " + this.Aasta + ". Aastal"
        );
    },
    //Raamatu muuda aastat meetod
    muudaAastat: function(uusAasta) {
        this.Aasta = uusAasta;
        console.log("Uus ilmumisaasta: " + this.Aasta);
    }
};
//Kasutame kuvaKirjeldus meetod
Raamat.kuvaKirjeldus();

//Kasutame muudaAastat meetod
Raamat.muudaAastat(1987);
Raamat.muudaAastat(1986);

//Lisame Raamatukogu objekt
let Raamatukogu = {
    Raamatud: [
        Raamat, //Raamatud Raamatukogus, objektid teise objekti sees
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
    //KuvaRaamatud meetod
    kuvaRaamatud: function() {
        console.log("Raamatud raamatukogus:");
        //Meetod, mis kuvab kõik raamatud
        this.Raamatud.forEach(function(Raamat) {
            console.log(
                Raamat.Pealkiri + " - " +
                Raamat.Autor + " (" +
                Raamat.Aasta + ")"
            );
        });
    },

    //Meetod mis lisab uus Raamat objekt
    lisaRaamat: function(uusRaamat) {
        this.Raamatud.push(uusRaamat);
        console.log("Uus raamat on lisatud: " + uusRaamat.Pealkiri);
    },

    //Meetod mis kuvab raamatud kogus
    kokkuRaamatud: function() {
        console.log("Kokku raamatud: " + this.Raamatud.length);
    },

    //Meetod, mis kuvab kõik raamatud, mis on uuemad kui 2000. aasta
    raamatudParast2000: function() {
        let result = this.Raamatud.filter(Raamat => Raamat.Aasta > 2000);
        console.log("Pärast 2000. aastat ilmunud raamatud: " + result.length);
    },

    //Minu oma meetod. Meetod leiab autorite raamatuid
    otsiAutoriJargi: function(autorNimi) {
        let result = this.Raamatud.filter(
            Raamat => Raamat.Autor === autorNimi
        );

        console.log("Raamatud, mille autor on " + autorNimi + ":");

        result.forEach(Raamat => console.log(Raamat.Pealkiri));

        return result;
    }
};

//Kasutame lisaRaamat meetod
Raamatukogu.lisaRaamat({
    Pealkiri: "Blood Legacy",
    Autor: "Michael A. Stackpole",
    Aasta: 1990
});

//Kasutame kuvaKirjeldus, kokkuRaamatud, raamatudParast2000 ja otsiAutoriJargi meetodid.
Raamat.kuvaKirjeldus();
Raamatukogu.kokkuRaamatud();
Raamatukogu.raamatudParast2000();
Raamatukogu.otsiAutoriJargi("Michael A. Stackpole");

//Lisame kuvaRaamatukogu meetod
function kuvaRaamatukogu() {
    let output = document.getElementById("Raamatukogu");

    output.innerHTML = "";
    //Meetod meetodi sees
    Raamatukogu.Raamatud.forEach(function(Raamat) {
        output.innerHTML += `
            <div class="Raamat">
                <h3>${Raamat.Pealkiri}</h3>
                <p><strong>Autor:</strong> ${Raamat.Autor}</p>
                <p><strong>Aasta:</strong> ${Raamat.Aasta}</p>
            </div>
        `;
    });
    //Kuvab raamatud kogus
    document.getElementById("Kokku").textContent =
        "Kokku raamatud: " + Raamatukogu.Raamatud.length;
    //Kuvab kõik raamatud pärast 2000. aasta
    document.getElementById("Parast2000").textContent =
        "Pärast 2000. aastat ilmunud raamatud: " +
        Raamatukogu.Raamatud.filter(Raamat => Raamat.Aasta > 2000).length;
}
//Kuvab kõik Raamatukogu
kuvaRaamatukogu();