import type { Metadata } from 'next';
import ProjetosPageContent from '@/components/ProjetosPage';

export const metadata: Metadata = {
  title: 'Projetos e Experiências — Alisson Rosa',
  description:
    'Todos os projetos, plataformas, automações, landing pages e experiências de desenvolvimento de Alisson Rosa.',
};

export default function ProjetosPage() {
  return <ProjetosPageContent />;
}
