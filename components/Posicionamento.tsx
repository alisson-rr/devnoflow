'use client';

import FadeIn from './FadeIn';

export default function Posicionamento() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="w-12 h-px bg-zinc-700 mb-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-100 leading-relaxed mb-8">
            Não desenvolvo soluções genéricas.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Atuo na construção de plataformas internas, produtos digitais e
              sistemas operacionais que resolvem problemas reais de negócio,
              reduzem atrito no dia a dia e sustentam crescimento.
            </p>
            <p>
              Grande parte do meu trabalho envolve lógica, processo e decisões
              que não aparecem no layout, mas fazem toda a diferença quando o
              sistema começa a ser usado de verdade.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
