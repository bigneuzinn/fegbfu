 const botaoAdicionar = produtoDiv.querySelector('.adicionar-carrinho');
            botaoAdicionar.addEventListener('click', () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Item adicionado ao carrinho!',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os produtos:', error);
        produtosContainer.innerHTML = '<p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>';
    });