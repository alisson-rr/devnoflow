'use client';

import FadeIn from './FadeIn';
import { Layers, Zap, Settings, Link } from 'lucide-react';

const problems = [
  {
    icon: Layers,
    title: 'Plataformas de gestão complexa',
    description:
      'Sistemas com múltiplos perfis, regras de negócio, dados sensíveis e operação contínua.',
  },
  {
    icon: Zap,
    title: 'Produtos digitais em contextos reais',
    description:
      'Aplicações que precisam funcionar sob pressão, com usuários ativos e processos claros.',
  },
  {
    icon: Settings,
    title: 'Sistemas operacionais internos',
    description:
      'Ferramentas criadas para organizar, padronizar e dar controle a operações que antes eram manuais ou caóticas.',
  },
  {
    icon: Link,
    title: 'Integrações e automações',
    description:
      'Conexão entre sistemas, APIs e fluxos automatizados para reduzir trabalho humano e ganhar escala.',
  },
];

export default function Problemas() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-4">
            Tipo de problema que eu resolvo
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl mb-16">
            <p className="text-zinc-400 text-lg leading-relaxed">
              Ao longo dos últimos anos, participei de projetos próprios e
              projetos desenvolvidos dentro de empresas. Em alguns casos, por
              confidencialidade, não é possível divulgar nomes ou materiais
              completos.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mt-4">
              Mesmo assim, o tipo de desafio que costumo assumir é bem claro.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="group p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700/80 hover:bg-zinc-900/50 transition-all duration-500">
                <problem.icon className="w-5 h-5 text-zinc-500 mb-6" />
                <h3 className="text-zinc-100 text-lg font-medium mb-3">
                  {problem.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
