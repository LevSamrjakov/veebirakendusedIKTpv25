function jookideValik(){
    let vastus2 = document.getElementById('vastus2');
    let joogiValik = document.getElementById('joogiValik');
    let kogus = document.getElementById('kogus');
    let vastusepilt2 = document.getElementById('vastusepilt2');

    const kohv = 2;
    const tee = 1.25;
    const kakao = 1.5;

    if (joogiValik.selectedIndex == 1) {
        vastus2.innerHTML = kogus.value + ' Kohvi hind on ' + kogus.value * kohv + '€';
        vastus2.style.color = "brown"
    }

    if (joogiValik.selectedIndex == 2) {
        vastus2.innerHTML = kogus.value + ' Tee hind on ' + kogus.value * tee + '€';
        vastus2.style.color = "black"
    }

    if (joogiValik.selectedIndex == 3) {
        vastus2.innerHTML = "Vesi on tasuta!";
        vastus2.style.color = "lightblue"
    }

    if (joogiValik.selectedIndex == 4) {
        vastus2.innerHTML = kogus.value + ' Kakao hind on ' + kogus.value * kakao + '€'
        vastus2.style.color = "brown";
    }
}