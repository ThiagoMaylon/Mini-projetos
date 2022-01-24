const bnt = document.querySelector("#interruptor");
const lamp = document.querySelector("#lamp");

function ligar(){
    lamp.src = 'img/ligada.jpg';

}
function desligar(){
    lamp.src = 'img/desligada.jpg'
}
function quebrar(){
    lamp.src = 'img/quebrada.jpg';
}

function OnOff(){
    if(bnt.textContent == "ligar"){
        ligar()
        bnt.textContent = "desligar";
    }else if(bnt.textContent == "desligar"){
        desligar();
        bnt.textContent = "ligar"
    }
}

bnt.addEventListener('click', OnOff);


lamp.addEventListener("dblclick", quebrar);
