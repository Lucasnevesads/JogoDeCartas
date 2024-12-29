const simButton = document.getElementById('simButton');
const naoButton = document.getElementById('naoButton');

// Função para mover o botão "Não" para uma posição aleatória dentro da área da tela
function moverNaoButton() {
    // Pegando as dimensões do botão "Não" e do container dos botões
    const container = document.querySelector('.buttons');
    const larguraContainer = container.offsetWidth;
    const larguraBotao = naoButton.offsetWidth;

    // Calculando a posição aleatória dentro do container (sem sair da área visível)
    const novaPosicaoX = Math.random() * (larguraContainer - larguraBotao); // Movimento horizontal dentro do container
    const novaPosicaoY = Math.random() * (container.offsetHeight - naoButton.offsetHeight); // Movimento vertical dentro do container

    // Aplicando a posição calculada ao botão "Não"
    naoButton.style.left = `${novaPosicaoX}px`;
    naoButton.style.top = `${novaPosicaoY}px`;
}

// Evento para mover o botão "Não" quando clicado
naoButton.addEventListener('click', moverNaoButton);

// Evento para redirecionar ao clicar no botão "Sim"
simButton.addEventListener('click', () => {
    // Substitua o link abaixo pelo link do vídeo desejado
    window.location.href = 'https://www.youtube.com/watch?v=izGwDsrQ1eQ'; // Exemplo de link
});
