function copiarTexto(idDoTexto) {
    // Encontra o parágrafo pelo ID fornecido
    let paragrafo = document.getElementById(idDoTexto);

    // Cria uma seleção para o texto do parágrafo
    let range = document.createRange();
    range.selectNode(paragrafo);
    window.getSelection().removeAllRanges(); // Limpa seleções anteriores
    window.getSelection().addRange(range); // Adiciona a nova seleção

    // Tenta copiar o texto selecionado
    try {
        document.execCommand('copy');
        console.log(`O texto copiado é: ${paragrafo.textContent}`);
    } catch (err) {
        console.error('Não foi possível copiar o texto selecionado', err);
    }

    // Remove a seleção
    window.getSelection().removeAllRanges();
}
    // Botão de resete

    const botaoReset = document.getElementById('reset');

    // Adicionando um evento de clique ao botão de reset
    botaoReset.addEventListener('click', function() {
    // Selecionando todos os cards
    const cards = document.querySelectorAll(".card");
    
    // Removendo a classe que define a cor de fundo dos cartões
    cards.forEach(function(card) {
        card.classList.remove("mudar-cor");
        });
    });

    // Adicionando um evento de clique a todos os cards
    document.querySelectorAll(".card").forEach(function(card) {
        card.addEventListener('click', function() {
            this.classList.add("mudar-cor");
        });
    });

// Rolagem do botão

function scrollToSection() {
    const section = document.getElementById('meuCard');
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth' // Adiciona o efeito de rolagem suave
        });
    }
}


 // JavaScript
function copiarConteudo(idDoCard) {
    // Seleciona o conteúdo do card pelo ID
    let card = document.getElementById(idDoCard);

    // Clona o conteúdo do card para preservar o original
    let conteudoDoCard = card.cloneNode(true);

    // Remove os botões de cópia para evitar que sejam copiados
    conteudoDoCard.querySelectorAll('button').forEach(button => button.remove());

    // Obtém o conteúdo HTML do card clonado
    let conteudoHTML = conteudoDoCard.innerHTML;
    
    // Remove as quebras de linha e os espaços em branco desnecessários
    conteudoHTML = conteudoHTML.trim().replace(/\n\s*/g, '');

    // Copia o conteúdo para a área de transferência
    navigator.clipboard.writeText(conteudoHTML)
        .then(() => {
            console.log('Conteúdo copiado com sucesso: ', conteudoHTML);
        })
        .catch(err => {
            console.error('Erro ao copiar o conteúdo: ', err);
        });
}




