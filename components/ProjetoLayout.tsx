'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5551994408307';

interface ProjetoLayoutProps {
  title: string;
  subtitle: string;
  intro: string[];
  problema: {
    text: string;
    items: string[];
    closing?: string;
  };
  construido: {
    text: string;
    items: string[];
  };
  decisoes: string[];
  resultado: string[];
}

export default function ProjetoLayout({
  title,
  subtitle,
  intro,
  problema,
  construido,
  decisoes,
  resultado,
}: ProjetoLayoutProps) {
  return (
    <main className="relative">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projetos"
            className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos projetos
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
          >
            Entrar em contato
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-6">
              Projeto
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-zinc-100 leading-[1.1] tracking-tight mb-4">
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="w-12 h-px bg-zinc-700 mb-12" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contexto do problema */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-6">
              Contexto do problema
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {problema.text}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-3 mb-8">
              {problema.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-zinc-600 mt-3 shrink-0" />
                  <span className="text-zinc-400 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          {problema.closing && (
            <FadeIn delay={0.3}>
              <p className="text-zinc-500 text-lg leading-relaxed">
                {problema.closing}
              </p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* O que foi construído */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-6">
              O que foi construído
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {construido.text}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 space-y-3">
              {construido.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-zinc-500 mt-3 shrink-0" />
                  <span className="text-zinc-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Decisões importantes */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-6">
              Decisões importantes do projeto
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {decisoes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-zinc-600 mt-3 shrink-0" />
                  <span className="text-zinc-400 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resultado */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-6">
              Resultado
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              {resultado.map((p, i) => (
                <p
                  key={i}
                  className="text-zinc-300 text-xl md:text-2xl font-light leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="w-12 h-px bg-zinc-700 mx-auto mb-12" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Quer conversar sobre um projeto parecido?
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Alisson Rosa</p>
          <p className="text-zinc-700 text-sm">
            Desenvolvimento de plataformas digitais
          </p>
        </div>
      </footer>
    </main>
  );
}
