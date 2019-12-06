var timerId = null;

function iniciarJogo(){ //função para setar a difículdade do jogo
    let url = window.location.search;
    let nivel_jogo = url.replace("?", "");
    var tempo = 0;

    if (nivel_jogo == 1) {
        tempo = 5; //tempo do jogo de 120
    } else if (nivel_jogo == 2) {
        tempo = 60; //tempo do jogo de 60
    } else if (nivel_jogo == 3) {
        tempo = 30; //tempo do jogo de 30
    } else{
        alert('Ocorreu um erro ao nivelar a dificuldade!')
        window.location.href = '../index.html';
    }

    qnt_baloes(qntd_baloes)

    document.getElementById('qtd_baloes_num').innerHTML = qntd_baloes;

    tempoContagem(tempo);

    document.getElementById('crono').innerHTML = tempo;
}

function game_over(){ //FUNÇÃO GAME OVER PARA QUANDO ACABAR O LIMETE DE TEMPO
    alert('Você não conseguiu estourar todos os balões a tempo!');

    let div = document.getElementById('div-reiniciar');
    let msg = document.createTextNode('Reiniciar');
    let elemP = document.createElement('p');
    elemP.appendChild(msg);
    div.appendChild(elemP);

    let div2 = document.getElementById('div-botao');
    let img = document.createElement('img');
    img.src = "../estourando_baloes/imagens/iniciar.png";
    img.id = 'botao';
    img.setAttribute("onclick", "window.location.href = '../index.html'");
    div2.appendChild(img);

    const botao = document.getElementById('botao');

    function botaoOver(){
        botao.style.height = '85px'
    }

    function botaoOut(){
        botao.style.height = '80px'
    }
    //FUNÇÃO 'botaoOut' E 'botaoOver' PARA FAZER UMA ANIMAÇÃO SIMPLES NO BOTÃO

    botao.onmouseover = botaoOver;
    botao.onmouseout = botaoOut;
}

function tempoContagem(segundos){
    segundos = segundos-1;
    if (segundos == -1){
        clearTimeout(timerId);
        game_over();
        return false;
    }
    document.getElementById('crono').innerHTML = segundos;
    timerId = setTimeout("tempoContagem("+ segundos+")", 1000);
}

var qntd_baloes = 80; //quantidade de balões que então dentro de cenário (O máximo de balões que a tela suporta sem bugar é 80)



function qnt_baloes(qntd_baloes){
    for (var cont = 1; cont <= qntd_baloes; cont++){ //For para criar os balões.
        var balao = document.createElement('img');
        balao.src = '../estourando_baloes/imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b'+cont;
        document.getElementById('baloes_azul').appendChild(balao);
        balao.style.cursor = 'pointer';
        balao.onclick = function(){ estourar(this) }
        }
}

function estourar(e){
    let idBalao = e.id;

    document.getElementById(idBalao).src = '../estourando_baloes/imagens/balao_azul_pequeno_estourado.png'
}