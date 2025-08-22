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
    { id: 7, name: "Chaveiro", price: 7.00, image: "images/produtos/chaveiro1.png", description: "ersonalizado com nomes eelementos , frases e etc. Argola na cor prata / dourada." },
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

// Seleciona todos os botões de fechar e os modais
const closeBtns = document.querySelectorAll('.modal .close-btn');
const allModals = document.querySelectorAll('.modal');

// --- FUNÇÕES PARA MODAIS (CORRIGIDAS) ---
// Note que as funções não são chamadas ao carregar a página
function openModal(modal) {
    closeAllModals();
    if (modal) {
        modal.classList.add('open');
        document.body.classList.add('no-scroll');
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
}

function closeAllModals() {
    allModals.forEach(modal => modal.classList.remove('open'));
    document.body.classList.remove('no-scroll');
}

// --- FUNÇÕES DE NAVEGAÇÃO E OUTRAS LÓGICAS ---
function setupMobileMenu() {
    if (hamburgerMenuBtn && mobileNav) {
        hamburgerMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });
    }

    window.addEventListener('click', (e) => {
        const isClickInsideMobileNav = mobileNav.contains(e.target);
        const isClickOnHamburger = hamburgerMenuBtn.contains(e.target);
        if (!isClickInsideMobileNav && !isClickOnHamburger && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    });

    mobileNav.addEventListener('click', (e) => {
        const clickedElement = e.target;
        if (clickedElement.tagName === 'A' && !clickedElement.classList.contains('nav-products-link') && !clickedElement.closest('.submenu')) {
            mobileNav.classList.remove('open');
        }
    });

    const navProductsLink = document.querySelector('.nav-products-link');
    const submenu = navProductsLink ? navProductsLink.nextElementSibling : null;

    if (navProductsLink && submenu) {
        navProductsLink.addEventListener('click', (e) => {
            e.preventDefault();
            navProductsLink.classList.toggle('active');
            submenu.classList.toggle('open');
        });
    }
}

function renderProducts() {
    // AQUI: O código foi alterado para remover o preço e o botão "Adicionar".
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

    if (typeof initializeProductAnimations !== 'undefined') {
        initializeProductAnimations();
    }
}

// --- EVENT LISTENERS PRINCIPAIS ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupMobileMenu();

    // Event Listeners para abrir os modais
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(searchModal);
        });
    }

    if (aboutMeBtn) {
        aboutMeBtn.addEventListener('click', () => {
            openModal(aboutMeModal);
        });
    }

    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            openModal(scheduleModal);
        });
    }

    // Event Listeners para fechar os modais usando o botão "X"
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    // Event Listener para fechar o modal clicando no fundo escuro
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') && e.target.classList.contains('open')) {
            closeModal(e.target);
        }
    });

    // LÓGICA DE REDIRECIONAMENTO PARA A PÁGINA DA LOJA
    productTimelineContainer.addEventListener('click', (e) => {
        const target = e.target;
        const productId = target.dataset.id;
        if (!productId) return;

        if (target.classList.contains('add-to-cart-btn')) {
            window.location.href = `store.html?action=add_to_cart&id=${productId}`;
        } else if (target.classList.contains('details-btn')) {
            window.location.href = `store.html?action=details&id=${productId}`;
        }
    });
});