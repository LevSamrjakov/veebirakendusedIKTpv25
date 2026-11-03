let auto = {
    //omadused
    mark: "Ford",
    mudel: "Model N",
    aasta: 1906,
    varv: "must",
    omadused: ["signaalkell", "esituled", "nahkistmed"],

    //meetodid
    taisnimi() {
        return this.mark + " " + this.mudel;
    },

    kuvaOmadused() {
        this.omadused.forEach(omadus => console.log(omadus));
    }
};

let autod = [
    { mark: 'Ford', mudel: 'Model N', aasta: 1906 },
    { mark: 'Cadillac', mudel: 'Model K', aasta: 1906 },
    { mark: 'Renault', mudel: 'Type AG', aasta: 1907 }
];

//Lisab uue objekti massiivi lõppu
autod.push({ mark: 'Oldsmobile', mudel: 'Model S', aasta: 1906 });
autod.unshift({ mark: 'Mercedes-Benz', mudel: '35 HP', aasta: 1901 });

//Eemaldab esimese objekti
autod.splice(0,1);

// Lisab objekti alates teisest indeksist, ei kustutata midagi
autod.splice(1, 0, { mark: 'Peugeot', mudel: 'Type 26', aasta: 1902 });

//Otsimine
let otsing = autod.find(auto=>auto.aasta > 1902 && auto.mark === "Renault");

let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtreeritud = arvud.filter(arv => arv % 2 === 0);

//Filtreerimine
let filter = autod.filter(auto=>auto.aasta > 1902);