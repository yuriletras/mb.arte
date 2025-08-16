// script.js

// Dados de exemplo de produtos
const products = [
    {
        id: 1,
        name: "Ilustração em madeira pinus a partir da foto + frase + folhagens.",
        price: 90.00,
        image: "images/produtos/ilustracaoemmadeira1.png",
        description: "Esta ilustração é uma peça única e personalizada, feita com a sua foto favorita. Criada em madeira pinus de alta qualidade, a obra é complementada com uma frase especial e folhagens delicadas, tornando-a uma lembrança perfeita ou um presente inesquecível."
    },
    {
        id: 2,
        name: "Produto B",
        price: 99.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+B",
        description: "Detalhes completos do Produto B. Uma peça artesanal que combina estilo e funcionalidade para qualquer ambiente."
    },
    {
        id: 3,
        name: "Produto C",
        price: 129.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+C",
        description: "Uma peça elegante e charmosa, perfeita para decorar a sua casa ou presentear alguém especial. Feita com materiais sustentáveis, garantindo beleza e durabilidade."
    },
    {
        id: 4,
        name: "Produto D",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D",
        description: "Um item versátil e cheio de personalidade. Seu design moderno se adapta a qualquer estilo, trazendo um toque de arte e sofisticação."
    }
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

// Elemento para o link "Produtos" no menu mobile
const productsLink = document.querySelector('.mobile-nav .nav-products-link');

// Funções para renderizar e atualizar a interface
function renderProducts() {
    productTimelineContainer.innerHTML = products.map(product => `
        <div class="product-card-timeline">
            <img src="${product.image}" alt="${product.name}" class="product-image-thumbnail" data-id="${product.id}">
            <h3>${product.name}</h3>
            <div class="product-details-actions">
                <p class="price">R$ ${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">Adicionar</button>
                    <button class="details-btn" data-id="${product.id}">Detalhes</button>
                </div>
            </div>
        </div>
    `).join('');
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
                    <button class="decrease-qty-btn" data-id="${item.id}">-</button>
                    <input type="number" value="${item.quantity}" min="1" readonly>
                    <button class="increase-qty-btn" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">Remover</button>
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
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCartItems();
    updateCartInfo();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCartItems();
    updateCartInfo();
}

function updateQuantity(productId, type) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    if (type === 'increase') {
        cartItem.quantity++;
    } else if (type === 'decrease' && cartItem.quantity > 1) {
        cartItem.quantity--;
    } else if (type === 'decrease' && cartItem.quantity === 1) {
        removeFromCart(productId);
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
    detailsPrice.textContent = `R$ ${product.price.toFixed(2)}`;
    detailsAddToCartBtn.dataset.id = product.id;

    productDetailsModal.style.display = 'flex';
}

function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    imageLightboxModal.style.display = 'flex';
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
        addToCart(productId);
    } else if (target.classList.contains('details-btn')) {
        const productId = parseInt(target.dataset.id);
        openProductDetails(productId);
    } else if (target.classList.contains('product-image-thumbnail')) {
        const imageSrc = target.src;
        openLightbox(imageSrc);
    }
});

// Gerencia cliques no carrinho (aumento, diminuição, remoção)
cartItemsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('remove-item-btn')) {
        const productId = parseInt(target.dataset.id);
        removeFromCart(productId);
    } else if (target.classList.contains('increase-qty-btn')) {
        const productId = parseInt(target.dataset.id);
        updateQuantity(productId, 'increase');
    } else if (target.classList.contains('decrease-qty-btn')) {
        const productId = parseInt(target.dataset.id);
        updateQuantity(productId, 'decrease');
    }
});

// Abertura e fechamento dos modais e menu mobile
openCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderCartItems();
    cartModal.style.display = 'flex';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchModal.style.display = 'flex';
});

closeSearchBtn.addEventListener('click', () => {
    searchModal.style.display = 'none';
});

// Fecha modais de detalhes e lightbox
closeDetailsBtn.addEventListener('click', () => {
    productDetailsModal.style.display = 'none';
});

closeLightboxBtn.addEventListener('click', () => {
    imageLightboxModal.style.display = 'none';
});

// Adiciona ao carrinho a partir do modal de detalhes
detailsAddToCartBtn.addEventListener('click', (e) => {
    const productId = parseInt(e.target.dataset.id);
    addToCart(productId);
    productDetailsModal.style.display = 'none';
});


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