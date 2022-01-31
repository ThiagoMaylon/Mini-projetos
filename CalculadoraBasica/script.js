const num1txt = document.querySelector('#num1');
const num2txt = document.querySelector('#num2');
const bntSomar = document.querySelector("#bntSomar");
const bntDividir = document.querySelector('#bntDividir');
const bntMultiplicar = document.querySelector('#bntMultiplicar');
const resposta = document.querySelector('#resposta');


function somar(){
    return Number(num1txt.value) + Number(num2txt.value);
}
function dividir(){
    return Number(num1txt.value) / Number(num2txt.value);
}

function multiplicar(){
    return Number(num1txt.value) * Number(num2txt.value);
}

bntSomar.addEventListener('click', () =>{
    resposta.innerHTML = `<p>${somar()}</p>`;
});
bntDividir.addEventListener('click', () =>{
    resposta.innerHTML = `<p>${dividir().toFixed(2)}</p>`;
});
bntMultiplicar.addEventListener('click', () =>{
    resposta.innerHTML = `<p>${multiplicar()}</p>`;
});