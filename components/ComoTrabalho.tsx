'use client';

import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const bullets = [
  'Visão técnica aliada à visão de negócio',
  'Decisões pensadas para médio e longo prazo',
  'Código e estrutura organizados',
  'Comunicação direta e objetiva',
  'Foco em clareza, não em hype',
];

export default function ComoTrabalho() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-4">
                Como eu trabalho
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-light text-zinc-100 leading-tight">
                Processo claro,
                <br />
                resultado consistente.
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-5">
            {bullets.map((bullet, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-zinc-500" />
                  </div>
                  <span className="text-zinc-300 text-lg">{bullet}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
