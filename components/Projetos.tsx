'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Plataforma Agenda Magnética',
    subtitle: 'Gestão e automação de clínicas',
    slug: '/projetos/agenda-magnetica',
    description:
      'Sistema completo para gestão de clínicas, integrando agendamentos, clientes, profissionais, serviços, financeiro e automações de atendimento. Projeto pensado para organizar a operação diária, reduzir falhas humanas e dar previsibilidade ao negócio.',
  },
  {
    number: '02',
    title: 'Plataforma de gestão esportiva',
    subtitle: 'Para federações esportivas',
    slug: '/projetos/gestao-esportiva',
    description:
      'Plataforma desenvolvida para federações esportivas, com controle de entidades, atletas, provas, rankings e operação de eventos oficiais. Sistema com regras de negócio complexas, múltiplos perfis de acesso e foco forte em organização operacional e escalabilidade.',
  },
  {
    number: '03',
    title: 'Plataforma de vistorias imobiliárias',
    subtitle: 'Gestão e laudos padronizados',
    slug: '/projetos/vistorias-imobiliarias',
    description:
      'Sistema completo para gestão de vistorias, com estruturação de ambientes, itens, registros e geração de laudos padronizados. Projeto criado para substituir processos manuais, melhorar a organização dos dados e garantir consistência nas entregas.',
  },
  {
    number: '04',
    title: 'Automação de atendimento via WhatsApp',
    subtitle: 'Agendamento e qualificação automatizados',
    slug: '/projetos/automacao-whatsapp',
    description:
      'Projeto de automação focado em transformar conversas em agendamentos confirmados, com fluxos claros de qualificação, proposta e confirmação. Reduz trabalho manual, diminui faltas e traz mais previsibilidade para negócios que dependem de volume de atendimento.',
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-4">
            Projetos selecionados
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-16">
            Alguns projetos representam bem o tipo de trabalho que desenvolvo e o
            nível de complexidade que costumo lidar.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="group relative p-8 md:p-10 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:border-zinc-700/80 hover:bg-zinc-900/40 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <span className="text-zinc-700 text-sm font-mono shrink-0">
                    {project.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-zinc-100 text-xl md:text-2xl font-light mb-1">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  {project.slug ? (
                    <Link
                      href={project.slug}
                      className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-300 transition-colors shrink-0 self-start md:self-center group-hover:text-zinc-300"
                    >
                      Ver contexto do projeto
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-800 text-zinc-400 text-sm font-medium tracking-wide rounded-full hover:border-zinc-600 hover:text-zinc-200 transition-all duration-300"
            >
              Outros projetos e experiências
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
