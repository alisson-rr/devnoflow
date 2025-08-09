import React from 'react';
import { TrendingUp, Gem, Users } from 'lucide-react';

const MarketChangeSection = () => {
  return (
    <section className="py-20 md:py-32 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-orange-400 font-semibold tracking-wider animate-on-scroll">
            O MERCADO ESTÁ MUDANDO
          </h3>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white animate-on-scroll">
            O JOGO DOS INFOPRODUTOS MUDOU
          </h2>
          <p className="mt-6 text-gray-400 md:text-lg animate-on-scroll">
            Quem não entregar uma experiência premium vai ficar pra trás. Entenda por que os grandes players já estão investindo nisso:
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card-glass animate-on-scroll">
            <TrendingUp className="w-10 h-10 text-purple-400" />
            <h4 className="mt-4 text-xl font-bold text-white">
              Mercado Quer Qualidade
            </h4>
            <p className="mt-2 text-gray-400">
              Segundo Hotmart e Statista, o setor cresce mais de 20% ao ano e quem aposta em experiências premium está disparando na frente.
            </p>
          </div>
          <div className="card-glass animate-on-scroll" style={{'--delay': '0.2s'}}>
            <Gem className="w-10 h-10 text-purple-400" />
            <h4 className="mt-4 text-xl font-bold text-white">
              Experiência Decide a Venda
            </h4>
            <p className="mt-2 text-gray-400">
              73% dos consumidores dizem que a qualidade da plataforma já pesa quase tanto quanto o conteúdo na decisão de compra. Quem investe em ambiente próprio, fideliza e vende muito mais.
            </p>
          </div>
          <div className="card-glass animate-on-scroll" style={{'--delay': '0.4s'}}>
            <Users className="w-10 h-10 text-purple-400" />
            <h4 className="mt-4 text-xl font-bold text-white">
              Retenção e Engajamento em Alta
            </h4>
            <p className="mt-2 text-gray-400">
              Plataformas próprias com recursos premium geram até 3× mais engajamento e aumentam a retenção dos alunos em mais de 40% comparado a cursos comuns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketChangeSection;

