'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5551994408307';

interface Project {
  name: string;
  description: string;
  stack: string;
  slug?: string;
}

interface Category {
  label: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    label: 'Plataformas & Sistemas',
    projects: [
      {
        name: 'Agenda Magnética',
        description:
          'Plataforma de gestão e automação de atendimento para clínicas, com foco em organização operacional e previsibilidade de agenda.',
        stack: 'Bubble · Supabase · n8n · APIs · OpenAI',
        slug: '/projetos/agenda-magnetica',
      },
      {
        name: 'Plataforma de gestão esportiva para federações',
        description:
          'Sistema para controle de federações, entidades, atletas, provas, rankings e operação de eventos esportivos oficiais.',
        stack: 'Bubble · Supabase · lógica de negócio · dashboards',
        slug: '/projetos/gestao-esportiva',
      },
      {
        name: 'Plataforma de gestão esportiva (projeto interno)',
        description:
          'Evolução de um ecossistema de gestão esportiva, ainda em desenvolvimento, sem material público disponível.',
        stack: 'Bubble · Supabase',
      },
      {
        name: 'Plataforma de vistorias imobiliárias',
        description:
          'Sistema completo para organização de ambientes, itens e registros de vistorias, com foco em padronização de dados e laudos.',
        stack: 'Bubble · Supabase',
        slug: '/projetos/vistorias-imobiliarias',
      },
      {
        name: 'Sistema de check-in para evento beneficente',
        description:
          'Aplicação criada para credenciamento e check-in rápido de participantes em evento presencial, evitando filas e retrabalho.',
        stack: 'Bubble · banco de dados · fluxos simples',
      },
      {
        name: 'Aplicação com lógica de rede social',
        description:
          'Aplicação desenvolvida em parceria com empresa, com funcionalidades típicas de rede social e foco em experiência do usuário.',
        stack: 'Bubble · front-end · lógica de interação',
      },
      {
        name: 'MEDBRA | App de telemedicina para plano de saúde (EUA)',
        description:
          'Aplicação do paciente para plano de saúde focado em telemedicina, com cadastro completo, login seguro, seleção de plano, consultas agendadas, perfil e histórico de pagamentos.',
        stack: 'Bubble · JavaScript · HTML · CSS',
      },
      {
        name: 'Embrapa | Plataforma web de formulários e indicadores',
        description:
          'Aplicação web para coleta estruturada de dados via formulários em etapas, com dashboards de desempenho, segmentações e painéis de índices ambientais, sociais e econômicos.',
        stack: 'Supabase · JavaScript · TypeScript · SQL · HTML · CSS',
      },
      {
        name: 'Finscale | Portal interno',
        description:
          'Sistema interno para centralizar informações e rotinas da equipe, incluindo painel de KPIs, gestão de colaboradores, mural de notícias e quadros de lembretes.',
        stack: 'Bubble · JavaScript · HTML · CSS',
      },
      {
        name: 'LicitAI',
        description:
          'Plataforma jurídica com foco em automação e inteligência artificial, integrando consultas jurídicas via IA, sistema de assinaturas e gestão completa de usuários e planos.',
        stack: 'Bubble · Make (Integromat) · OpenAI · JavaScript · HTML · CSS',
      },
      {
        name: 'GreenPay – MVP',
        description:
          'Plataforma de microcrédito P2P conectando investidores e tomadores de empréstimo, com controle de parcelas via PIX, análise de risco e dashboard financeiro.',
        stack: 'Bubble · JavaScript · HTML · CSS · APIs (Serasa, Asaas)',
      },
      {
        name: 'BancadaPro',
        description:
          'SaaS para suporte a refrigeristas, com controle de assinaturas, cadastro de equipamentos, consulta de erros técnicos e estruturação de fluxos técnicos.',
        stack: 'FlutterFlow · Supabase · Figma',
      },
      {
        name: 'Flashcard',
        description:
          'MicroSaaS para geração de flashcards com IA, incluindo API de geração de questões e estruturação rápida de MVP.',
        stack: 'FlutterFlow · Supabase · Figma · IA',
      },
      {
        name: 'SimuLab',
        description:
          'Aplicação web com dashboards, analytics, planos e sistema de login, focada em visualização e análise de dados.',
        stack: 'Bubble',
      },
      {
        name: 'ByJobs',
        description:
          'Plataforma com integrações completas à API do Asaas, incluindo emissão de NFS-e, cobranças, faturas, controle de PIX e transações TED.',
        stack: 'Bubble · APIs (Asaas) · JavaScript',
      },
      {
        name: 'Estacio',
        description:
          'Sistema desenvolvido para controle e compartilhamento de informações acadêmicas entre alunos e instituição.',
        stack: 'Bubble',
      },
      {
        name: 'E-mec',
        description:
          'Projeto voltado ao controle e compartilhamento de informações acadêmicas, com estrutura simples e foco institucional.',
        stack: 'Bubble',
      },
      {
        name: 'Iuris Petições',
        description:
          'Sistema completo para gestão de petições, usuários e processos, com controle de acessos, pagamentos e estrutura institucional.',
        stack: 'Bubble · APIs de pagamento',
      },
    ],
  },
  {
    label: 'E-commerces & Marketplaces',
    projects: [
      {
        name: 'FixWear (v2) | Marketplace de costura com pedido guiado',
        description:
          'Marketplace onde o cliente monta pedidos passo a passo, escolhe costureiro por distância e avaliação, acompanha status e finaliza pagamento, com backoffice completo e automações no WhatsApp.',
        stack: 'Bubble · n8n · JavaScript · HTML · CSS',
      },
      {
        name: 'ICÔNICO! | E-commerce de quadros personalizados com editor',
        description:
          'Loja online onde o cliente personaliza o próprio quadro, visualiza a composição antes da compra e utiliza recursos de edição assistida por IA para gerar a imagem final.',
        stack: 'Bubble · OpenAI · JavaScript · HTML · CSS',
      },
      {
        name: 'Artbe',
        description:
          'E-commerce personalizado desenvolvido em Bubble, com vendas online, cálculo automático de frete, gestão de pedidos e apoio logístico e financeiro.',
        stack: 'Bubble · JavaScript · APIs · SEO',
      },
    ],
  },
  {
    label: 'Automações & Integrações',
    projects: [
      {
        name: 'Automação de atendimento e agendamento via WhatsApp',
        description:
          'Fluxos automatizados para qualificação de leads, condução da conversa e aumento de agendamentos.',
        stack: 'n8n · APIs · WhatsApp · Supabase',
        slug: '/projetos/automacao-whatsapp',
      },
      {
        name: 'Automações e integrações entre sistemas',
        description:
          'Construção de integrações via API e fluxos automatizados para reduzir trabalho manual e conectar sistemas distintos.',
        stack: 'n8n · APIs · Supabase · Webhooks',
      },
    ],
  },
  {
    label: 'Landing Pages',
    projects: [
      {
        name: 'Southsea Investments | Landing Page de Captação',
        description:
          'Landing page criada com foco em conversão e clareza de proposta, apresentando o conceito de "Sistema de Crédito Inteligente" e conduzindo o usuário para captação e contato.',
        stack: 'JavaScript · TypeScript · HTML · CSS',
      },
      {
        name: 'Revolução da Advocacia | Landing page',
        description:
          'Landing page desenvolvida em Bubble com foco total em conversão, responsividade e SEO, validando performance orgânica quando bem estruturado.',
        stack: 'Bubble · OpenAI · HTML · CSS',
      },
      {
        name: 'Armada | Landing page',
        description:
          'Página de lançamento desenvolvida 100% em Bubble, com estrutura pensada para conversão e ranqueamento orgânico em SEO.',
        stack: 'Bubble · HTML · CSS',
      },
    ],
  },
  {
    label: 'Apps Mobile',
    projects: [
      {
        name: 'Oralesion',
        description:
          'Aplicativo mobile para gestores de petições, peticionadores e clientes, com estrutura de menus, conteúdos e publicação em loja.',
        stack: 'AppGyver',
      },
    ],
  },
  {
    label: 'Projetos Internos & Confidenciais',
    projects: [
      {
        name: 'Plataformas internas e projetos confidenciais',
        description:
          'Atuação em sistemas internos e produtos desenvolvidos dentro de empresas, com divulgação limitada por confidencialidade.',
        stack: 'Bubble · Supabase · APIs · automações',
      },
    ],
  },
];

function CategorySection({
  category,
  defaultOpen,
}: {
  category: Category;
  defaultOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center gap-4 py-4 group cursor-pointer"
          >
            <h2 className="text-zinc-300 text-sm tracking-[0.2em] uppercase whitespace-nowrap group-hover:text-zinc-100 transition-colors">
              {category.label}
            </h2>
            <div className="h-px flex-1 bg-zinc-800/60" />
            <span className="text-zinc-700 text-sm font-mono">
              {String(category.projects.length).padStart(2, '0')}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-zinc-600 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </FadeIn>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-4 pt-4 pb-4">
                {category.projects.map((project, i) => (
                  <div
                    key={i}
                    className="group p-6 md:p-8 rounded-2xl border border-zinc-800/40 bg-zinc-900/15 hover:border-zinc-700/60 hover:bg-zinc-900/30 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-3 mb-2">
                          <h3 className="text-zinc-100 text-lg font-medium leading-snug">
                            {project.name}
                          </h3>
                          {project.slug && (
                            <Link
                              href={project.slug}
                              className="shrink-0 mt-1 text-zinc-600 hover:text-zinc-300 transition-colors"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <p className="text-zinc-600 text-xs tracking-wide">
                          {project.stack}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function ProjetosPageContent() {
  return (
    <main className="relative">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
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
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-6">
              Projetos e experiências
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-zinc-100 leading-[1.1] tracking-tight mb-6">
              Tudo que já construí.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Projetos próprios, dentro de empresas e em parceria. Alguns
              públicos, outros confidenciais. Organizados por tipo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIdx) => (
        <CategorySection key={catIdx} category={category} defaultOpen={catIdx === 0} />
      ))}

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="w-12 h-px bg-zinc-700 mx-auto mb-12" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Quer conversar sobre um projeto?
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
