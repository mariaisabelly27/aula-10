document.addEventListener('DOMContentLoaded', function () {
    // Botão encantado de acessibilidade
    const botaoEncantado = document.getElementById('botao-acessibilidade');
    const opcoesEncantadas = document.getElementById('opcoes-acessibilidade');

    botaoEncantado.addEventListener('click', function () {
        botaoEncantado.classList.toggle('rotacao-botao');
        opcoesEncantadas.classList.toggle('apresenta-lista');

        const estaAberto = botaoEncantado.getAttribute('aria-expanded') === 'true';
        botaoEncantado.setAttribute('aria-expanded', !estaAberto);
    });

    // Magia para aumentar e diminuir a fonte
    const feitiçoAumentarFonte = document.getElementById('aumentar-fonte');
    const feitiçoDiminuirFonte = document.getElementById('diminuir-fonte');
    const feitiçoContraste = document.getElementById('alterna-contraste');

    let tamanhoFonteAtual = 1;

    feitiçoAumentarFonte.addEventListener('click', function () {
        tamanhoFonteAtual += 0.1;
        document.body.style.fontSize = `${tamanhoFonteAtual}rem`;
    });

    feitiçoDiminuirFonte.addEventListener('click', function () {
        tamanhoFonteAtual -= 0.1;
        document.body.style.fontSize = `${tamanhoFonteAtual}rem`;
    });

    // Encantamento de contraste mágico
    feitiçoContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });
});

// Revelações mágicas com ScrollReveal ✨
ScrollReveal().reveal('#inicio', { delay: 500, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('#tropicalia', { delay: 500, distance: '50px', origin: 'left' });
ScrollReveal().reveal('#galeria', { delay: 500, distance: '50px', origin: 'right' });
ScrollReveal().reveal('#contato', { delay: 500, distance: '50px', origin: 'top' });
