document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        atirarBolinha();
    }
});

function atirarBolinha() {
    var bolinha = document.createElement('div');
    bolinha.className = 'bolinha';
    document.body.appendChild(bolinha);

    var posicaoX = document.getElementById('sunny').getBoundingClientRect().right; // Posição inicial da bolinha em relação ao Sunny
    var posicaoY = document.getElementById('sunny').getBoundingClientRect().top + 50; // Posição inicial da bolinha em relação ao topo da tela
    bolinha.style.left = posicaoX + 'px';
    bolinha.style.top = posicaoY + 'px';

    var intervalo = setInterval(function() {
        posicaoX += 5; // Ajuste a velocidade do movimento horizontal
        bolinha.style.left = posicaoX + 'px';

        // Verifica se a bolinha atingiu a borda da tela
        if (posicaoX >= window.innerWidth) {
            bolinha.remove(); // Remove a bolinha
            clearInterval(intervalo); // Para o movimento da bolinha
        }

        // Verifica colisão com o alvo
        var alvo = document.getElementById('alvo');
        var retBolinha = bolinha.getBoundingClientRect();
        var retAlvo = alvo.getBoundingClientRect();
        if (retBolinha.right >= retAlvo.left && retBolinha.left <= retAlvo.right && retBolinha.top <= retAlvo.bottom && retBolinha.bottom >= retAlvo.top) {
            alvo.style.display = 'none'; // Esconde o alvo
            bolinha.remove(); // Remove a bolinha
            clearInterval(intervalo); // Para o movimento da bolinha
        }
    }, 7); // Ajuste o intervalo de tempo conforme necessário
}
