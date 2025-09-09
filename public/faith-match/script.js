// Smooth scrolling para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Navegação suave
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Menu mobile toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animações de scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Adicionar classe de animação aos elementos
    const animateElements = document.querySelectorAll('.about-card, .feature-item, .plan-card');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Contador animado para estatísticas
    const stats = document.querySelectorAll('.stat h3');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('+')) {
                element.textContent = Math.floor(current).toLocaleString('pt-BR') + '+';
            } else {
                element.textContent = Math.floor(current).toLocaleString('pt-BR');
            }
        }, 16);
    }

    // Efeito de typing para o título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < titleText.length) {
                heroTitle.innerHTML += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Partículas flutuantes no hero
    createFloatingParticles();

    // Formulário de contato
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animação de sucesso
            const button = this.querySelector('.btn-primary');
            const originalText = button.textContent;
            
            button.textContent = 'Enviando...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Enviado com Sucesso!';
                button.style.background = '#10b981';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = '';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Efeito hover nos cards de planos
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Efeito parallax suave
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-particles');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Animação dos botões de match no mockup
    const matchButtons = document.querySelectorAll('.btn-pass, .btn-like');
    matchButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Efeito de coração flutuante para o botão like
            if (this.classList.contains('btn-like')) {
                createHeartEffect(this);
            }
        });
    });

    // Lazy loading para imagens (se houver)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Função para criar partículas flutuantes
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: linear-gradient(135deg, #A855F7, #F97316);
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            pointer-events: none;
            z-index: 1;
        `;
        
        hero.appendChild(particle);
    }
    
    // Adicionar keyframes para animação das partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para criar efeito de coração
function createHeartEffect(button) {
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart';
    heart.style.cssText = `
        position: absolute;
        color: #F97316;
        font-size: 20px;
        pointer-events: none;
        animation: heart-float 1s ease-out forwards;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    `;
    
    button.style.position = 'relative';
    button.appendChild(heart);
    
    // Adicionar keyframes para o coração
    if (!document.querySelector('#heart-animation')) {
        const style = document.createElement('style');
        style.id = 'heart-animation';
        style.textContent = `
            @keyframes heart-float {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                50% {
                    transform: translate(-50%, -70px) scale(1.2);
                    opacity: 0.8;
                }
                100% {
                    transform: translate(-50%, -100px) scale(0.8);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// Função para adicionar efeito de ondulação nos botões
function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .plan-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Adicionar keyframes para o efeito ripple
    if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Inicializar efeito de ondulação
document.addEventListener('DOMContentLoaded', addRippleEffect);

// Função para detectar dispositivos móveis
function isMobile() {
    return window.innerWidth <= 768;
}

// Otimizações para mobile
if (isMobile()) {
    // Reduzir animações em dispositivos móveis para melhor performance
    document.addEventListener('DOMContentLoaded', function() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
    });
}

// Preloader simples
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Adicionar estilo para o preloader
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #A855F7, #F97316);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeOut 0.5s ease-out 0.5s forwards;
        }
        
        @keyframes fadeOut {
            to {
                opacity: 0;
                visibility: hidden;
            }
        }
    `;
    document.head.appendChild(style);
});

// Função para scroll suave personalizado
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80; // Offset para navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}
