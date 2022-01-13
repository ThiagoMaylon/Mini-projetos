let hora = 0;
let minuto = 0;
let segundos = 0;
let tempo = 1000;
var crom;

function iniciar() {
    crom = setInterval(() => { timer(); }, tempo);
}
function pausar() {
    clearInterval(crom);
}
function parar() {
    clearInterval(crom);
    hora = 0;
    minuto = 0;
    segundos = 0;
    document.getElementById("cro").innerHTML = "<p>00:00:00</p>";

}
function timer(){
    segundos++
    if(segundos == 60){
        segundos = 0;
        minuto++;
        if(minutos == 60){
            minutos = 0;
            horas++;

        }
    }
    let format = `${hora < 10 ? "0" + hora: hora}:${minuto < 10 ? "0" + minuto: minuto}:${segundos < 10 ? "0"+ segundos: segundos}`;
    document.getElementById("cro").innerHTML = `<p>${format}</p>`;
}