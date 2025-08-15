// script.js

// Dados de exemplo de produtos
const products = [
    {
        id: 1,
        name: "Produto A",
        price: 79.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+A"
    },
    {
        id: 2,
        name: "Produto B",
        price: 99.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+B"
    },
    {
        id: 3,
        name: "Produto C",
        price: 129.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+C"
    },
    {
        id: 4,
        name: "Produto D",
        price: 59.90,
        image: "https://via.placeholder.com/250x250.png?text=Produto+D"
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

// Novo elemento para o submenu
const productsLink = document.querySelector('.mobile-nav .nav-products-link');

// NOVO: Elementos para o menu desktop
const desktopMenu = document.querySelector('.desktop-menu');

// Funções para renderizar e atualizar a interface
function renderProducts() {
    productTimelineContainer.innerHTML = products.map(product => `
        <div class="product-card-timeline">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
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

productTimelineContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
});

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

// NOVO: Lógica para o menu desktop
if (hamburgerMenuBtn && desktopMenu) {
    hamburgerMenuBtn.addEventListener('click', function() {
        desktopMenu.classList.toggle('menu-aberto');
    });

    // Opcional: Adicionar um evento para fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = desktopMenu.contains(event.target);
        const isClickOnButton = hamburgerMenuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton && desktopMenu.classList.contains('menu-aberto')) {
            desktopMenu.classList.remove('menu-aberto');
        }
    });
}

// Lógica para o menu mobile
if (hamburgerMenuBtn && mobileNav) {
    hamburgerMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    // Fechar menu ao clicar em um link ou fora
    window.addEventListener('click', (e) => {
        // Verifica se o clique foi fora do menu e do botão
        const isClickInsideMobileNav = mobileNav.contains(e.target);
        const isClickOnHamburger = hamburgerMenuBtn.contains(e.target);

        if (!isClickInsideMobileNav && !isClickOnHamburger && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
        }
    });

    mobileNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && !e.target.classList.contains('nav-products-link')) {
            mobileNav.classList.remove('open');
        }
    });
}