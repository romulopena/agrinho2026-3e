// Seleciona o botão de inversão de cores pela classe dele
const botaoInverter = document.querySelector('.cabecalho-titulo-botao');

// Adiciona o evento de clique ao botão
botaoInverter.addEventListener('click', () => {
    // Liga/Desliga a classe 'dark-mode' no corpo da página
    document.body.classList.toggle('dark-mode');
    
    // Mudança opcional: Alterar o texto/emoji do botão dinamicamente
    if (document.body.classList.contains('dark-mode')) {
        botaoInverter.innerHTML = "Modo Claro ☀️";
    } else {
        botaoInverter.innerHTML = "Inversão de cores 🌓";
    }
});