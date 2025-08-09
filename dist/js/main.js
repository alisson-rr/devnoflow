import { animate, scroll } from 'https://esm.run/framer-motion';

document.addEventListener('DOMContentLoaded', () => {

    try {
        lucide.createIcons();
    } catch (e) {
        console.error("Lucide icons could not be created.", e);
    }


    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

});
