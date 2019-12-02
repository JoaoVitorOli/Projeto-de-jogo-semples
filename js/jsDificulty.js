const botao = document.getElementById('botao');
var dificuldade = document.getElementById('selection').value; //variável que pega o valor da dificuldade

function botaoOver(){
    botao.style.height = '95px'
}

function botaoOut(){
    botao.style.height = '90px'
}
//FUNÇÃO 'botaoOut' E 'botaoOver' PARA FAZER UMA ANIMAÇÃO SIMPLES NO BOTÃO


botao.onmouseover = botaoOver;
botao.onmouseout = botaoOut;

function iniciarJogo(){
    window.location.href = 'jogo.html';         //função para iniciar o jogo ao clickar no botão
}

botao.onclick = iniciarJogo;



