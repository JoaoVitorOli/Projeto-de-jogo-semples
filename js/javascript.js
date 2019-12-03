function iniciarJogo(){ //função para setar a difículdade do jogo
    let url = window.location.search;
    let nivel_jogo = url.replace("?", "");
    var tempo = 0;

    if (nivel_jogo == 1) {
        tempo = 120; //tempo do jogo de 120
    } else if (nivel_jogo == 2) {
        tempo = 60; //tempo do jogo de 60
    } else if (nivel_jogo == 3) {
        tempo = 30; //tempo do jogo de 30
    } else{
        alert('Ocorreu um erro ao nivelar a dificuldade!')
        window.location.href = '../index.html';
    }

    var cronometro = document.getElementById('crono').innerHTML = tempo;

    var qntd_baloes = 80; //quantidade de balões que então dentro de cenário (O máximo de balões que a tela suporta sem bugar é 80)

    document.getElementById('qtd_baloes_num').innerHTML = qntd_baloes;

    for (var cont = 1; cont <= qntd_baloes; cont++){ //For para criar os balões.
        var balao = document.createElement('img');
        balao.src = '../estourando_baloes/imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        document.getElementById('baloes_azul').appendChild(balao);
        balao.style.cursor = 'pointer';
    }

}