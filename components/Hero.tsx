'use client';

import FadeIn from './FadeIn';
import { ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5551994408307';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none opacity-[0.07] bg-gradient-to-br from-zinc-400 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase mb-8">
            Alisson Rosa · Desenvolvimento de plataformas digitais
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-zinc-100 leading-[1.1] tracking-tight mb-8">
            Sistemas bem pensados não chamam atenção.{' '}
            <span className="text-zinc-500">
              Eles simplesmente funcionam.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
            Trabalho com desenvolvimento de plataformas digitais focadas em
            operação, clareza e escala.
          </p>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Projetos feitos para durar, não só para lançar.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projetos"
              className="group flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-900 text-sm font-medium tracking-wide rounded-full hover:bg-white transition-all duration-300"
            >
              Ver projetos selecionados
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-300 text-sm font-medium tracking-wide rounded-full hover:border-zinc-500 hover:text-zinc-100 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Conversar sobre um projeto
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FadeIn delay={0.6}>
          <div className="w-px h-16 bg-gradient-to-b from-zinc-600 to-transparent" />
        </FadeIn>
      </div>
    </section>
  );
}
