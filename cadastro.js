document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Feather Icons
    feather.replace();

    // Função para mostrar mensagens
    function showMessage(message, type = 'info') {
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box', type);
        messageBox.textContent = message;
        document.body.appendChild(messageBox);
        setTimeout(() => messageBox.remove(), 3000);
    }

    // Lógica do formulário de cadastro
    const authForm = document.getElementById('auth-form');
    const toggleFormBtn = document.querySelector('.toggle-form-btn');

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('auth-name').value;
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        const zip = document.getElementById('auth-zip').value;
        const address = document.getElementById('auth-address').value;
        const city = document.getElementById('auth-city').value;
        const state = document.getElementById('auth-state').value;

        if (name && email && password && zip && address && city && state) {
            localStorage.setItem('isLoggedIn', 'true');
            showMessage('Cadastro realizado com sucesso!', 'success');
            setTimeout(() => {
                window.location.href = 'store.html';
            }, 1000);
        } else {
            showMessage('Por favor, preencha todos os campos.', 'error');
        }
    });

    toggleFormBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    // Busca de endereço por CEP
    const searchZipBtn = document.getElementById('auth-search-zip-btn');
    const zipInput = document.getElementById('auth-zip');
    const addressInput = document.getElementById('auth-address');
    const cityInput = document.getElementById('auth-city');
    const stateInput = document.getElementById('auth-state');

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
            addressInput.value = data.logradouro || '';
            cityInput.value = data.localidade || '';
            stateInput.value = data.uf || '';
        } catch (error) {
            showMessage('Erro ao buscar o CEP. Tente novamente mais tarde.', 'error');
            console.error('Erro na busca de CEP:', error);
        }
    });

    // Lógica do menu hambúrguer
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

    // Lógica do modal de informações
    const importantBtn = document.getElementById('important-btn');
    const aboutMeModal = document.getElementById('about-me-modal');
    if (importantBtn && aboutMeModal) {
        importantBtn.addEventListener('click', () => aboutMeModal.classList.toggle('open'));
        aboutMeModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn')) {
                aboutMeModal.classList.remove('open');
            }
        });
    }
});