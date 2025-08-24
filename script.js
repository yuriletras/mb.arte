document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado');

    // Dados de exemplo de produtos
    const products = [
        {
            id: 1,
            name: "Ilustração em madeira pinus",
            image: "images/produtos/ilustracaoemmadeira1.png",
            description: "Esta ilustração é uma peça única e personalizada, feita com a sua foto favorita. Criada em madeira pinus de alta qualidade, a obra é complementada com uma frase especial e folhagens delicadas, tornando-a uma lembrança perfeita ou um presente inesquecível.",
            price: 90.00
        },
        {
            id: 2,
            name: "Acrílico (redondo)",
            image: "images/produtos/acrilico1.png",
            description: "Placa de acrílico redonda, ideal para decorar qualquer ambiente com elegância. Acompanha base para ser utilizada em prateleiras, escrivaninhas, etc...",
            price: 60.00
        },
        {
            id: 3,
            name: "Flâmula em algodão cru",
            image: "images/produtos/flamula1.png",
            description: "Flâmulas em tecido algodão cru personalizada com frases, nomes, elementos, desenhos...Para tamanhos diferenciados verificar orçamento. Acompanha madeira e cordão para pendurar.",
            price: 40.00
        },
        { id: 4, name: "Placa em MDF", price: 40.00, image: "images/produtos/placa1.png", description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento. Obs.: Para incluir pintura acréscimo de R$10." },
        { id: 5, name: "Placa para recepção", price: 110.00, image: "images/produtos/placamaior1.png", description: "Acrílico: Transparente ou pintado - Cor do fundo a escolha do cliente. Letra preta, branca ou dourada. MDF: Pintada - Cor do fundo a escolha do cliente. Efeito madeira - Disponíveis as cores castanho e chocolate." },
        { id: 6, name: "Porta alianças", price: 50.00, image: "images/produtos/porta1.png", description: "Personalizada com nomes, frases e elementos (símbolos, flores, etc)" },
        { id: 7, name: "Chaveiro", price: 7.00, image: "images/produtos/chaveiro1.png", description: "Personalizado com nomes e elementos, frases e etc. Argola na cor prata / dourada." },
        { id: 8, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+8", description: "Placa em MDF..." },
        { id: 9, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+9", description: "Placa em MDF..." },
        { id: 10, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+10", description: "Placa em MDF..." },
        { id: 11, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+11", description: "Placa em MDF..." },
        { id: 12, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+12", description: "Placa em MDF..." },
        { id: 13, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+13", description: "Placa em MDF..." },
        { id: 14, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+14", description: "Placa em MDF..." },
        { id: 15, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+15", description: "Placa em MDF..." },
        { id: 16, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+16", description: "Placa em MDF..." },
        { id: 17, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+17", description: "Placa em MDF..." },
        { id: 18, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+18", description: "Placa em MDF..." },
    ];

    // Elementos do DOM
    const productTimelineContainer = document.querySelector('.product-timeline');
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const aboutMeModal = document.getElementById('about-me-modal');
    const scheduleModal = document.getElementById('schedule-modal');
    const aboutMeBtn = document.getElementById('about-me-btn');
    const scheduleBtn = document.getElementById('schedule-btn');
    const authModal = document.getElementById('auth-modal');
    const closeBtns = document.querySelectorAll('.modal .close-btn');
    const allModals = document.querySelectorAll('.modal');

    // Verificar elementos do DOM
    console.log('Elementos do DOM:', {
        hamburgerMenuBtn: !!hamburgerMenuBtn,
        mobileNav: !!mobileNav,
        authModal: !!authModal,
        navAuthButtons: !!document.querySelector('.nav-auth-buttons'),
        navLoginLink: !!document.querySelector('.nav-login-link'),
        navRegisterLink: !!document.querySelector('.nav-register-link')
    });

    // --- FUNÇÕES PARA MODAIS ---
    function openModal(modal) {
        closeAllModals();
        if (modal) {
            modal.classList.add('open');
            document.body.classList.add('no-scroll');
            console.log('Modal aberto:', modal.id);
        } else {
            console.error('Modal não encontrado');
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('open');
            document.body.classList.remove('no-scroll');
            console.log('Modal fechado:', modal.id);
        }
    }

    function closeAllModals() {
        allModals.forEach(modal => modal.classList.remove('open'));
        document.body.classList.remove('no-scroll');
        console.log('Todos os modais fechados');
    }

    // --- FUNÇÕES DE NAVEGAÇÃO E OUTRAS LÓGICAS ---
    function setupMobileMenu() {
        if (hamburgerMenuBtn && mobileNav) {
            console.log('Configurando menu hambúrguer');
            hamburgerMenuBtn.addEventListener('click', () => {
                console.log('Botão de hambúrguer clicado');
                mobileNav.classList.toggle('open');
                document.body.classList.toggle('no-scroll');
                console.log('Menu lateral:', mobileNav.classList.contains('open') ? 'aberto' : 'fechado');
            });
        } else {
            console.error('Erro: hamburgerMenuBtn ou mobileNav não encontrados', { hamburgerMenuBtn, mobileNav });
        }

        window.addEventListener('click', (e) => {
            const isClickInsideMobileNav = mobileNav && mobileNav.contains(e.target);
            const isClickOnHamburger = hamburgerMenuBtn && hamburgerMenuBtn.contains(e.target);
            if (!isClickInsideMobileNav && !isClickOnHamburger && mobileNav && mobileNav.classList.contains('open')) {
                mobileNav.classList.remove('open');
                document.body.classList.remove('no-scroll');
                console.log('Menu lateral fechado por clique fora');
            }
        });

        mobileNav.addEventListener('click', (e) => {
            const clickedElement = e.target;
            if (clickedElement.tagName === 'A' && !clickedElement.classList.contains('nav-products-link') && !clickedElement.closest('.submenu')) {
                mobileNav.classList.remove('open');
                console.log('Menu lateral fechado por clique em link');
            }
        });

        const navProductsLink = document.querySelector('.nav-products-link');
        const submenu = navProductsLink ? navProductsLink.nextElementSibling : null;

        if (navProductsLink && submenu) {
            navProductsLink.addEventListener('click', (e) => {
                e.preventDefault();
                navProductsLink.classList.toggle('active');
                submenu.classList.toggle('open');
                console.log('Submenu:', submenu.classList.contains('open') ? 'aberto' : 'fechado');
            });
        } else {
            console.error('Erro: navProductsLink ou submenu não encontrados', { navProductsLink, submenu });
        }
    }

    function renderProducts() {
        if (productTimelineContainer) {
            productTimelineContainer.innerHTML = products.map(product => {
                return `
                    <div class="product-card-timeline fade-in-up" data-id="${product.id}" data-animate>
                        <img src="${product.image}" alt="${product.name}" class="product-image-thumbnail">
                        <h3>${product.name}</h3>
                        <div class="product-details-actions">
                            <button class="details-btn" data-id="${product.id}">Detalhes</button>
                        </div>
                    </div>
                `;
            }).join('');
            console.log('Produtos renderizados:', products.length);
        } else {
            console.error('Container de produtos não encontrado');
        }
    }

    // --- EVENT LISTENERS PRINCIPAIS ---
    console.log('Configurando event listeners');
    renderProducts();
    setupMobileMenu();

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(searchModal);
            console.log('Botão de busca clicado');
        });
    } else {
        console.error('Botão de busca não encontrado');
    }

    if (aboutMeBtn) {
        aboutMeBtn.addEventListener('click', () => {
            openModal(aboutMeModal);
            console.log('Botão Sobre Mim clicado');
        });
    } else {
        console.error('Botão Sobre Mim não encontrado');
    }

    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            openModal(scheduleModal);
            console.log('Botão Planeje sua Criação clicado');
        });
    } else {
        console.error('Botão Planeje sua Criação não encontrado');
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
            console.log('Botão de fechar modal clicado');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') && e.target.classList.contains('open')) {
            closeModal(e.target);
            console.log('Modal fechado por clique no fundo');
        }
    });

    productTimelineContainer.addEventListener('click', (e) => {
        const target = e.target;
        const productId = target.dataset.id;
        if (!productId) return;

        if (target.classList.contains('add-to-cart-btn')) {
            window.location.href = `store.html?action=add_to_cart&id=${productId}`;
            console.log('Adicionar ao carrinho:', productId);
        } else if (target.classList.contains('details-btn')) {
            window.location.href = `store.html?action=details&id=${productId}`;
            console.log('Ver detalhes:', productId);
        }
    });

    // --- LÓGICA DE AUTENTICAÇÃO ---
    const authForm = document.getElementById('auth-form');
    const authTitle = document.getElementById('auth-title');
    const toggleFormBtn = document.getElementById('toggle-form');
    const authSubmitBtn = document.getElementById('auth-submit');
    const authSearchZipBtn = document.getElementById('auth-search-zip-btn');
    const loginLink = document.querySelector('.nav-login-link');
    const registerLink = document.querySelector('.nav-register-link');

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botão Login clicado');
            openModal(authModal);
            showLoginForm();
            mobileNav.classList.remove('open');
            document.body.classList.add('no-scroll');
        });
    } else {
        console.error('Botão .nav-login-link não encontrado');
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botão Cadastrar clicado');
            openModal(authModal);
            showRegisterForm();
            mobileNav.classList.remove('open');
            document.body.classList.add('no-scroll');
        });
    } else {
        console.error('Botão .nav-register-link não encontrado');
    }

    function showLoginForm() {
        authTitle.textContent = 'Login';
        authSubmitBtn.textContent = 'Entrar';
        document.getElementById('email-group').style.display = 'block';
        document.getElementById('password-group').style.display = 'block';
        document.getElementById('name-group').style.display = 'none';
        document.getElementById('cpf-group').style.display = 'none';
        document.getElementById('phone-group').style.display = 'none';
        document.getElementById('cep-group').style.display = 'none';
        document.getElementById('street-group').style.display = 'none';
        document.getElementById('number-group').style.display = 'none';
        document.getElementById('complement-group').style.display = 'none';
        document.getElementById('city-group').style.display = 'none';
        document.getElementById('state-group').style.display = 'none';
        toggleFormBtn.textContent = 'Criar uma conta';
        authForm.reset();
        console.log('Formulário de login exibido');
    }

    function showRegisterForm() {
        authTitle.textContent = 'Cadastrar';
        authSubmitBtn.textContent = 'Cadastrar';
        document.getElementById('email-group').style.display = 'block';
        document.getElementById('password-group').style.display = 'block';
        document.getElementById('name-group').style.display = 'block';
        document.getElementById('cpf-group').style.display = 'block';
        document.getElementById('phone-group').style.display = 'block';
        document.getElementById('cep-group').style.display = 'block';
        document.getElementById('street-group').style.display = 'block';
        document.getElementById('number-group').style.display = 'block';
        document.getElementById('complement-group').style.display = 'block';
        document.getElementById('city-group').style.display = 'block';
        document.getElementById('state-group').style.display = 'block';
        toggleFormBtn.textContent = 'Já tenho uma conta';
        authForm.reset();
        console.log('Formulário de cadastro exibido');
    }

    if (toggleFormBtn) {
        toggleFormBtn.addEventListener('click', () => {
            if (authTitle.textContent === 'Login') {
                showRegisterForm();
            } else {
                showLoginForm();
            }
        });
    } else {
        console.error('Botão #toggle-form não encontrado');
    }

    if (authSearchZipBtn) {
        authSearchZipBtn.addEventListener('click', async () => {
            const cep = document.getElementById('auth-cep').value.replace(/\D/g, '');
            if (cep.length === 8) {
                try {
                    console.log('Buscando CEP:', cep);
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = await response.json();
                    if (!data.erro) {
                        document.getElementById('auth-street').value = data.logradouro || '';
                        document.getElementById('auth-city').value = data.localidade || '';
                        document.getElementById('auth-state').value = data.uf || '';
                        document.getElementById('auth-complement').value = data.complemento || '';
                        console.log('CEP encontrado:', data);
                    } else {
                        alert('CEP não encontrado. Por favor, verifique o número digitado.');
                        console.error('CEP não encontrado');
                    }
                } catch (error) {
                    console.error('Erro ao buscar CEP:', error);
                    alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
                }
            } else {
                alert('Por favor, insira um CEP válido com 8 dígitos.');
                console.error('CEP inválido:', cep);
            }
        });
    } else {
        console.error('Botão #auth-search-zip-btn não encontrado');
    }

    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Formulário enviado:', {
                email: document.getElementById('auth-email').value,
                password: document.getElementById('auth-password').value,
                name: document.getElementById('auth-name').value,
                cpf: document.getElementById('auth-cpf').value,
                phone: document.getElementById('auth-phone').value,
                cep: document.getElementById('auth-cep').value,
                street: document.getElementById('auth-street').value,
                number: document.getElementById('auth-number').value,
                complement: document.getElementById('auth-complement').value,
                city: document.getElementById('auth-city').value,
                state: document.getElementById('auth-state').value,
            });
            closeModal(authModal);
        });
    } else {
        console.error('Formulário #auth-form não encontrado');
    }

    // Verificar animações (caso transitions.js não esteja funcionando)
    if (typeof initializeProductAnimations === 'undefined') {
        console.warn('Função initializeProductAnimations não encontrada, pulando animações');
    } else {
        initializeProductAnimations();
    }
});