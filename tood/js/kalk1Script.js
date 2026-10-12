function teisendamine(){
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik"); //Mitu elementi ühe nimega
    let arv = document.getElementById("arv");
    let vastusepilt = document.getElementById("vastusepilt");

    const toll = 39.37;
    const meeter = 0.0254;

    //tsükli
    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            if (valik[i].value === "meeter") {
                vastus.innerHTML = arv.value + ' meetri = ' + (arv.value * toll).toFixed(1) + ' tolli';
                vastus.style.color = "red";
                vastusepilt.src = "https://s.alicdn.com/@sc04/kf/H0e0609abbd8e4cae9387bf7753edc140t.jpg_720x720q50.jpg";
            } else if (valik[i].value === "tolli") {
                vastus.innerHTML = arv.value + ' tolli = ' + (arv.value * meeter).toFixed(1) + ' meetri';
                vastus.style.color = "green";
                vastusepilt.src = "https://image.made-in-china.com/2f0j00shCbTzIWHrkc/3m-5m-7-5m-8m-Great-Wall-Meter-Tapeline-Retractable-2-Way-Lock-Tape-Measure.jpg";
            } else {
                vastus.innerHTML = " Vali ühiku - kas meeter või toll";
            }
        }
    }
}