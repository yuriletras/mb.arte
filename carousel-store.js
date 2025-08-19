// carousel-store.js
// Gerencia o carrossel interativo com frases motivacionais e produtos no store.html

document.addEventListener('DOMContentLoaded', () => {
    // Elementos do carrossel
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    const slideInterval = 5000; // 5 segundos por slide

    // Função para avançar ao próximo slide
    function goToSlide(index) {
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }

    // Função para iniciar o carrossel automático
    function startCarousel() {
        return setInterval(() => {
            goToSlide(currentSlide + 1);
        }, slideInterval);
    }

    // Iniciar o carrossel
    let carouselInterval = startCarousel();

    // Pausar o carrossel ao passar o mouse
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = startCarousel();
    });

    // Lógica para os botões "Compre agora"
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productSlide = button.closest('.product-slide');
            const productName = productSlide.querySelector('h3').textContent;
            // Acessa productData do store-logic.js (assumindo que é global)
            const product = window.productData.find(p => p.name === productName);
            if (product && window.renderProductDetails) {
                window.renderProductDetails(product);
            }
        });
    });
});