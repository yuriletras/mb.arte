//
//  transitions.js
//  Usa Intersection Observer para criar animações reativas à rolagem,
//  sem alterar o layout da página.
//

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
    const productCards = document.querySelectorAll('.product-timeline .product-card-timeline');
    if (productCards.length > 0) {
        // Opções para a animação de produtos (pode ser diferente)
        const productObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Dispara quando 20% do elemento está visível
        };

        const productCardsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Opcional: Desobserva o elemento após a primeira animação
                    // observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove('animated');
                }
            });
        }, productObserverOptions);

        productCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            productCardsObserver.observe(card);
        });
    }
}

// Roda tudo quando a página carrega.
document.addEventListener('DOMContentLoaded', initializeAnimations);