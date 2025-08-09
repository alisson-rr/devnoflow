import React from 'react';
import heroImage from '../assets/hero.avif';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-slide-up" 
          style={{'--delay': '0.2s'}}
        >
          Seu Conteúdo Merece <span className="text-purple-400">Palco VIP</span>
        </h1>
        <h2 
          className="mt-4 text-xl md:text-2xl font-semibold text-gray-300 animate-slide-up" 
          style={{'--delay': '0.4s'}}
        >
          Transforme seu Infoproduto em uma Experiência Premium
        </h2>
        <p 
          className="mt-6 max-w-3xl mx-auto text-gray-400 md:text-lg animate-slide-up" 
          style={{'--delay': '0.6s'}}
        >
          Enquanto a maioria vende num template genérico, você entrega uma experiência de marca que fideliza e aumenta o valor percebido.
        </p>
        <div 
          className="mt-10 animate-slide-up" 
          style={{'--delay': '0.8s'}}
        >
          <a 
            href="https://wa.me/5551994408307" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button-large"
          >
            QUERO ELEVAR MEU INFOPRODUTO
          </a>
        </div>
      </section>

      {/* Feature Image */}
      <section className="container mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/15 animate-on-scroll">
          <img 
            src={heroImage} 
            alt="Plataforma de curso premium" 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

