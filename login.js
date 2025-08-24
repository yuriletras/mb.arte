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

    // Lógica do formulário de login
    const authForm = document.getElementById('auth-form');
    const toggleFormBtn = document.querySelector('.toggle-form-btn');

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;

        // Simulação de autenticação
        if (email && password) {
            localStorage.setItem('isLoggedIn', 'true');
            showMessage('Login realizado com sucesso!', 'success');
            setTimeout(() => {
                window.location.href = 'store.html';
            }, 1000);
        } else {
            showMessage('Por favor, preencha todos os campos.', 'error');
        }
    });

    toggleFormBtn.addEventListener('click', () => {
        window.location.href = 'cadastro.html';
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