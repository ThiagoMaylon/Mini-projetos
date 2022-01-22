const bntLigar = document.querySelector("#ligar");
const bntDesligar = document.querySelector("#desligar");
const lamp = document.querySelector("#lamp");

let ligada = false;

function ligar(){
    lamp.src = 'img/ligada.jpg';
    ligada = true;
}
function desligar(){
    lamp.src = 'img/desligada.jpg'
    ligada = false;
}
function quebrar(){
    lamp.src = 'img/quebrada.jpg';
    ligada = false;
}

bntLigar.addEventListener("click", ligar);
bntDesligar.addEventListener("click", desligar);
lamp.addEventListener("click", quebrar);
if(ligada == false){
    
}
lamp.addEventListener('mouseover', ligar);
lamp.addEventListener('mouseleave', desligar);