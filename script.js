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
    { id: 4, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+4", description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10." },
    { id: 5, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+5", description: "Placa em MDF..." },
    { id: 6, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+6", description: "Placa em MDF..." },
    { id: 7, name: "Placa em MDF", price: 59.90, image: "https://via.placeholder.com/250x250.png?text=Placa+MDF+7", description: "Placa em MDF..." },
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
const closeSearchBtn = searchModal ? searchModal.querySelector('.close-btn') : null;
const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const aboutMeModal = document.getElementById('about-me-modal');
const scheduleModal = document.getElementById('schedule-modal');
const aboutMeBtn = document.getElementById('about-me-btn');
const scheduleBtn = document.getElementById('schedule-btn');
const closeAboutMeBtn = aboutMeModal ? aboutMeModal.querySelector('.close-btn') : null;
const closeScheduleBtn = scheduleModal ? scheduleModal.querySelector('.close-btn') : null;

// FUNÇÕES PARA MODAIS (Mantidas)
function openModal(modal) {
    // Fecha todos os outros modais antes de abrir um novo
    closeAllModals();
    modal.style.display = 'flex';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

function closeAllModals() {
    const modals = [searchModal, aboutMeModal, scheduleModal];
    modals.forEach(modal => modal.style.display = 'none');
}

// FUNÇÃO DE RENDERIZAÇÃO DE PRODUTOS
// CORRIGIDO: Removido o botão de Opções
function renderProducts() {
    productTimelineContainer.innerHTML = products.map(product => {
        let priceHtml = `R$ ${product.price.toFixed(2)}`;
        
        return `
            <div class="product-card-timeline fade-in-up" data-id="${product.id}" data-animate>
                <img src="${product.image}" alt="${product.name}" class="product-image-thumbnail">
                <h3>${product.name}</h3>
                <div class="product-details-actions">
                    <p class="price">${priceHtml.replace('.', ',')}</p>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" data-id="${product.id}">Adicionar</button>
                        <button class="details-btn" data-id="${product.id}">Detalhes</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (typeof initializeProductAnimations !== 'undefined') {
        initializeProductAnimations();
    }
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(searchModal);
        });
    }

    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', () => {
            closeModal(searchModal);
        });
    }

    if (aboutMeBtn) {
        aboutMeBtn.addEventListener('click', () => {
            openModal(aboutMeModal);
        });
    }

    if (closeAboutMeBtn) {
        closeAboutMeBtn.addEventListener('click', () => {
            closeModal(aboutMeModal);
        });
    }

    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            openModal(scheduleModal);
        });
    }

    if (closeScheduleBtn) {
        closeScheduleBtn.addEventListener('click', () => {
            closeModal(scheduleModal);
        });
    }

    if (hamburgerMenuBtn) {
        hamburgerMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }

    window.addEventListener('click', (e) => {
        const isClickInsideMobileNav = mobileNav.contains(e.target);
        const isClickOnHamburger = hamburgerMenuBtn.contains(e.target);
        if (!isClickInsideMobileNav && !isClickOnHamburger && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
        }
    });

    mobileNav.addEventListener('click', (e) => {
        // CORRIGIDO: Adicionado um novo 'if' para o link de produtos
        const clickedElement = e.target;
        // Evita fechar o menu principal se o clique for no link 'Produtos' ou dentro do sub-menu
        if (clickedElement.tagName === 'A' && !clickedElement.classList.contains('nav-products-link') && !clickedElement.closest('.submenu')) {
            mobileNav.classList.remove('open');
        }
    });
    
    // --- LÓGICA ADICIONADA PARA O MENU DE PRODUTOS ---
    const navProductsLink = document.querySelector('.nav-products-link');
    const submenu = document.querySelector('.submenu');

    if (navProductsLink && submenu) {
        navProductsLink.addEventListener('click', (e) => {
            e.preventDefault();
            navProductsLink.classList.toggle('active');
            submenu.classList.toggle('open');
        });
    }
    // --- FIM DA LÓGICA ADICIONADA ---

    // LÓGICA DE REDIRECIONAMENTO PARA A PÁGINA DA LOJA
    productTimelineContainer.addEventListener('click', (e) => {
        const target = e.target;
        const productId = target.dataset.id;
        if (!productId) return;

        if (target.classList.contains('add-to-cart-btn')) {
            // Redireciona para store.html com a ação de adicionar e o ID do produto
            window.location.href = `store.html?action=add_to_cart&id=${productId}`;
        } else if (target.classList.contains('details-btn')) {
            // Redireciona para store.html com a ação de detalhes e o ID do produto
            window.location.href = `store.html?action=details&id=${productId}`;
        }
    });
});