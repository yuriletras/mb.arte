// transitions-store.js
// Usa Intersection Observer para criar animações reativas à rolagem no store.html,
// sem alterar o layout da página.

// Funções para animação
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.remove('animated');
        }
    });
}

function createObserver(options, elements) {
    const observer = new IntersectionObserver(handleIntersection, options);
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Inicializa as animações de entrada
function initializeAnimations() {
    const defaultObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    createObserver(defaultObserverOptions, elementsToAnimate);

    // Inicializa a animação dos cards de produto
    const productCards = document.querySelectorAll('.product-grid .product-card');
    if (productCards.length > 0) {
        // Opções para a animação de produtos
        const productObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Dispara quando 20% do elemento está visível
        };

        const productCardsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                } else {
                    entry.target.classList.remove('animated');
                }
            });
        }, productObserverOptions);

        productCards.forEach((card, index) => {
            // Remove estilos inline que conflitem com CSS
            card.style.removeProperty('opacity');
            card.style.removeProperty('transform');
            card.style.transitionDelay = `${index * 0.1}s`; // Mantém o atraso para efeito em cascata
            productCardsObserver.observe(card);
        });
    }
}

// Roda tudo quando a página carrega
document.addEventListener('DOMContentLoaded', initializeAnimations);