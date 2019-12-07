var timerId = null;

function iniciarJogo(){ //função para setar a difículdade do jogo
    let url = window.location.search;
    let nivel_jogo = url.replace("?", "");
    var tempo = 0;

    const gameOverVer = true;

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

    if (gameOverVer === true){
        qnt_baloes(qntd_baloes);
}

    document.getElementById('qtd_baloes_num').innerHTML = qntd_baloes;

    tempoContagem(tempo);

    document.getElementById('crono').innerHTML = tempo;
}

function game_over(){ //FUNÇÃO GAME OVER PARA QUANDO ACABAR O LIMiTE DE TEMPO
    gameOverVer = false;
    alert('Você não conseguiu estourar todos os balões a tempo!');

    if (gameOverVer === false){  // Gambiarra para que os balões não possam ser clickados depois que o tempo acabar rs
        let gameOverDiv = document.getElementById('div-gameover');
        let button = document.createElement('button');
        button.style.width = '580px';
        button.style.height = '521px';
        button.style.border = '0';
        button.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        button.style.position = 'absolute';
        gameOverDiv.appendChild(button);

    }
    
    // Alguns codigos para que um botão possa ser criado após o termino do tempo.
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
        botao.style.height = '65px'
    }

    function botaoOut(){
        botao.style.height = '60px'
    }
    //FUNÇÃO 'botaoOut' E 'botaoOver' PARA FAZER UMA ANIMAÇÃO SIMPLES NO BOTÃO

    botao.onmouseover = botaoOver;
    botao.onmouseout = botaoOut;
}

function tempoContagem(segundos){ // Função para configurar um contador
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



function qnt_baloes(qntd_baloes){ // Função para criar balões
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

function estourar(e){ // Função para mostrar o balão estourado ao clickar no balão inteiro
    let idBalao = e.id;

    document.getElementById(idBalao).src = '../estourando_baloes/imagens/balao_azul_pequeno_estourado.png';
    document.getElementById(idBalao).id = '';
    pontuacao(-1);
}

function pontuacao(acao){ // Função para marcar os balões estourados e os balões inteiros
    let baloes_inteiros = document.getElementById('qtd_baloes_num').innerHTML;
    let baloes_estourados = document.getElementById('baloes_estourados').innerHTML;
    baloes_estourados = parseInt(baloes_estourados);
    baloes_inteiros = parseInt(baloes_inteiros);

    baloes_inteiros = baloes_inteiros + acao;
    baloes_estourados = baloes_estourados - acao;

    document.getElementById('qtd_baloes_num').innerHTML = baloes_inteiros;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    fim_jogo(baloes_inteiros, baloes_estourados);
}

function fim_jogo(baloes_inteiros, baloes_estourados){ //Função para mostrar uma mensagem de parabéns ao estourar todos os balões
    if (baloes_inteiros == 0){
        alert('Parabéns, você estourou todos os balões!');
        parar_timer();
    }
}

function parar_timer(){ // Função para sertar o timer em algum tempo específico
    clearTimeout(timerId);
}