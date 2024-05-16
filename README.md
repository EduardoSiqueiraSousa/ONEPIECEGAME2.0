# ONEPIECEGAME2.0
Código HTML proposto em sala, segunda versão

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ONE PIECE MINIGAME</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <!-- Imagem que será movida -->
    <img id="imagem" src="sunny.png" alt="Sunny">
    <img id="imagem2" src="zoro.png" alt="Zoro">
    <img id="imagem3" src="luffy.png" alt="Luffy">
    <img id="imagem4" src="nami.png" alt="Nami">
    <img id="imagem5" src="usopp.png" alt="Usopp">
    <img id="imagem6" src="sanji.png" alt="Sanji">
    <img id="imagem7" src="chopper.png" alt="Chopper">
    <img id="imagem8" src="robin.png" alt="Robin">
    <img id="imagem9" src="brook.png" alt="Brook">
    <img id="imagem10" src="jinbei.png" alt="Jinbei">
    <img id="imagem11" src="franky.png" alt="Franky">

    <!-- Tela de parabéns -->
    <div id="parabens">
        <div>
        <h1>PARABÉNS!</h1>
        <p>Você reuniu todos <br>
            os chapéu de palha!
        </p>
        <!-- Adicionando o botão -->
        <a href="viloes.html" class="botao">PRÓXIMA FASE</a>
         </div>
        <div>
        <img class="bau" src="bau.png">
        </div>
    </div>

<script>
    // Obtém a referência para a imagem
    var imagem = document.getElementById('imagem');
    var imagensItens = document.querySelectorAll('img[id^="imagem"]:not(#imagem)');
    var parabens = document.getElementById('parabens');
    
    // Define as coordenadas iniciais da imagem
    var posX = 50;
    var posY = 50;

// Definindo a sequência correta de captura das imagens
var sequenciaCorreta = [3, 2, 4, 5, 6, 7, 8, 11, 9, 10];
var proximaImagem = 0; // Índice da próxima imagem a ser capturada
    
   // Função para verificar se a captura está seguindo a sequência correta
function verificarSequenciaCorreta(imagemId) {
    // Obtém o número da imagem atual
    var numeroImagem = parseInt(imagemId.replace('imagem', ''));
    
    // Verifica se a imagem capturada é a próxima na sequência
    if (numeroImagem === sequenciaCorreta[proximaImagem]) {
        // Se for a próxima na sequência, atualiza a próxima imagem
        proximaImagem++;
        return true;
    } else {
        // Verifica se a imagem capturada está na lista de imagens capturadas anteriormente
        if (sequenciaCorreta.includes(numeroImagem)) {
            // Se a imagem já foi capturada anteriormente, não permite a captura
            return false;
        } else {
            // Se a imagem não foi capturada anteriormente, permite a captura (para voltar atrás)
            return true;
        }
    }
}

    // Função para verificar se houve colisão entre duas imagens
    function verificarColisao(imagem1, imagem2) {
        var ret1 = imagem1.getBoundingClientRect();
        var ret2 = imagem2.getBoundingClientRect();

        return !(ret2.left > ret1.right || 
                 ret2.right < ret1.left || 
                 ret2.top > ret1.bottom ||
                 ret2.bottom < ret1.top);
    }

    // Função para mover a imagem e capturar outras imagens
    function moverImagem(event) {
        // Verifica qual tecla foi pressionada
        switch(event.keyCode) {
            case 37: // seta para a esquerda
                if (posX > 0) {
                    posX -= 10;
                }
                break;
            case 38: // seta para cima
                if (posY > 0) {
                    posY -= 10;
                }
                break;
            case 39: // seta para a direita
                if (posX < window.innerWidth - imagem.width) {
                    posX += 10;
                }
                break;
            case 40: // seta para baixo
                if (posY < window.innerHeight - imagem.height) {
                    posY += 10;
                }
                break;
        }
        
        // Atualiza a posição da imagem
        imagem.style.left = posX + 'px';
        imagem.style.top = posY + 'px';

        // Verifica se houve colisão entre "sunny" e os outros itens
        imagensItens.forEach(function(item) {
            if (item.style.display !== 'none' && verificarColisao(imagem, item)) {
                // Verifica se a captura está seguindo a sequência correta
                if (verificarSequenciaCorreta(item.id)) {
                    // Se a captura estiver correta, oculta o item
                    item.style.display = 'none';
                }
            }
        });

        // Verifica se todas as imagens foram capturadas
        var todasCapturadas = true;
        imagensItens.forEach(function(item) {
            if (item.style.display !== 'none') {
                todasCapturadas = false;
            }
        });

        // Se todas as imagens foram capturadas, exibe a tela de parabéns
        if (todasCapturadas) {
            parabens.style.display = 'block';
        }
    }
    
    // Adiciona um event listener para capturar os eventos de teclado
    window.addEventListener('keydown', moverImagem);

    // Esconde a mensagem de parabéns no início do jogo
    parabens.style.display = 'none';

</script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    background-image: url("marxd.png"); /* substitua pelo caminho da sua imagem */
    background-size: cover; /* para cobrir toda a área */
    color: white; /* cor do texto para melhorar a legibilidade */
}   
body {
    margin: 0;
    overflow: hidden; /* Impede a barra de rolagem */
    background-color: #f0f0f0; /* Cor de fundo */
}
#container {
    position: relative;
    width: 100%;
    height: 100vh; /* Altura total da tela visível */
}
img {
    position: absolute;
}
h1 {
    color: blue;
}
#parabens {
    display: none; /* Inicialmente esconde o elemento */
    position: absolute; /* Alterado para 'absolute' para que ele fique centralizado em relação ao conteúdo */
    top: 310px; /* Posiciona o topo no meio vertical */
    left: 680px; /* Posiciona a esquerda no meio horizontal */
    transform: translate(-50%, -50%); /* Move o elemento 50% do seu próprio tamanho para o centro, tanto vertical quanto horizontalmente */
    background-color: #ffb444;
    border: 5px solid #795014;
    padding: 40px;
    text-align: left;
    width: 400px;
    border-radius: 40px;
    display: inline-block;
}

    #parabens img.bau {
        position: absolute;
        top: 50%;
        right: 4px; /* Posiciona a imagem à direita */
        transform: translateY(-50%);
        width: 230px;
        height: auto;
    }
#parabens h1 {
    font-size: 28px; /* Aumentei o tamanho da fonte */
    color: #795014; /* Cor do texto */
    margin-bottom: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; /* Fonte Gill Sans */
}

#parabens p {
    font-size: 20px;
    color: #9d6300;
    margin-top: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    position: relative;
}

#parabens {
    position: relative; /* Alterado para relativo para que a imagem fique posicionada em relação a este div */
    /* Estilos anteriores... */
}

p {
    font-size: 16px;
    line-height: 1.5;
}
        /* Estilos CSS para a imagem */
        #imagem {
            position: absolute;
            top: 50px;
            left: 50px;
            width: 150px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem2 {
            position: absolute;
            top: 10px;
            left: 730px;
            width: 150px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem3 {
            position: absolute;
            top: 90px;
            left: 340px;
            width: 130px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem4 {
            position: absolute;
            top: 80px;
            left: 1180px;
            width: 100px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem5 {
            position: absolute;
            top: 270px;
            left: 50px;
            width: 150px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem6 {
            position: absolute;
            top: 310px;
            left: 420px;
            width: 150px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem7 {
            position: absolute;
            top: 250px;
            left: 700px;
            width: 175px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem8 {
            position: absolute;
            top: 250px;
            left: 1050px;
            width: 150px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem9 {
            position: absolute;
            top: 450px;
            left: 210px;
            width: 150px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem10 {
            position: absolute;
            top: 460px;
            left: 860px;
            width: 190px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }
        #imagem11 {
            position: absolute;
            top: 460px;
            left: 620px;
            width: 100px; /* Defina a largura desejada */
            height: auto; /* Mantém a proporção da imagem */
        }

        .botao {
            display: inline-block;
            padding: 10px 20px;
            background-color: #753a09;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            margin-top: 20px; /* Adicione margem superior para separar do texto */
        }
        
        .botao:hover {
            background-color: #45a049;
        }

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VILOES</title>
    <link rel="stylesheet" type="text/css" href="style2.css">
</head>
<body>
    <!-- Imagem do Sunny -->
    <img id="sunny" src="sunny.png" alt="Sunny">

    <!-- Imagens alvo -->
        <!-- Imagens alvo -->
        <img id="alvo" class="alvo" src="crocodile.png" alt="Alvo">
        <img id="alvo2" class="alvo" src="enel.png" alt="Alvo2">
        <img id="alvo3" class="alvo" src="doflamingo.png" alt="Alvo3">
        <img id="alvo4" class="alvo" src="lucci.png" alt="Alvo4">
        <img id="alvo5" class="alvo" src="bigmom.png" alt="Alvo5">
        <img id="alvo6" class="alvo" src="kaido.png" alt="Alvo6">
        <img id="alvo7" class="alvo" src="katakuri.png" alt="Alvo7">
        <img id="alvo8" class="alvo" src="buggy.png" alt="Alvo8">
        <img id="alvo9" class="alvo" src="teatch.png" alt="Alvo9">
        <img id="alvo10" class="alvo" src="arlong.png" alt="Alvo10">
        <img id="alvo11" class="alvo" src="akainu.png" alt="Alvo11">
        <img id="alvo12" class="alvo" src="kizaru.png" alt="Alvo12">
        <img id="alvo13" class="alvo" src="aokiji.png" alt="Alvo13">
        <img id="alvo14" class="alvo" src="smoke.png" alt="Alvo14">
        <img id="alvo15" class="alvo" src="judge.png" alt="Alvo15">
        <img id="alvo16" class="alvo" src="moriah.png" alt="Alvo16">
        <img id="alvo17" class="alvo" src="caesar.png" alt="Alvo17">

     <script>
        // Variáveis para armazenar a posição do Sunny
        var posicaoSunnyX = 50; // Posição inicial em X
        var posicaoSunnyY = window.innerHeight / 2; // Posição inicial em Y

        document.addEventListener('keydown', function(event) {
            // Verifica qual tecla foi pressionada
            switch(event.code) {
                case 'ArrowUp':
                    moveSunny('up');
                    break;
                case 'ArrowDown':
                    moveSunny('down');
                    break;
                case 'ArrowLeft':
                    moveSunny('left');
                    break;
                case 'ArrowRight':
                    moveSunny('right');
                    break;
                case 'Space':
                    atirarBolinha();
                    break;
            }
        });

        function moveSunny(direction) {
            // Define a velocidade de movimento
            var velocidade = 10;

            // Move o Sunny na direção correspondente
            switch(direction) {
                case 'up':
                    if (posicaoSunnyY > 0) {
                        posicaoSunnyY -= velocidade;
                    }
                    break;
                case 'down':
                    if (posicaoSunnyY < window.innerHeight - document.getElementById('sunny').offsetHeight) {
                        posicaoSunnyY += velocidade;
                    }
                    break;
                case 'left':
                    if (posicaoSunnyX > 0) {
                        posicaoSunnyX -= velocidade;
                    }
                    break;
                case 'right':
                    if (posicaoSunnyX < window.innerWidth - document.getElementById('sunny').offsetWidth) {
                        posicaoSunnyX += velocidade;
                    }
                    break;
            }

            // Atualiza a posição do Sunny
            document.getElementById('sunny').style.top = posicaoSunnyY + 'px';
            document.getElementById('sunny').style.left = posicaoSunnyX + 'px';
        }

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

                // Verifica colisão com os alvos
                var alvos = document.querySelectorAll('.alvo');
                for (var i = 0; i < alvos.length; i++) {
                    var alvo = alvos[i];
                    var retBolinha = bolinha.getBoundingClientRect();
                    var retAlvo = alvo.getBoundingClientRect();
                    if (retBolinha.right >= retAlvo.left && retBolinha.left <= retAlvo.right && retBolinha.top <= retAlvo.bottom && retBolinha.bottom >= retAlvo.top) {
                        alvo.remove(); // Remove o alvo
                        bolinha.remove(); // Remove a bolinha
                        clearInterval(intervalo); // Para o movimento da bolinha
                        break; // Sair do loop após a primeira colisão
                    }
                }
            }, 7); // Ajuste o intervalo de tempo conforme necessário
        }
        
    </script>
</body>
</html>

body {
    margin: 0;
    overflow: hidden;
    background-image: url("marxd.png");
    background-size: cover;
}

#sunny {
    position: absolute;
    left: 50px; /* Ajuste a posição inicial conforme necessário */
    top: 50%; /* Centraliza verticalmente */
    width: 150px;
}

#alvo {
    position: absolute;
    left: 800px; /* Ajuste a posição conforme necessário */
    top: 440px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo2 {
    position: absolute;
    left: 800px; /* Ajuste a posição conforme necessário */
    top: 90px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo3 {
    position: absolute;
    left: 800px; /* Ajuste a posição conforme necessário */
    top: 210px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo4 {
    position: absolute;
    left: 800px; /* Ajuste a posição conforme necessário */
    top: 560px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo5 {
    position: absolute;
    left: 950px; /* Ajuste a posição conforme necessário */
    top: 560px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo6 {
    position: absolute;
    left: 1090px; /* Ajuste a posição conforme necessário */
    top: 560px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo7 {
    position: absolute;
    left: 1090px; /* Ajuste a posição conforme necessário */
    top: 210px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo8 {
    position: absolute;
    left: 1090px; /* Ajuste a posição conforme necessário */
    top: 440px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo9 {
    position: absolute;
    left: 1090px; /* Ajuste a posição conforme necessário */
    top: 50%; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo10 {
    position: absolute;
    left: 1090px; /* Ajuste a posição conforme necessário */
    top: 90px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo11 {
    position: absolute;
    left: 950px; /* Ajuste a posição conforme necessário */
    top: 440px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo12 {
    position: absolute;
    left: 950px; /* Ajuste a posição conforme necessário */
    top: 90px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo13 {
    position: absolute;
    left: 950px; /* Ajuste a posição conforme necessário */
    top: 210px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo14 {
    position: absolute;
    left: 950px; /* Ajuste a posição conforme necessário */
    top: 50%; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo15 {
    position: absolute;
    left: 1225px; /* Ajuste a posição conforme necessário */
    top: 210px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo16 {
    position: absolute;
    left: 1225px; /* Ajuste a posição conforme necessário */
    top: 440px; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}
#alvo17 {
    position: absolute;
    left: 800px; /* Ajuste a posição conforme necessário */
    top: 50%; /* Centraliza verticalmente */
    width: 110px;
    transform: translateY(-50%);
}

.bolinha {
    position: absolute;
    width: 20px; /* Ajuste o tamanho da bolinha conforme necessário */
    height: 20px;
    background-color: rgb(7, 1, 15); /* Cor da bolinha */
    border-radius: 50%; /* Torna a bolinha circular */
    opacity: 5px;
}
