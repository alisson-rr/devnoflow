import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import plataformaPremium from '../assets/Plataforma Premium.avif';
import comunidade from '../assets/Comunidade.avif';
import agentes from '../assets/agentes.avif';

const SolutionsSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-orange-400 font-semibold tracking-wider animate-on-scroll">
          NOSSAS SOLUÇÕES
        </h3>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white animate-on-scroll">
          Transforme Seu Infoproduto em uma Experiência Premium
        </h2>
        <p className="mt-6 text-gray-400 md:text-lg animate-on-scroll">
          Criamos soluções personalizadas que elevam seu infoproduto a outro nível, sem que você precise entender de código ou tecnologia.
        </p>
      </div>

      <div className="mt-20 space-y-20 md:space-y-28">
        {/* Solution 1 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Plataforma Premium Sob Medida
            </h3>
            <p className="mt-4 text-gray-400">
              Não aceite a mediocridade das plataformas comuns. Com uma área exclusiva com sua identidade, para seus alunos sentirem que estão no lugar certo desde o primeiro clique.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Impacto visual que reforça sua autoridade
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Experiência intuitiva e profissional
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Encaixa perfeito nas suas ferramentas
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://wa.me/5551994408307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                QUERO UMA PLATAFORMA PREMIUM
              </a>
            </div>
          </div>
          <div className="animate-on-scroll">
            <img 
              src={plataformaPremium} 
              alt="Plataforma de curso premium" 
              className="rounded-2xl shadow-2xl shadow-purple-500/15 w-full object-cover" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Solution 2 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-on-scroll md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Comunidade Que Não Deixa Aluno Sumir
            </h3>
            <p className="mt-4 text-gray-400">
              Seu aluno precisa pertencer a algo grande. Desenvolvemos um ambiente de interação e gamificação que mantém seus alunos ativos, engajados e prontos para novos ciclos.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Fóruns de discussão direcionados
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Gamificação certeira: que motivam resultado
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Alunos compartilhando suas vitórias
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://wa.me/5551994408307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                QUERO MAIS ENGAJAMENTO
              </a>
            </div>
          </div>
          <div className="animate-on-scroll md:order-1">
            <img 
              src={comunidade} 
              alt="Comunidade engajadora" 
              className="rounded-2xl shadow-2xl shadow-purple-500/15 w-full object-cover" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Solution 3 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Agentes IA que Vendem, Engajam e Escalam
            </h3>
            <p className="mt-4 text-gray-400">
              Não é aquele robô travado que só repete frase pronta. Nossos agentes entendem, interagem e vendem como se fossem da sua equipe.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Follow-up que recupera carrinho abandonado
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Recomendações personalizadas de conteúdo guiam o aluno
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" />
                Suporte imediato, com linguagem natural e personalizada
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://wa.me/5551994408307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                QUERO UM TIME DE IA TRABALHANDO PRA MIM
              </a>
            </div>
          </div>
          <div className="animate-on-scroll">
            <img 
              src={agentes} 
              alt="Agentes de IA para suporte" 
              className="rounded-2xl shadow-2xl shadow-purple-500/15 w-full object-cover" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

