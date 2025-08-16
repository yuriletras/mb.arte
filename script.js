// Dados de exemplo de produtos com opções de tamanho
const products = [
    {
        id: 1,
        name: "Ilustração em madeira pinus",
        image: "images/produtos/ilustracaoemmadeira1.png",
        description: "Esta ilustração é uma peça única e personalizada, feita com a sua foto favorita. Criada em madeira pinus de alta qualidade, a obra é complementada com uma frase especial e folhagens delicadas, tornando-a uma lembrança perfeita ou um presente inesquecível.",
        options: [
            { name: "20x20cm", price: 90.00 },
            { name: "25x25cm", price: 110.00 },
            { name: "30x30cm", price: 130.00 }
        ]
    },
    {
        id: 2,
        name: "Acrílico (redondo)",
        image: "images/produtos/acrilico1.png",
        description: "Placa de acrílico redonda, ideal para decorar qualquer ambiente com elegância. Acompanha base para ser utilizada em prateleiras, escrivaninhas, etc...",
        options: [
            { name: "15cm", price: 60.00 },
            { name: "20cm", price: 80.00 },
            { name: "25cm", price: 100.00 }
        ]
    },
    {
        id: 3,
        name: "Flâmula em algodão cru",
        image: "images/produtos/flamula1.png",
        description: "Flâmulas em tecido algodão cru personalizada com frases, nomes, elementos, desenhos...Para tamanhos diferenciados verificar orçamento. Acompanha madeira e cordão para pendurar.",
        options: [
            { name: "24x26cm", price: 40.00 },
            { name: "28x30cm", price: 55.00 }
        ]
    },
    {
        id: 4,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 5,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 6,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },{
        id: 7,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },{
        id: 8,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 9,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 10,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 11,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 12,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 13,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 14,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 15,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },{
        id: 16,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 17,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
    {
        id: 18,
        name: "Placa em MDF",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate). Para outros tamanhos consultar orçamento Obs.: Para incluir pintura acréscimo de R$10."
    },
];

let cart = [];

// Elementos do DOM
const productTimelineContainer = document.querySelector('.product-timeline');
const cartModal = document.getElementById('cart-modal');
const searchModal = document.getElementById('search-modal');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = cartModal.querySelector('.close-btn');
const searchBtn = document.getElementById('search-btn');
const closeSearchBtn = searchModal.querySelector('.close-btn');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCountSpan = document.getElementById('cart-count');
const cartTotalSpan = document.getElementById('cart-total');
const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

// NOVOS Elementos para modais e detalhes
const productDetailsModal = document.getElementById('product-details-modal');
const imageLightboxModal = document.getElementById('image-lightbox-modal');
const detailsImage = document.getElementById('details-image');
const detailsName = document.getElementById('details-name');
const detailsDescription = document.getElementById('details-description');
const detailsPrice = document.getElementById('details-price');
const detailsAddToCartBtn = document.getElementById('details-add-to-cart-btn');
const lightboxImage = document.getElementById('lightbox-image');
const closeDetailsBtn = productDetailsModal.querySelector('.close-btn');
const closeLightboxBtn = imageLightboxModal.querySelector('.close-btn');
const detailsOptionsSelect = document.getElementById('details-options-select'); // Novo seletor

// Elementos para os novos modais
const aboutMeModal = document.getElementById('about-me-modal');
const scheduleModal = document.getElementById('schedule-modal');
const aboutMeBtn = document.getElementById('about-me-btn');
const scheduleBtn = document.getElementById('schedule-btn');
const closeAboutMeBtn = aboutMeModal.querySelector('.close-btn');
const closeScheduleBtn = scheduleModal.querySelector('.close-btn');

// Elemento para o link "Produtos" no menu mobile
const productsLink = document.querySelector('.mobile-nav .nav-products-link');

// Funções para renderizar e atualizar a interface
function renderProducts() {
    productTimelineContainer.innerHTML = products.map(product => {
        // Verifica se o produto tem opções
        const hasOptions = product.options && product.options.length > 0;
        let priceHtml;
        let priceValue;

        if (hasOptions) {
            priceValue = product.options[0].price; // Preço inicial
            priceHtml = `
                <select class="product-options-select" data-id="${product.id}">
                    ${product.options.map((option, index) => `
                        <option value="${index}">${option.name} - R$ ${option.price.toFixed(2)}</option>
                    `).join('')}
                </select>
            `;
        } else {
            priceValue = product.price;
            priceHtml = `<p class="price">R$ ${priceValue.toFixed(2)}</p>`;
        }

        return `
            <div class="product-card-timeline">
                <img src="${product.image}" alt="${product.name}" class="product-image-thumbnail" data-id="${product.id}">
                <h3>${product.name}</h3>
                <div class="product-details-actions">
                    <p class="price" data-initial-price="${priceValue.toFixed(2)}">${priceHtml}</p>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" data-id="${product.id}">Adicionar</button>
                        <button class="details-btn" data-id="${product.id}">Detalhes</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Chama a função de animação após a renderização
    if (typeof initializeProductAnimations !== 'undefined') {
        initializeProductAnimations();
    }
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="item-price">R$ ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="decrease-qty-btn" data-id="${item.id}" data-option-name="${item.optionName}">-</button>
                    <input type="number" value="${item.quantity}" min="1" readonly>
                    <button class="increase-qty-btn" data-id="${item.id}" data-option-name="${item.optionName}">+</button>
                </div>
                <button class="remove-item-btn" data-id="${item.id}" data-option-name="${item.optionName}">Remover</button>
            </div>
        </div>
    `).join('');
}


function updateCartInfo() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    cartCountSpan.textContent = totalItems;
    cartTotalSpan.textContent = totalPrice.toFixed(2);
}

// Funções de manipulação do carrinho
function addToCart(productId, optionIndex = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let itemToAdd;
    if (optionIndex !== null && product.options) {
        const option = product.options[optionIndex];
        itemToAdd = {
            id: product.id,
            name: `${product.name} - ${option.name}`,
            price: option.price,
            image: product.image,
            quantity: 1,
            optionName: option.name // Para identificar a opção no carrinho
        };
    } else {
        itemToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        };
    }

    // Procura o item no carrinho
    const cartItem = cart.find(item => item.id === itemToAdd.id && item.optionName === itemToAdd.optionName);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push(itemToAdd);
    }

    renderCartItems();
    updateCartInfo();
}

function removeFromCart(productId, optionName) {
    cart = cart.filter(item => !(item.id === productId && item.optionName === optionName));
    renderCartItems();
    updateCartInfo();
}

function updateQuantity(productId, type, optionName) {
    const cartItem = cart.find(item => item.id === productId && item.optionName === optionName);
    if (!cartItem) return;

    if (type === 'increase') {
        cartItem.quantity++;
    } else if (type === 'decrease' && cartItem.quantity > 1) {
        cartItem.quantity--;
    } else if (type === 'decrease' && cartItem.quantity === 1) {
        removeFromCart(productId, optionName);
        return;
    }

    renderCartItems();
    updateCartInfo();
}

// Funções para abrir os novos modais
function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    detailsImage.src = product.image;
    detailsImage.alt = product.name;
    detailsName.textContent = product.name;
    detailsDescription.textContent = product.description;
    
    // Renderiza as opções no modal
    if (product.options) {
        detailsOptionsSelect.innerHTML = product.options.map((option, index) => `
            <option value="${index}">${option.name}</option>
        `).join('');
        detailsPrice.textContent = `R$ ${product.options[0].price.toFixed(2)}`;
        detailsOptionsSelect.style.display = 'block';
    } else {
        detailsPrice.textContent = `R$ ${product.price.toFixed(2)}`;
        detailsOptionsSelect.style.display = 'none';
    }
    detailsAddToCartBtn.dataset.id = product.id;

    productDetailsModal.style.display = 'flex';
}

function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    imageLightboxModal.style.display = 'flex';
}

function openModal(modal) {
    closeAllModals();
    modal.style.display = 'flex';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

function closeAllModals() {
    const modals = [cartModal, searchModal, productDetailsModal, imageLightboxModal, aboutMeModal, scheduleModal];
    modals.forEach(modal => modal.style.display = 'none');
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartInfo();

    // Adiciona evento de clique para o link "Produtos" no menu mobile
    if (productsLink) {
        productsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = productsLink.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
});

// Gerencia cliques na seção de produtos
productTimelineContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(target.dataset.id);
        const productCard = target.closest('.product-card-timeline');
        const selectElement = productCard.querySelector('.product-options-select');
        const optionIndex = selectElement ? parseInt(selectElement.value) : null;
        addToCart(productId, optionIndex);
    } else if (target.classList.contains('details-btn')) {
        const productId = parseInt(target.dataset.id);
        openProductDetails(productId);
    } else if (target.classList.contains('product-image-thumbnail')) {
        const imageSrc = target.src;
        openLightbox(imageSrc);
    }
});

// Atualiza o preço exibido quando a opção é alterada
productTimelineContainer.addEventListener('change', (e) => {
    const target = e.target;
    if (target.classList.contains('product-options-select')) {
        const productId = parseInt(target.dataset.id);
        const product = products.find(p => p.id === productId);
        const selectedOption = product.options[parseInt(target.value)];
        const priceElement = target.closest('.product-details-actions').querySelector('.price');
        priceElement.textContent = `R$ ${selectedOption.price.toFixed(2)}`;
    }
});

// Gerencia cliques no carrinho (aumento, diminuição, remoção)
cartItemsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('remove-item-btn')) {
        const productId = parseInt(target.dataset.id);
        const optionName = target.dataset.optionName;
        removeFromCart(productId, optionName);
    } else if (target.classList.contains('increase-qty-btn')) {
        const productId = parseInt(target.dataset.id);
        const optionName = target.dataset.optionName;
        updateQuantity(productId, 'increase', optionName);
    } else if (target.classList.contains('decrease-qty-btn')) {
        const productId = parseInt(target.dataset.id);
        const optionName = target.dataset.optionName;
        updateQuantity(productId, 'decrease', optionName);
    }
});

// Abertura e fechamento dos modais e menu mobile
openCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderCartItems();
    openModal(cartModal);
});

closeCartBtn.addEventListener('click', () => {
    closeModal(cartModal);
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(searchModal);
});

closeSearchBtn.addEventListener('click', () => {
    closeModal(searchModal);
});

// Fecha modais de detalhes e lightbox
closeDetailsBtn.addEventListener('click', () => {
    closeModal(productDetailsModal);
});

closeLightboxBtn.addEventListener('click', () => {
    closeModal(imageLightboxModal);
});

// Novos Event Listeners para os botões da seção hero e seus respectivos modais
aboutMeBtn.addEventListener('click', () => {
    openModal(aboutMeModal);
});

closeAboutMeBtn.addEventListener('click', () => {
    closeModal(aboutMeModal);
});

scheduleBtn.addEventListener('click', () => {
    openModal(scheduleModal);
});

closeScheduleBtn.addEventListener('click', () => {
    closeModal(scheduleModal);
});


// Adiciona ao carrinho a partir do modal de detalhes
detailsAddToCartBtn.addEventListener('click', (e) => {
    const productId = parseInt(e.target.dataset.id);
    const selectedIndex = detailsOptionsSelect.value ? parseInt(detailsOptionsSelect.value) : null;
    addToCart(productId, selectedIndex);
    closeModal(productDetailsModal);
});

// Atualiza o preço no modal de detalhes quando a opção é alterada
if (detailsOptionsSelect) {
    detailsOptionsSelect.addEventListener('change', (e) => {
        const productId = parseInt(detailsAddToCartBtn.dataset.id);
        const product = products.find(p => p.id === productId);
        const selectedOption = product.options[parseInt(e.target.value)];
        detailsPrice.textContent = `R$ ${selectedOption.price.toFixed(2)}`;
    });
}


// Lógica para o menu mobile (refatorada)
// Esta lógica agora funciona para mobile e desktop, como o botão de hambúrguer está sempre visível
hamburgerMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

// Fecha o menu lateral quando o usuário clica em qualquer lugar fora dele
window.addEventListener('click', (e) => {
    const isClickInsideMobileNav = mobileNav.contains(e.target);
    const isClickOnHamburger = hamburgerMenuBtn.contains(e.target);

    // Se o menu estiver aberto e o clique não for dentro do menu ou no botão, feche-o
    if (!isClickInsideMobileNav && !isClickOnHamburger && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
    }
});

// Fecha o menu lateral ao clicar em um link
mobileNav.addEventListener('click', (e) => {
    // A condição !e.target.classList.contains('nav-products-link') evita que o submenu feche o menu principal
    if (e.target.tagName === 'A' && !e.target.classList.contains('nav-products-link')) {
        mobileNav.classList.remove('open');
    }
});