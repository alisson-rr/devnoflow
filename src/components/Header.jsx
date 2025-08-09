import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#121212]/50 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img 
          src="/Logo Preenchido.png" 
          alt="DevNoFlow Logo" 
          className="h-8 md:h-10 animate-fade-in"
        />
        <a 
          href="https://wa.me/5551994408307" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button text-sm md:text-base"
        >
          Fale Comigo
        </a>
      </div>
    </header>
  );
};

export default Header;

