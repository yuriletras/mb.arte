document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Feather Icons
    feather.replace();

    // Referências aos botões e formulário
    const loginBtn = document.querySelector('.login-btn');
    const guestCheckoutBtn = document.querySelector('.guest-checkout-btn');
    const authButtons = document.querySelector('.auth-buttons');
    const checkoutForm = document.getElementById('checkout-form');
    const finalizeBtn = document.querySelector('.finalize-btn');
    const navLoginLink = document.querySelector('.nav-login-link');
    const navRegisterLink = document.querySelector('.nav-register-link');

    // Verificar estado de autenticação
    let isLoggedIn = !!localStorage.getItem('isLoggedIn');

    // Função para mostrar o formulário de checkout
    const showCheckoutForm = (isGuest = false) => {
        checkoutForm.style.display = 'block';
        finalizeBtn.style.display = 'block';
        if (isGuest) {
            authButtons.style.display = 'none'; // Oculta os botões para visitantes
        } else {
            authButtons.innerHTML = isLoggedIn ? `
                <button type="button" class="logout-btn">Sair</button>
            ` : `
                <button type="button" class="login-btn">Fazer Login ou Cadastrar</button>
                <button type="button" class="guest-checkout-btn">Continuar como Visitante</button>
            `;
            // Reassociar eventos aos novos botões
            if (!isLoggedIn) {
                document.querySelector('.login-btn').addEventListener('click', () => {
                    window.location.href = 'login.html';
                });
                document.querySelector('.guest-checkout-btn').addEventListener('click', () => showCheckoutForm(true));
            }
        }
    };

    // --- FUNÇÕES DE UTILIDADE ---

    // Substituir alert() por uma função de mensagem mais amigável
    function showMessage(message, type = 'info') {
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box', type);
        messageBox.textContent = message;
        document.body.appendChild(messageBox);
        setTimeout(() => messageBox.remove(), 3000);
    }

    // --- LÓGICA DE PAGAMENTO E PEDIDO ---

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

        document.querySelectorAll('.remove-order-item-btn').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.dataset.index;
                cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                renderOrderItems();
                if (typeof updateCartCount === 'function') {
                    updateCartCount();
                }
            });
        });
    }

    // Lógica de validação do formulário de checkout
    finalizeBtn.style.display = 'none';
    finalizeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkoutForm.checkValidity()) {
            showMessage('Compra finalizada com sucesso! Entre em contato pelo WhatsApp para personalizar seus itens.', 'success');
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

    // --- EVENTOS DO LAYOUT E MENU ---

    const hamburgerBtn = document.getElementById('hamburger-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target) && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
        }
    });

    const navProductsLink = document.querySelector('.nav-products-link');
    if (navProductsLink) {
        navProductsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = navProductsLink.nextElementSibling;
            submenu.classList.toggle('open');
        });
    }

    // --- EVENTOS DE AUTENTICAÇÃO E CHECKOUT ---

    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    guestCheckoutBtn.addEventListener('click', () => {
        showCheckoutForm(true);
    });

    navLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
        mobileNav.classList.remove('open');
    });

    navRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'cadastro.html';
        mobileNav.classList.remove('open');
    });

    // Evento de logout
    authButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('logout-btn')) {
            localStorage.removeItem('isLoggedIn');
            isLoggedIn = false;
            checkoutForm.style.display = 'none';
            finalizeBtn.style.display = 'none';
            authButtons.style.display = 'flex'; // Restaura os botões de autenticação
            authButtons.innerHTML = `
                <button type="button" class="login-btn">Fazer Login ou Cadastrar</button>
                <button type="button" class="guest-checkout-btn">Continuar como Visitante</button>
            `;
            // Reassociar eventos aos botões restaurados
            document.querySelector('.login-btn').addEventListener('click', () => {
                window.location.href = 'login.html';
            });
            document.querySelector('.guest-checkout-btn').addEventListener('click', () => showCheckoutForm(true));
        }
    });

    // Lógica para o modal de informações
    const importantBtn = document.getElementById('important-btn');
    const aboutMeModal = document.getElementById('about-me-modal');
    importantBtn.addEventListener('click', () => aboutMeModal.classList.toggle('open'));
    aboutMeModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn')) {
            aboutMeModal.classList.remove('open');
        }
    });

    // Busca de endereço por CEP no formulário de checkout
    const searchZipBtn = document.getElementById('search-zip-btn');
    const zipInput = document.getElementById('zip');
    const streetInput = document.getElementById('street');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');

    searchZipBtn.addEventListener('click', async () => {
        const cep = zipInput.value.replace(/\D/g, '');
        if (cep.length !== 8) {
            showMessage('Por favor, insira um CEP válido com 8 dígitos.', 'error');
            return;
        }
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
                showMessage('CEP não encontrado. Verifique e tente novamente.', 'error');
                return;
            }
            streetInput.value = data.logradouro || '';
            cityInput.value = data.localidade || '';
            stateInput.value = data.uf || '';
        } catch (error) {
            showMessage('Erro ao buscar o CEP. Tente novamente mais tarde.', 'error');
            console.error('Erro na busca de CEP:', error);
        }
    });

    // Mostrar formulário de checkout se o usuário estiver logado
    if (isLoggedIn) {
        showCheckoutForm();
    }
});