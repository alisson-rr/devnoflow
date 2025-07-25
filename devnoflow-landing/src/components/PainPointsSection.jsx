import React from 'react';
import { PackageX, UserX, Clock } from 'lucide-react';

const PainPointsSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-orange-400 font-semibold tracking-wider animate-on-scroll">
          Buraco Invisível no Teu Caixa
        </h3>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white animate-on-scroll">
          Você Está Perdendo Faturamento em Silêncio
        </h2>
        <p className="mt-6 text-gray-400 md:text-lg animate-on-scroll">
          Enquanto você grava aulas, três vazamentos sugam seu lucro e ficam maiores a cada lançamento.
        </p>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="card-glass animate-on-scroll">
          <PackageX className="w-10 h-10 text-purple-400" />
          <h4 className="mt-4 text-xl font-bold text-white">
            Plataforma Genérica = Valor Percebido é Zero
          </h4>
          <p className="mt-2 text-gray-400">
            Se teu curso parece de prateleira, teu preço despenca. Autoridade some e tu viras refém de desconto eterno.
          </p>
        </div>
        <div className="card-glass animate-on-scroll" style={{'--delay': '0.2s'}}>
          <UserX className="w-10 h-10 text-purple-400" />
          <h4 className="mt-4 text-xl font-bold text-white">
            Engajamento Baixo = Aluno Fantasma
          </h4>
          <p className="mt-2 text-gray-400">
            62% somem antes do módulo 2. Sem interação, não rola depoimento e você nunca mais vende pra ele.
          </p>
        </div>
        <div className="card-glass animate-on-scroll" style={{'--delay': '0.4s'}}>
          <Clock className="w-10 h-10 text-purple-400" />
          <h4 className="mt-4 text-xl font-bold text-white">
            Suporte Manual = Custo Oculto
          </h4>
          <p className="mt-2 text-gray-400">
            DM lotada, você e sua equipe esgotada. Cada dúvida copiada/colada vira hora não faturada é o pecado mortal para escala. Fica pior quando você tem uma IA mal feita que mais atrapalha do que ajuda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;

