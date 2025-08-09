import React from 'react';

const ResultsSection = () => {
  const results = [
    { value: '+30%', description: 'No fechamento das vendas' },
    { value: '9×', description: 'Mais resultado do que follow-up manual' },
    { value: '+20%', description: 'De alunos que não te largam' },
    { value: '+135%', description: 'Alunos que chegam até o fim' },
    { value: '+66%', description: 'De alunos satisfeitos' },
    { value: '-50%', description: 'De alunos indo embora' }
  ];

  return (
    <section className="py-20 md:py-32 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-orange-400 font-semibold tracking-wider animate-on-scroll">
            RESULTADOS COMPROVADOS
          </h3>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white animate-on-scroll">
            Números Que Falam Por Si
          </h2>
          <p className="mt-6 text-gray-400 md:text-lg animate-on-scroll">
            O que criadores premium já alcançam usando plataformas próprias + IA fecha vendas 24/7
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {results.map((result, index) => (
            <div 
              key={index}
              className="animate-on-scroll" 
              style={{'--delay': `${index * 0.1}s`}}
            >
              <p className="text-4xl md:text-5xl font-bold text-purple-400">
                {result.value}
              </p>
              <p className="mt-2 text-gray-400">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

