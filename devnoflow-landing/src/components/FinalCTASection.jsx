import React from 'react';

const FinalCTASection = () => {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white animate-on-scroll">
          CHEGOU A HORA DE SUBIR O NÍVEL DO SEU INFOPRODUTO
        </h2>
        <p className="mt-6 text-gray-400 md:text-lg animate-on-scroll">
          Chega de depender de plataformas genéricas e complicadas. Tenha uma solução premium, personalizada e fácil, com resultados claros.
        </p>
        <div className="mt-10 animate-on-scroll">
          <a 
            href="https://wa.me/5551994408307" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button-large"
          >
            QUERO TRANSFORMAR MEU NEGÓCIO AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

