'use client';

import FadeIn from './FadeIn';

export default function Confidencialidade() {
  return (
    <section id="confidencialidade" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="p-10 md:p-14 rounded-2xl border border-zinc-800/30 bg-zinc-900/20">
            <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
              <p>
                Além dos projetos públicos, também atuei em aplicações internas,
                produtos em desenvolvimento e sistemas confidenciais que não
                podem ser exibidos integralmente.
              </p>
              <p>
                Isso inclui plataformas em construção, soluções internas de
                empresas e projetos em parceria onde a divulgação é limitada.
              </p>
              <p className="text-zinc-200 font-medium pt-2">
                O foco nunca foi portfólio bonito. Sempre foi resolver o
                problema certo.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
