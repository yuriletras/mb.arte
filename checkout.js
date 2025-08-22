document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Feather Icons
    feather.replace();

    // Alternar métodos de pagamento
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('card-details');
    const pixDetails = document.getElementById('pix-details');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            cardDetails.style.display = radio.value === 'card' ? 'block' : 'none';
            pixDetails.style.display = radio.value === 'pix' ? 'block' : 'none';
        });
    });

    // Função para renderizar itens do pedido
    function renderOrderItems() {
        const orderItemsContainer = document.querySelector('.order-items');
        const orderTotal = document.getElementById('order-total');
        // Assumindo que store-logic.js armazena carrinho no localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        orderItemsContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('order-item');
            itemElement.innerHTML = `
                <img src="${item.image || 'images/placeholder.jpg'}" alt="${item.name}">
                <div class="order-item-details">
                    <h4>${item.name}</h4>
                    <p class="item-price">R$ ${(item.price * item.quantity).toFixed(2)}</p>
                    <p>Quantidade: ${item.quantity}</p>
                </div>
                <button class="remove-order-item-btn" data-index="${index}">Remover</button>
            `;
            orderItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        orderTotal.textContent = total.toFixed(2);

        // Adicionar eventos aos botões de remoção
        document.querySelectorAll('.remove-order-item-btn').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.dataset.index;
                cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                renderOrderItems();
                // Assumindo função updateCartCount() em store-logic.js
                if (typeof updateCartCount === 'function') {
                    updateCartCount();
                }
            });
        });
    }

    // Lógica de validação do formulário
    const checkoutForm = document.getElementById('checkout-form');
    const finalizeBtn = document.querySelector('.finalize-btn');

    finalizeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkoutForm.checkValidity()) {
            alert('Compra finalizada com sucesso!');
            localStorage.removeItem('cartItems');
            renderOrderItems();
            if (typeof updateCartCount === 'function') {
                updateCartCount();
            }
        } else {
            checkoutForm.reportValidity();
        }
    });

    // Inicializar resumo do pedido
    renderOrderItems();

    // Inicializar interações do menu
    const hamburgerBtn = document.getElementById('hamburger-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target) && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
        }
    });

    // Inicializar submenu
    const navProductsLink = document.querySelector('.nav-products-link');
    if (navProductsLink) {
        navProductsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = navProductsLink.nextElementSibling;
            submenu.classList.toggle('open');
        });
    }

    // Busca de endereço por CEP
    const searchZipBtn = document.getElementById('search-zip-btn');
    const zipInput = document.getElementById('zip');
    const streetInput = document.getElementById('street');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');

    searchZipBtn.addEventListener('click', async () => {
        const cep = zipInput.value.replace(/\D/g, '');
        if (cep.length !== 8) {
            alert('Por favor, insira um CEP válido com 8 dígitos.');
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado. Verifique e tente novamente.');
                return;
            }

            streetInput.value = data.logradouro || '';
            cityInput.value = data.localidade || '';
            stateInput.value = data.uf || '';
        } catch (error) {
            alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
            console.error('Erro na busca de CEP:', error);
        }
    });
});