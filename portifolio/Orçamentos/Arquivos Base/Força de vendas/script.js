// Animações e interatividade
document.addEventListener('DOMContentLoaded', function() {
    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .benefit-item, .proposal-item, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar animações
    animateOnScroll();
    
    // Adicionar evento de scroll
    window.addEventListener('scroll', animateOnScroll);
});
