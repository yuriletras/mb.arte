document.addEventListener('DOMContentLoaded', () => {
    // Seus dados de produto. RESTAURADOS para a lista completa
    const productData = [
        {
            id: '1',
            name: "Ilustração em madeira pinus",
            type: 'ilustrados',
            price: 90.00,
            originalPrice: 90.00,
            images: ["images/produtos/ilustracaoemmadeira1.png", "images/produtos/ilustracaoemmadeira1.png"],
            description: "Esta ilustração é uma peça única e personalizada, feita com a sua foto favorita. Criada em madeira pinus de alta qualidade, a obra é complementada com uma frase especial e folhagens delicadas, tornando-a uma lembrança perfeita ou um presente inesquecível.",
            customization: 'O desenho traçado (silhueta) é feito de acordo com a foto enviada, e uma frase. Para outras personalizações, entre em contato via WhatsApp.',
            attention: 'Não estão inclusos: vidro, molduras de plástico ou com aplique em outros materiais. A frase será ilustrada como enviada, atente-se à gramática.',
            variants: {
                title: 'Tamanho',
                options: [
                    { size: "20x20cm", price: 90.00 },
                    { size: "25x25cm", price: 110.00 },
                    { size: "30x30cm", price: 130.00 }
                ]
            }
        },
        {
            id: '2',
            name: "Acrílico (redondo)",
            type: 'ilustrados',
            price: 60.00,
            originalPrice: 60.00,
            images: ["images/produtos/acrilico1.png", "images/produtos/acrilico1.png"],
            description: "Placa de acrílico redonda, ideal para decorar qualquer ambiente com elegância. Acompanha base para ser utilizada em prateleiras, escrivaninhas, etc...",
            customization: 'A arte em acrílico é feita com a ilustração da silhueta de uma foto enviada. As cores das tintas e das frases são pré-definidas. Entre em contato via WhatsApp para finalizar sua compra.',
            attention: 'Qualquer alteração no padrão descrito acima implicará em um custo adicional.',
            variants: {
                title: 'Tamanho',
                options: [
                    { size: "15cm", price: 60.00 },
                    { size: "20cm", price: 80.00 },
                    { size: "25cm", price: 100.00 }
                ]
            }
        },
        {
            id: '3',
            name: "Flâmula em algodão cru",
            type: 'placas-flamulas',
            price: 40.00,
            originalPrice: 40.00,
            images: ["images/produtos/flamula1.png", "images/produtos/flamula1.png"],
            description: "Flâmulas em tecido algodão cru personalizada com frases, nomes, elementos, desenhos...Para tamanhos diferenciados verificar orçamento. Acompanha madeira e cordão para pendurar.",
            customization: 'Frase personalizada, com a opção de incluir algum detalhe. As cores das frases são pré-definidas. Entre em contato via WhatsApp para finalizar sua compra.',
            attention: 'Qualquer alteração no padrão descrito acima implicará em um custo adicional.',
            variants: {
                title: 'Tamanho',
                options: [
                    { size: "24x26cm", price: 40.00 },
                    { size: "28x30cm", price: 55.00 }
                ]
            }
        },
        { id: '4', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+4"], description: "Placa em MDF. Pode ser pintada na cor do fundo a escolha do cliente ou no efeito madeira (Disponíveis as cores castanho e chocolate).", customization: 'Para incluir pintura, há um acréscimo de R$10. Para outros tamanhos, consulte o orçamento.', attention: 'Neste caso, não há uma lista de opções de tamanho pré-definidas. Você deve tratar isso como um produto de preço fixo.', variants: null },
        { id: '5', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+5"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '6', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+6"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '7', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+7"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '8', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+8"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '9', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+9"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '10', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+10"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '11', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+11"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '12', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+12"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '13', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+13"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '14', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+14"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '15', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+15"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '16', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+16"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '17', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+17"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null },
        { id: '18', name: "Placa em MDF", type: 'placas-flamulas', price: 59.90, originalPrice: 59.90, images: ["https://via.placeholder.com/250x250.png?text=Placa+MDF+18"], description: "Placa em MDF...", customization: "...", attention: "...", variants: null }
    ];

    // Elementos do DOM
    const productGrid = document.getElementById('product-list-view');
    const productDetailsView = document.getElementById('product-details-view');
    const backBtn = document.querySelector('.back-to-list-btn');
    const filtersSidebar = document.querySelector('.filters-sidebar');
    const priceRangeInput = document.getElementById('price-range');
    const minPriceSpan = document.getElementById('min-price-value');
    const maxPriceSpan = document.getElementById('max-price-value');
    const applyFiltersBtn = document.querySelector('.apply-filters-btn');
    const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    
    // Variáveis para o carrinho de compras
    let cart = [];
    const cartCountSpan = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = cartModal.querySelector('.cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const openCartBtn = document.getElementById('open-cart-btn');
    const cartModalCloseBtn = cartModal.querySelector('.close-btn');
    
    // Variáveis dos outros modais
    const searchModal = document.getElementById('search-modal');
    const searchBtn = document.getElementById('search-btn');
    const searchModalCloseBtn = searchModal.querySelector('.close-btn');

    // Variáveis do menu hamburguer
    const hamburgerBtn = document.getElementById('hamburger-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navProductsLink = document.querySelector('.nav-products-link');

    // Funções de formatação e carrinho
    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    };

    const updateCartCount = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountSpan) {
            cartCountSpan.textContent = totalItems;
        }
    };

    const renderCartModal = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio.</p>';
        } else {
            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                const variantText = item.variant ? `<br><small>Tamanho: ${item.variant.size}</small>` : '';
                const itemPrice = item.variant ? item.variant.price : item.product.price;
                total += itemPrice * item.quantity;
                
                itemDiv.innerHTML = `
                    <img src="${item.product.images[0]}" alt="${item.product.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <p class="cart-item-name">${item.product.name}${variantText}</p>
                        <p class="cart-item-price">R$ ${formatPrice(itemPrice)}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <span class="quantity-label">Qtd:</span> ${item.quantity}
                    </div>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });
        }
        cartTotalSpan.textContent = formatPrice(total);
    };

    const addToCart = (product, quantity, variant = null) => {
        const existingItem = cart.find(item => item.product.id === product.id && item.variant?.size === variant?.size);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                product,
                quantity,
                variant
            });
        }
        updateCartCount();
        renderCartModal();
        alert(`${quantity} item(s) de ${product.name} adicionado ao carrinho!`);
    };

    // Funções de renderização
    const renderProductCards = (products) => {
        if (!productGrid) return;
        productGrid.style.display = 'grid';
        if (filtersSidebar) filtersSidebar.style.display = 'block';
        if (productDetailsView) productDetailsView.style.display = 'none';

        productGrid.innerHTML = '';
        if (products.length === 0) {
            productGrid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Nenhum produto encontrado com os filtros selecionados.</p>';
            return;
        }
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.productId = product.id;
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>R$ ${formatPrice(product.price)}</p>
                    <button class="details-btn">Detalhes</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    };

    const renderProductDetails = (product) => {
        if (!productDetailsView) return;
        if (productGrid) productGrid.style.display = 'none';
        if (filtersSidebar) filtersSidebar.style.display = 'none';
        productDetailsView.style.display = 'block';
        window.scrollTo(0, 0);

        document.getElementById('details-main-image').src = product.images[0];
        document.getElementById('details-main-image').alt = product.name;
        document.getElementById('details-name').textContent = product.name;
        document.getElementById('details-price').textContent = `R$ ${formatPrice(product.price)}`;
        document.getElementById('details-description').textContent = product.description;
        document.getElementById('details-customization').textContent = product.customization;
        document.getElementById('details-attention').textContent = product.attention;
        
        const thumbnailGallery = document.getElementById('thumbnail-gallery');
        thumbnailGallery.innerHTML = '';
        if (product.images && product.images.length > 1) {
            product.images.forEach((img, index) => {
                const thumb = document.createElement('img');
                thumb.src = img;
                thumb.alt = `Miniatura ${index + 1} de ${product.name}`;
                thumb.className = index === 0 ? 'active' : '';
                thumb.addEventListener('click', () => {
                    document.getElementById('details-main-image').src = img;
                    document.querySelectorAll('.thumbnail-gallery img').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
                thumbnailGallery.appendChild(thumb);
            });
            thumbnailGallery.style.display = 'flex';
        } else {
            thumbnailGallery.style.display = 'none';
        }

        const variantsSection = document.getElementById('details-variants');
        const variantTitle = document.getElementById('details-variant-title');
        variantsSection.innerHTML = '';
        let selectedVariant = null;

        if (product.variants && product.variants.options) {
            variantTitle.textContent = product.variants.title;
            variantTitle.style.display = 'block';
            product.variants.options.forEach((variant, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = variant.size;
                btn.dataset.price = variant.price;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    document.getElementById('details-price').textContent = `R$ ${formatPrice(variant.price)}`;
                    selectedVariant = variant;
                });
                variantsSection.appendChild(btn);
            });
            variantsSection.style.display = 'flex';
            const firstOptionBtn = variantsSection.querySelector('.option-btn');
            if (firstOptionBtn) {
                firstOptionBtn.click();
            }
            selectedVariant = product.variants.options[0];
        } else {
            if (variantTitle) variantTitle.style.display = 'none';
            if (variantsSection) variantsSection.style.display = 'none';
            selectedVariant = null;
        }

        const addToCartBtn = document.querySelector('.add-to-cart-btn-details');
        if (addToCartBtn) {
            const newBtn = addToCartBtn.cloneNode(true);
            addToCartBtn.parentNode.replaceChild(newBtn, addToCartBtn);
            newBtn.addEventListener('click', () => {
                const quantity = parseInt(document.querySelector('.quantity-input').value, 10);
                addToCart(product, quantity, selectedVariant);
            });
        }
    };

    // Lógica de filtragem e exibição
    const filterProducts = () => {
        const selectedTypes = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const maxPrice = parseFloat(priceRangeInput.value);

        const filtered = productData.filter(product => {
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
            const priceMatch = product.price <= maxPrice;
            return typeMatch && priceMatch;
        });

        renderProductCards(filtered);
    };

    // --- NOVA LÓGICA DE INICIALIZAÇÃO DA PÁGINA ---
    function handlePageLoad() {
        const urlParams = new URLSearchParams(window.location.search);
        const productIdFromUrl = urlParams.get('id');
        const actionFromUrl = urlParams.get('action');

        if (productIdFromUrl) {
            const product = productData.find(p => p.id === productIdFromUrl);
            if (product) {
                renderProductDetails(product);
                if (actionFromUrl === 'add_to_cart') {
                    const quantity = 1;
                    const variant = product.variants && product.variants.options ? product.variants.options[0] : null;
                    addToCart(product, quantity, variant);
                }
            } else {
                renderProductCards(productData);
            }
        } else {
            renderProductCards(productData);
            const prices = productData.map(p => p.price);
            if (prices.length > 0) {
                priceRangeInput.min = Math.min(...prices);
                priceRangeInput.max = Math.max(...prices);
                priceRangeInput.value = Math.max(...prices);
                minPriceSpan.textContent = formatPrice(priceRangeInput.min);
                maxPriceSpan.textContent = formatPrice(priceRangeInput.max);
            }
        }
    }

    // Event listeners
    productGrid.addEventListener('click', (e) => {
        const detailsBtn = e.target.closest('.details-btn');
        if (detailsBtn) {
            const card = e.target.closest('.product-card');
            const productId = card.dataset.productId;
            const product = productData.find(p => p.id === productId);
            if (product) {
                renderProductDetails(product);
            }
        }
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            history.pushState(null, '', 'store.html'); // Limpa a URL
            handlePageLoad(); // Recarrega a página para exibir a lista completa
        });
    }

    if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', filterProducts);
    if (priceRangeInput) {
        priceRangeInput.addEventListener('input', () => {
            maxPriceSpan.textContent = formatPrice(parseFloat(priceRangeInput.value));
        });
    }
    
    // Lógica de quantidade
    if (document.querySelector('.quantity-minus')) {
        document.querySelector('.quantity-minus').addEventListener('click', () => {
            const input = document.querySelector('.quantity-input');
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
    }
    
    if (document.querySelector('.quantity-plus')) {
        document.querySelector('.quantity-plus').addEventListener('click', () => {
            const input = document.querySelector('.quantity-input');
            input.value = parseInt(input.value) + 1;
        });
    }

    if (openCartBtn) openCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderCartModal();
        cartModal.style.display = 'block';
    });
    if (cartModalCloseBtn) cartModalCloseBtn.addEventListener('click', () => cartModal.style.display = 'none');
    
    if (searchBtn) searchBtn.addEventListener('click', () => searchModal.style.display = 'block');
    if (searchModalCloseBtn) searchModalCloseBtn.addEventListener('click', () => searchModal.style.display = 'none');

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) cartModal.style.display = 'none';
        if (event.target == searchModal) searchModal.style.display = 'none';
    });

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => mobileNav.classList.toggle('active'));
    }

    if (navProductsLink) {
        navProductsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = document.querySelector('.submenu');
            submenu.classList.toggle('show');
        });
    }

    // Chama a função de inicialização quando a página carregar
    handlePageLoad();
});