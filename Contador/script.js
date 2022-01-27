const texto = document.querySelector(".ContadorText");
const zerar = document.querySelector("#zerar");
const antecessor = document.querySelector("#antecessor");
const sucessor = document.querySelector("#sucessor");
let contador = 0;

sucessor.addEventListener("click", () => {
    contador++;
    texto.innerHTML = `<p>${contador}</p>`;
});
antecessor.addEventListener("click", () => {
    contador--;
    texto.innerHTML = `<p>${contador}</p>`;
});
zerar.addEventListener("click", () => {
    contador = 0;
    texto.innerHTML = `<p>${contador}</p>`;
});

