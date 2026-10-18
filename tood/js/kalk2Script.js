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
        vastusepilt2.src = "https://images.pexels.com/photos/414720/pexels-photo-414720.jpeg?cs=srgb&dl=food-wood-art-414720.jpg&fm=jpg"
    }

    if (joogiValik.selectedIndex == 2) {
        vastus2.innerHTML = kogus.value + ' Tee hind on ' + kogus.value * tee + '€';
        vastus2.style.color = "black"
        vastusepilt2.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tea-cup-bag-high-res-stock-photography-1570544677.jpg"
    }

    if (joogiValik.selectedIndex == 3) {
        vastus2.innerHTML = "Vesi on tasuta!";
        vastus2.style.color = "lightblue"
        vastusepilt2.src = "https://static.vecteezy.com/system/resources/previews/023/460/914/large_2x/glass-of-clean-water-illustration-ai-generative-free-photo.jpg"
    }

    if (joogiValik.selectedIndex == 4) {
        vastus2.innerHTML = kogus.value + ' Kakao hind on ' + kogus.value * kakao + '€'
        vastus2.style.color = "brown";
        vastusepilt2.src = "https://tse1.explicit.bing.net/th/id/OIP.VR9mKWd0fgi-dFdiBRngfwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
}