'use client';

import FadeIn from './FadeIn';

const stack = [
  'React (TypeScript)',
  'React Native',
  'Bubble',
  'Supabase',
  'n8n',
  'Integrações via API',
  'Automações e lógica de backend',
  'OpenAI',
];

export default function Stack() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-4">
            Stack & Tecnologias
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-light text-zinc-100 leading-tight mb-6">
                Tecnologia como meio,
                <br />
                não como fim.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-zinc-400 text-lg leading-relaxed">
                As ferramentas que utilizo são escolhidas com base em
                estabilidade, flexibilidade e capacidade de escalar projetos
                reais.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mt-4">
                Uso tecnologia para simplificar processos, não para criar
                dependência ou complexidade desnecessária.
              </p>
            </FadeIn>
          </div>

          <div className="flex items-center">
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 rounded-full border border-zinc-800 text-zinc-400 text-sm hover:border-zinc-600 hover:text-zinc-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
