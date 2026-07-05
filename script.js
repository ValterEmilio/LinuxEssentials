// Seleciona todos os botões de informação
    const botoesInfo = document.querySelectorAll('.btn-info');

    botoesInfo.forEach(botao => {
        botao.addEventListener('click', function() {
            // Encontra a tela branca (overlay) imediatamente após o botão clicado
            const overlay = this.nextElementSibling;
            
            // Alterna a classe 'ativo' para mostrar/esconder a tela
            overlay.classList.toggle('ativo');
            
            // Muda o texto do botão dependendo se a tela está aberta ou fechada
            if (overlay.classList.contains('ativo')) {
                this.textContent = 'Fechar Resumo';
                this.style.backgroundColor = '#ff4c4c'; // Fica vermelho ao fechar
            } else {
                this.textContent = 'Ver Resumo';
                this.style.backgroundColor = '#00bfff'; // Volta pro azul padrão
            }
        });
    });