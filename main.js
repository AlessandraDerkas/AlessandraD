const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
for (let i=0; i < botoes.length; i++){
    botoes [i].onclick = function() {
        for (let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes [i].classList.add("ativo");
        textos [i].classList.add("ativo");
    }
}
const tempoObjetivo1 = new Date ("2024-02-04T00:00:00");
const tempoObjetivo2 = new Date ("2024-04-23T00:00:00");
const tempoObjetivo3 = new Date ("2024-06-13T00:00:00");
const tempoObjetivo4 = new Date ("2024-08-09T00:00:00");
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
function atualizaCronometro(){
    document.getElementById("dias0"+i).textContent=calculaTempo(tempos[i])[0];
    document.getElementById("horas0"+i).textContent=calculaTempo(tempos[i])[1];
    document.getElementById("min0"+i).textContent=calculaTempo(tempos[i])[2];
    document.getElementById("seg0"+i).textContent=calculaTempo(tempos[i])[3];
for (let i = 0; i < contadores.lenght; i++) {
//contadores[i].textContent = calculaTempo(tempos[i]);
}
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}
comecaCronometro();
function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    if (tempoFinal > 0){
    return[dias,horas,minutos,segundos];
    }else {
        return "Prazo Finalizado";
    }
}