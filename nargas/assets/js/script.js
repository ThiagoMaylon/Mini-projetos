let botao = document.querySelector(".botao");
let video = document.querySelector(".video");

function colocaVideo(){
    video.style.display = "block";
    video.autoplay = true;
    video.loop = true;
    video.load();
}
function tiraVideo(){
    video.style.display = "none";
    video.autoplay = false;
    video.loop = false;
    video.load();
}
function mudarNome(){
    if(botao.value == "e o nargas?"){
        botao.value = "torciu passou";
        colocaVideo();
    }else{
        botao.value = "e o nargas?";
        tiraVideo();
    }
}

botao.addEventListener("click", mudarNome);