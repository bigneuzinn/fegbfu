document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões de adicionar ao carrinho
    const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
    
    botoesAdicionar.forEach(botao => {
        // Adiciona um evento de clique a cada botão
        botao.addEventListener('click', function () {
            Swal.fire({
                icon: 'success',
                title: 'Item adicionado ao carrinho!',
                showConfirmButton: false,
                timer: 1500
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões de adicionar ao carrinho
    const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
    const cartModal = document.querySelector('.cart-modal');
    const closeCartButton = document.querySelector('.close-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotalValue = document.querySelector('.cart-total-value');
    const checkoutButton = document.querySelector('.checkout-btn');
    
    // Array para armazenar os itens do carrinho
    let cart = [];

    // Função para atualizar a interface do carrinho
    function updateCart() {
        // Limpa a lista do carrinho
        cartItemsList.innerHTML = '';
        let total = 0;

        // Adiciona os itens ao carrinho e calcula o total
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$${item.preco}`;
            cartItemsList.appendChild(li);
            total += parseFloat(item.preco);
        });

    // Atualiza o valor total
        cartTotalValue.textContent = total.toFixed(2);
    }

    // Função para mostrar o modal do carrinho
    function openCart() {
        cartModal.style.display = 'block';
    }

    // Função para fechar o modal do carrinho
    function closeCart() {
        cartModal.style.display = 'none';
    }

    // Adiciona um evento de clique para abrir o carrinho
    document.querySelector('.cart').addEventListener('click', openCart);

    // Adiciona um evento de clique para fechar o carrinho
    closeCartButton.addEventListener('click', closeCart);

    // Adiciona um evento de clique ao botão de finalizar compra
    checkoutButton.addEventListener('click', function() {
        if (cart.length > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Compra Finalizada!',
                text: `Total: R$${cartTotalValue.textContent}`,
                showConfirmButton: false,
                timer: 2000
            });
            cart = []; // Limpa o carrinho
            updateCart(); // Atualiza a interface
            closeCart(); // Fecha o carrinho
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Carrinho Vazio',
                text: 'Adicione produtos ao carrinho antes de finalizar.',
                showConfirmButton: true
            });
        }
    });

    // Função para adicionar produtos ao carrinho
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function () {
            const produto = this.closest('.product');
            const nome = produto.querySelector('p').textContent;
            const preco = produto.querySelector('span').textContent.replace('R$', '').trim();

            // Adiciona o item ao carrinho
            cart.push({ nome, preco });

            // Exibe um alerta informando que o produto foi adicionado
            Swal.fire({
                icon: 'success',
                title: 'Item adicionado ao carrinho!',
                showConfirmButton: false,
                timer: 1500
            });

            // Atualiza o carrinho
            updateCart();
        });
    });
});
