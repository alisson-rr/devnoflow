import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const onScrollAnimate = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const triggerBottom = window.innerHeight * 0.9;
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', onScrollAnimate);
    window.addEventListener('load', onScrollAnimate);
    
    // Trigger on mount
    onScrollAnimate();

    return () => {
      window.removeEventListener('scroll', onScrollAnimate);
      window.removeEventListener('load', onScrollAnimate);
    };
  }, []);
};

