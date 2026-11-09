function joon(){
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    // joon - линия
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath()
        tx.strokeStyle = 'darkgoldenrod';
        tx.lineWidth = 3;
        tx.moveTo(50, 50); // Alguspunkt
        tx.lineTo(200, 280); // Lõpppunkt
        tx.stroke();
    }
}

function puhasta() {
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    // joon - линия
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.clearRect(0, 0, 400, 400);
    }
}

function kolmnurk(){
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    // joon - линия
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath()
        tx.fillStyle = 'goldenrod';
        tx.strokeStyle = 'darkgoldenrod';
        tx.lineWidth = 3;
        tx.moveTo(50, 50); // Alguspunkt
        tx.lineTo(200, 280);
        tx.lineTo(30, 350);
        tx.lineTo(50, 50); /// Lõpppunkt
        tx.fill(); // Taust
        tx.stroke(); // Välisjoon
    }
}

function ristkylik() {
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    const l = document.getElementById('laius');
    const k = document.getElementById('kyrgus');
    // joon - линия
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = 'goldenrod';
        tx.fillRect(100, 150, l.value, k.value);
    }
}

// Ümberjoon - окружность
// Ring - круг
function ring() {
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    const r = document.getElementById('raadius');
    // joon - линия
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = 'darkgoldenrod';
        tx.fillStyle = 'goldenrod';
        tx.arc(100, 100, r.value, 0, 2*Math.PI, true); // x, y -keskpunkt, R - raadius
        tx.fill();
        tx.stroke();
    }
}

function pilt(){
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    // joon - линия
    if(canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        const fail = new Image();
        fail.src="https://picsum.photos/200/300?random=1"
        fail.onload =()=>{
            tx.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

function ratas1(){
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    // joon - линия
    if(canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = '#323438';
        tx.fillStyle = 'black';
        tx.arc(100, 300, 35, 0, 2*Math.PI, true); // x, y -keskpunkt, R - raadius
        tx.fill();
        tx.stroke();
    }
    if(canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = 'silver';
        tx.fillStyle = 'lightgray';
        tx.arc(100, 300, 15, 0, 2*Math.PI, true); // x, y -keskpunkt, R - raadius
        tx.fill();
        tx.stroke();
    }
}

function ratas2(){
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    // joon - линия
    if(canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = '#323438';
        tx.fillStyle = 'black';
        tx.arc(300, 300, 35, 0, 2*Math.PI, true); // x, y -keskpunkt, R - raadius
        tx.fill();
        tx.stroke();
    }
    if(canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = 'silver';
        tx.fillStyle = 'lightgray';
        tx.arc(300, 300, 15, 0, 2*Math.PI, true); // x, y -keskpunkt, R - raadius
        tx.fill();
        tx.stroke();
    }
}

function kere() {
    const canvas = document.getElementById('canvas'); // Määrame Canvas element
    // joon - линия
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = 'darkgray';
        tx.fillRect(140, 265, 120, 30);
    }
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = 'darkred';
        tx.fillRect(40, 235, 320, 30);
    }
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = 'maroon';
        tx.fillRect(40, 225, 320, 10);
    }
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.fillStyle = 'darkred';
        tx.lineWidth = 3;
        tx.moveTo(280, 210);
        tx.lineTo(280, 225);
        tx.lineTo(360, 225);
        tx.closePath();
        tx.fill();
    }
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = 'darkred';
        tx.fillRect(180, 165, 60, 60);
    }
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.fillStyle = 'lightblue';
        tx.lineWidth = 3;
        tx.moveTo(240, 165);
        tx.lineTo(240, 225);
        tx.lineTo(280, 225);
        tx.closePath();
        tx.fill();
    }
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = 'darkred';
        tx.fillRect(240, 210, 40, 15);
    }
}