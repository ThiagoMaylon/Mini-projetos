const bntMudacor = document.querySelector("#bntMudaCor");
const inputCor = document.querySelector("#cor");

//quando eu clicar no botao a cor que eu escrevi no input vai ser a cor do background..
function mudaCor(){
    document.body.style.backgroundColor = inputCor.value;
}
bntMudacor.addEventListener("click", () =>{
    mudaCor()
});
document.addEventListener("keypress", e => {
    if(e.key == "Enter"){
        mudaCor()
    }
})
