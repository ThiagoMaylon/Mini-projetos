const botoes = document.querySelector("buttons")
const img = document.querySelector("img");
let coresIndex = 0;

const traffic = ( evento ) => {
    turnOn[event.target.id]();
}
let proximaCor = () => coresIndex = coresIndex< 2 ? ++coresIndex : 0 ;

let changeColor = () => {
    const color = ['red', 'yellow', 'green']
    const color = color[coresIndex];
    turnOn[color]();
    proximaCor();
}
const turnOn = {
    'red': () => img.src = "img/vermelho.png",
    'yelow': () => img.src = "img/amarelo.png",
    'green': () => img.src = "img/verde.png",
    'automatic': () => setInterval(changeColor, 1000)
}

botoes.addEventListener("click", traffic);
