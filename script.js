document.addEventListener("DOMContentLoaded", function () {
    const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
    const itensCarrinho = document.querySelector('.itens-carrinho');
    const valorTotal = document.querySelector('.valor-total-carrinho');
    const modalCarrinho = document.querySelector('.modal-carrinho');
    const fecharCarrinhoBtn = document.querySelector('.fechar-carrinho');
    const botaoFinalizar = document.querySelector('.botao-finalizar');
    let carrinho = [];
    let total = 0;

   
    function atualizarCarrinho() {
        itensCarrinho.innerHTML = '';
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
            itensCarrinho.appendChild(li);
        });
        valorTotal.textContent = total.toFixed(2);
    }

  
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const produtoDiv = e.target.closest('.produto');
            const nome = produtoDiv.querySelector('p').textContent;
            const preco = parseFloat(produtoDiv.querySelector('span').textContent.replace('R$', '').replace(',', '.'));

           
            carrinho.push({ nome, preco });
            total += preco;
            atualizarCarrinho();

            
            Swal.fire({
                icon: 'success',
                title: 'Item adicionado ao carrinho!',
                showConfirmButton: false,
                timer: 1500
            });
        });
    });

    document.querySelector('.icone-carrinho').addEventListener('click', () => {
        modalCarrinho.style.display = 'block';
    });

    fecharCarrinhoBtn.addEventListener('click', () => {
        modalCarrinho.style.display = 'none';
    });


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
                
                carrinho = [];
                total = 0;
                atualizarCarrinho();
                modalCarrinho.style.display = 'none'; 
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const pesquisaInput = document.getElementById('pesquisa');
    const botaoPesquisar = document.getElementById('botao-pesquisar');
    const produtos = document.querySelectorAll('.produto');
1
    const filtrarProdutos = () => {
        const termoPesquisa = pesquisaInput.value.toLowerCase();

        produtos.forEach(produto => {
            const nomeProduto = produto.querySelector('p').textContent.toLowerCase();
            
            if (nomeProduto.includes(termoPesquisa)) {
                produto.style.display = 'block';  
            } else {
                produto.style.display = 'none'; 
            }
        });
    };

    
    pesquisaInput.addEventListener('keyup', filtrarProdutos);

    botaoPesquisar.addEventListener('click', filtrarProdutos);
});
