let nome = document.querySelector('#nome')
let peso = document.querySelector('#pesotxt')
let altura = document.querySelector('#alturatxt')
let res = document.querySelector('#resposta')

res.innerHTML = ' '
function imc(a, p){
    let altM = a / 100;
    let vaimc = p / altM**2

    if(vaimc < 18.5){
        return  res.innerHTML = `Nome: ${nome.value}<br>Imc: ${vaimc.toFixed(2)}<br> Nivel: abaixo do peso`
    }else if(vaimc >= 18.5 && vaimc < 24.9){
        return res.innerHTML = `Nome: ${nome.value}<br>Imc: ${vaimc.toFixed(2)}<br> Nivel: peso normal `
    }else if(vaimc >= 25 && vaimc < 29.9){
        return res.innerHTML = `Nome: ${nome.value}<br>Imc: ${vaimc.toFixed(2)}<br> Nivel: sobre peso`
    }else if(vaimc >= 30 && vaimc < 34.9){
        return res.innerHTML = `Nome: ${nome.value}<br>Imc: ${vaimc.toFixed(2)}<br> Nivel: obsidade grau 1`
    }else if(vaimc >= 35 && vaimc < 39.9){
        return res.innerHTML = `Nome: ${nome.value}<br>Imc: ${vaimc.toFixed(2)}<br> Nivel: obsidade grau 2`
    }else if(vaimc >= 40){
        return res.innerHTML = `Nome: ${nome.value}<br>Imc: ${vaimc.toFixed(2)}<br> Nivel: obsidade morbida`
    }

}
function invalor(pe, al){
    if(pe == 0 || al == 0){
        return false
    }else{
        return true
    }
}
function calcular(){
    if(invalor(peso.value, altura.value) == true){
        imc(altura.value, peso.value)
    }else{
        window.alert('[ERRO] verifique os valores e tente novamente')
    }
    
}