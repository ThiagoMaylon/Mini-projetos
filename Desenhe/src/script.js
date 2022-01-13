document.addEventListener("DOMContentLoaded", () => {
    let tela = document.querySelector("#tela");
    let ctx = tela.getContext('2d');

    tela.width = 800;
    tela.height = 390;
    ctx.lineWidth = 2; 
    ctx.strokeStyle = "#00d9ff";

    let pincel = {
        actie: false, 
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

    tela.onmousedown = () => {pincel.actie = true};
    tela.onmouseup = () => {pincel.actie = false};

    tela.onmousemove = (evento) => {
        pincel.pos.x = evento.clientX;
        pincel.pos.y = evento.clientY;
        pincel.movendo = true; 
    };

    let ciclo = () => {
        if(pincel.actie && pincel.movendo && pincel.posAnte){
            drawLine({pos: pincel.pos, posAnte: pincel.posAnte});
            pincel.movendo = false;
        }
        pincel.posAnte = {x: pincel.pos.x, y: pincel.pos.y}

        setTimeout(ciclo, 10)
    }
    ciclo();

})
