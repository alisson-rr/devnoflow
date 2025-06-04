/**
 * LANDING PAGE PREMIUM - JAVASCRIPT PRINCIPAL
 * 
 * Este arquivo contém todas as funcionalidades interativas da landing page.
 * Organizado por seções para facilitar edição.
 * 
 * ÍNDICE:
 * 1. Menu Mobile
 * 2. Navegação Suave
 * 3. Slider de Depoimentos
 * 4. Formulário de Contato
 * 5. Animações de Scroll
 * 6. Floating CTA
 * 7. Formatação de WhatsApp
 */

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // ===== 1. MENU MOBILE =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle da classe 'active' para o botão
            this.classList.toggle('active');
            
            // Se o menu mobile não existir, cria-o
            if (!document.querySelector('.mobile-menu')) {
                const mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                
                // Clona os links da navegação
                const navLinksClone = navLinks.cloneNode(true);
                
                // Adiciona ao menu mobile
                mobileMenu.appendChild(navLinksClone);
                
                // Adiciona ao body
                document.body.appendChild(mobileMenu);
                
                // Estiliza o menu mobile
                mobileMenu.style.position = 'fixed';
                mobileMenu.style.top = '0';
                mobileMenu.style.left = '0';
                mobileMenu.style.width = '100%';
                mobileMenu.style.height = '100vh';
                mobileMenu.style.backgroundColor = 'var(--bg-darker)';
                mobileMenu.style.zIndex = '999';
                mobileMenu.style.display = 'flex';
                mobileMenu.style.flexDirection = 'column';
                mobileMenu.style.justifyContent = 'center';
                mobileMenu.style.alignItems = 'center';
                mobileMenu.style.padding = '2rem';
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.transition = 'transform 0.3s ease';
                
                // Estiliza os links no menu mobile
                const mobileLinks = mobileMenu.querySelector('.nav-links');
                mobileLinks.style.display = 'flex';
                mobileLinks.style.flexDirection = 'column';
                mobileLinks.style.alignItems = 'center';
                mobileLinks.style.gap = '1.5rem';
                mobileLinks.style.marginBottom = '2rem';
                
                // Adiciona evento de clique para os links do menu mobile
                mobileLinks.querySelectorAll('a').forEach(link => {
                    link.style.fontSize = '1.25rem';
                    link.addEventListener('click', function() {
                        mobileMenu.style.transform = 'translateY(-100%)';
                        mobileMenuBtn.classList.remove('active');
                    });
                });
            }
            
            // Toggle da visibilidade do menu mobile
            const mobileMenu = document.querySelector('.mobile-menu');
            if (this.classList.contains('active')) {
                mobileMenu.style.transform = 'translateY(0)';
                
                // Estiliza o botão do menu quando ativo
                this.querySelectorAll('span').forEach((span, index) => {
                    if (index === 0) {
                        span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    } else if (index === 1) {
                        span.style.opacity = '0';
                    } else if (index === 2) {
                        span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    }
                });
            } else {
                mobileMenu.style.transform = 'translateY(-100%)';
                
                // Restaura o estilo do botão
                this.querySelectorAll('span').forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    }
    
    // ===== 2. NAVEGAÇÃO SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição de destino com um pequeno offset para a navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                // Scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== 3. SLIDER DE DEPOIMENTOS =====
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;
        
        // Função para mostrar um slide específico
        function showSlide(index) {
            // Esconde todos os slides
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.display = 'none';
            });
            
            // Remove a classe active de todos os dots
            testimonialDots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Mostra o slide atual
            testimonialSlides[index].classList.add('active');
            testimonialSlides[index].style.display = 'block';
            
            // Adiciona a classe active ao dot atual
            testimonialDots[index].classList.add('active');
            
            // Atualiza o índice atual
            currentSlide = index;
        }
        
        // Evento para o botão anterior
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                let newIndex = currentSlide - 1;
                if (newIndex < 0) {
                    newIndex = testimonialSlides.length - 1;
                }
                showSlide(newIndex);
            });
        }
        
        // Evento para o botão próximo
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                let newIndex = currentSlide + 1;
                if (newIndex >= testimonialSlides.length) {
                    newIndex = 0;
                }
                showSlide(newIndex);
            });
        }
        
        // Eventos para os dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
            });
        });
        
        // Inicializa o slider
        showSlide(0);
        
        // Auto-play opcional (descomente para ativar)
        /*
        setInterval(function() {
            let newIndex = currentSlide + 1;
            if (newIndex >= testimonialSlides.length) {
                newIndex = 0;
            }
            showSlide(newIndex);
        }, 5000); // Muda a cada 5 segundos
        */
    }
    
    // ===== 4. FORMULÁRIO DE CONTATO =====
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const newMessageBtn = document.getElementById('newMessageBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta os dados do formulário
            const formData = {
                nome: document.getElementById('nome').value,
                whatsapp: document.getElementById('whatsapp').value,
                email: document.getElementById('email').value,
                area: document.getElementById('area').value,
                investimento: document.getElementById('investimento').value,
                mensagem: document.getElementById('mensagem').value
            };
            
            // Método 1: Envio direto para o webhook (pode ter problemas de CORS)
            // Usando o modo 'no-cors' para contornar restrições de CORS
            fetch('https://webhook.site/bfa14e58-3b68-48e7-addb-ae20b55dcd22', {
                method: 'POST',
                mode: 'no-cors', // Importante: isso permite o envio cross-origin
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                console.log('Formulário enviado com sucesso!');
                // Exibe mensagem de sucesso
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Adiciona animação de fade-in
                formSuccess.style.animation = 'fadeIn 0.5s forwards';
                
            })
            .catch(error => {
                console.error('Erro ao enviar formulário:', error);
                
                // Mesmo com erro, mostramos sucesso e oferecemos alternativa via WhatsApp
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                formSuccess.style.animation = 'fadeIn 0.5s forwards';
                
                // Método alternativo: Redirecionar para WhatsApp com os dados
                const whatsappNumber = '5551994408307';
                const message = `Olá! Acabei de preencher o formulário no seu site. Aqui estão meus dados:\n\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}\nÁrea do projeto: ${formData.area}\nInvestimento: ${formData.investimento}\nMensagem: ${formData.mensagem}`;
                
                // Cria um link para WhatsApp com os dados
                const whatsappLink = document.createElement('a');
                whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                whatsappLink.className = 'btn btn-primary';
                whatsappLink.target = '_blank';
                whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i> Continuar no WhatsApp';
                whatsappLink.style.marginTop = '20px';
                whatsappLink.style.display = 'inline-block';
                
                // Adiciona o link ao elemento de sucesso
                formSuccess.appendChild(whatsappLink);
            });
        });
    }
    
    if (newMessageBtn) {
        newMessageBtn.addEventListener('click', function() {
            // Reseta o formulário
            contactForm.reset();
            
            // Esconde a mensagem de sucesso e mostra o formulário novamente
            formSuccess.style.display = 'none';
            contactForm.style.display = 'block';
            
            // Remove o botão de WhatsApp se existir
            const whatsappLink = formSuccess.querySelector('a[href^="https://wa.me/"]');
            if (whatsappLink) {
                formSuccess.removeChild(whatsappLink);
            }
        });
    }
    
    // ===== 5. ANIMAÇÕES DE SCROLL =====
    // Função para verificar se um elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Função para animar elementos quando visíveis
    function animateOnScroll() {
        document.querySelectorAll('.fade-animate').forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.animation = 'fadeIn 0.8s forwards';
                
                // Adiciona delay para elementos subsequentes
                const children = element.querySelectorAll('.fade-animate');
                children.forEach((child, index) => {
                    child.style.animationDelay = `${0.2 * (index + 1)}s`;
                });
            }
        });
    }
    
    // Executa a animação no carregamento inicial
    animateOnScroll();
    
    // Adiciona evento de scroll para continuar animando
    window.addEventListener('scroll', animateOnScroll);
    
    // ===== 6. FLOATING CTA =====
    const floatingCta = document.querySelector('.floating-cta');
    
    if (floatingCta) {
        // Mostra o CTA flutuante após rolar uma certa distância
        window.addEventListener('scroll', function() {
            if (window.scrollY > window.innerHeight) {
                floatingCta.style.display = 'block';
                
                // Adiciona animação de fade-in
                if (!floatingCta.classList.contains('animated')) {
                    floatingCta.classList.add('animated');
                    floatingCta.style.animation = 'fadeIn 0.5s forwards';
                }
            } else {
                floatingCta.style.display = 'none';
                floatingCta.classList.remove('animated');
            }
        });
    }
    
    // ===== 7. FORMATAÇÃO DE WHATSAPP =====
    const whatsappInput = document.getElementById('whatsapp');
    
    if (whatsappInput) {
        whatsappInput.addEventListener('input', function(e) {
            // Remove todos os caracteres não numéricos
            let value = this.value.replace(/\D/g, '');
            
            // Limita a 11 dígitos (DDD + número)
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            
            // Aplica a formatação
            if (value.length <= 2) {
                // Apenas DDD
                this.value = value;
            } else if (value.length <= 7) {
                // DDD + primeiros dígitos
                this.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else {
                // Formato completo: (00) 00000-0000
                this.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            }
        });
    }
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(9, 9, 11, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = 'rgba(15, 15, 18, 0.8)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});

/**
 * GUIA DE EDIÇÃO RÁPIDA
 * 
 * Para editar textos: Localize o texto no arquivo HTML e altere diretamente.
 * 
 * Para editar cores: 
 * 1. Abra o arquivo CSS
 * 2. Localize a seção ":root" no início do arquivo
 * 3. Altere os valores das variáveis (ex: --accent: #9747FF;)
 * 
 * Para editar imagens:
 * 1. Substitua os arquivos na pasta "assets" mantendo os mesmos nomes
 * 2. Ou altere os caminhos no HTML (ex: <img src="assets/nova-imagem.jpg">)
 * 
 * Para editar depoimentos:
 * 1. Localize a seção "Depoimentos Section" no HTML
 * 2. Duplique ou remova os elementos "testimonial-slide" conforme necessário
 * 3. Atualize os dots no controle de navegação para corresponder ao número de slides
 * 
 * Para editar o formulário:
 * 1. Localize a seção "Formulário Section" no HTML
 * 2. Adicione, remova ou modifique os campos conforme necessário
 * 3. Para integrar com um serviço de envio real, edite a seção "4. FORMULÁRIO DE CONTATO" neste arquivo
 */
