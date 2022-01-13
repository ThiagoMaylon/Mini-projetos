document.addEventListener("DOMContentLoaded", () => {
    let tela = document.querySelector("#tela");
    let ctx = tela.getContext('2d');

    tela.width = 1200;
    tela.height = 500;
    ctx.lineWidth = 2; 
    ctx.strokeStyle = "#00d9ff";

    let pincel = {
        ative: false, 
        movendo: false,
        pos: {x: 0, y: 0},
        posAnte: null,
    }

    let drawLine = (line) => {

        ctx.beginPath();
        ctx.moveTo(line.posAnte.x, line.posAnte.y);
        ctx.lineTo(line.pos.x, line.pos.y);
        ctx.stroke();
    }

    tela.onmousedown = () => {pincel.ative = true};
    tela.onmouseup = () => {pincel.ative = false};
    tela.onmouseout = () => {pincel.ative = false};

    tela.onmousemove = (evento) => {
        pincel.pos.x = evento.clientX-tela.offsetLeft+scrollX;  //tela.
        pincel.pos.y = evento.clientY-tela.offsetTop+scrollY; //
        pincel.movendo = true; 
    };

    let ciclo = () => {
        if(pincel.ative && pincel.movendo && pincel.posAnte){
            drawLine({pos: pincel.pos, posAnte: pincel.posAnte});
            pincel.movendo = false;
        }
        pincel.posAnte = {...pincel.pos}

        setTimeout(ciclo, 10)
    }
    ciclo();

})
