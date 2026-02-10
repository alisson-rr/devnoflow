'use client';

import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5551994408307';

export default function CTAFinal() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="w-12 h-px bg-zinc-700 mx-auto mb-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-100 leading-tight mb-8">
            Se o seu projeto precisa funcionar no mundo real, a conversa começa
            aqui.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Seja para evoluir um sistema existente ou construir algo do zero, a
            ideia é a mesma: clareza, estrutura e entrega.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-zinc-100 text-zinc-900 text-sm font-medium tracking-wide rounded-full hover:bg-white transition-all duration-300"
          >
            Entrar em contato
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
