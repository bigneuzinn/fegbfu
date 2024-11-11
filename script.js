document.addEventListener("DOMContentLoaded", function () {
    const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
    const itensCarrinho = document.querySelector('.itens-carrinho');
    const valorTotal = document.querySelector('.valor-total-carrinho');
    const modalCarrinho = document.querySelector('.modal-carrinho');
    const fecharCarrinhoBtn = document.querySelector('.fechar-carrinho');
    const botaoFinalizar = document.querySelector('.botao-finalizar');
    let carrinho = [];
    let total = 0;

    // atualizar a lista do carrinho e o valor total
    function atualizarCarrinho() {
        itensCarrinho.innerHTML = '';
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
            itensCarrinho.appendChild(li);
        });
        valorTotal.textContent = total.toFixed(2);
    }

    // adicionar itens ao carrinho
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const produtoDiv = e.target.closest('.produto');
            const nome = produtoDiv.querySelector('p').textContent;
            const preco = parseFloat(produtoDiv.querySelector('span').textContent.replace('R$', '').replace(',', '.'));

            // Adiciona o produto ao carrinho e atualiza o total
            carrinho.push({ nome, preco });
            total += preco;
            atualizarCarrinho();

            // Mostra uma notificação de sucesso
            Swal.fire({
                icon: 'success',
                title: 'Item adicionado ao carrinho!',
                showConfirmButton: false,
                timer: 1500
            });
        });
    });

    // Abre o modal do carrinho
    document.querySelector('.icone-carrinho').addEventListener('click', () => {
        modalCarrinho.style.display = 'block';
    });

    // Fecha o modal do carrinho
    fecharCarrinhoBtn.addEventListener('click', () => {
        modalCarrinho.style.display = 'none';
    });

    // Finalizar a compra
    botaoFinalizar.addEventListener('click', () => {
        if (carrinho.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Seu carrinho está vazio!',
                text: 'Adicione itens ao carrinho antes de finalizar a compra.',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Compra finalizada com sucesso!',
                text: 'Obrigado por comprar conosco.',
            }).then(() => {
                // Esvaziar o carrinho
                carrinho = [];
                total = 0;
                atualizarCarrinho();
                modalCarrinho.style.display = 'none'; // Fecha o modal
            });
        }
    });
});