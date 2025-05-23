document.addEventListener('DOMContentLoaded', () => {
    // Esconder/mostrar seções
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    const saboresSecao = document.getElementById('sabores');
    const culturaSecao = document.getElementById('cultura');
    const inovacaoSecao = document.getElementById('inovacao');
    const galeriaSecao = document.getElementById('galeria');
    const depoimentosSecao = document.getElementById('depoimentos');

    saibaMaisBtn.addEventListener('click', () => {
        saboresSecao.classList.remove('oculta');
        culturaSecao.classList.remove('oculta');
        inovacaoSecao.classList.remove('oculta');
        galeriaSecao.classList.remove('oculta');
        depoimentosSecao.classList.remove('oculta');
        saibaMaisBtn.style.display = 'none'; // Opcional: esconde o botão depois de clicar
    });

    // Carrossel de depoimentos
    const depoimentos = document.querySelectorAll('.depoimento');
    const proximoDepoimentoBtn = document.getElementById('proximoDepoimento');
    let indiceDepoimentoAtual = 0;

    function mostrarDepoimento(indice) {
        depoimentos.forEach((depoimento, i) => {
            depoimento.style.transform = `translateX(-${indice * 100}%)`;
        });
    }

    proximoDepoimentoBtn.addEventListener('click', () => {
        indiceDepoimentoAtual = (indiceDepoimentoAtual + 1) % depoimentos.length;
        mostrarDepoimento(indiceDepoimentoAtual);
    });

    // Inicializa o carrossel
    mostrarDepoimento(indiceDepoimentoAtual);
});