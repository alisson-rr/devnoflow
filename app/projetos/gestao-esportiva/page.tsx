import type { Metadata } from 'next';
import ProjetoLayout from '@/components/ProjetoLayout';

export const metadata: Metadata = {
  title: 'Gestão Esportiva para Federações — Alisson Rosa',
  description:
    'Plataforma de gestão esportiva para federações. Sistema operacional com controle de entidades, atletas, provas, rankings e eventos oficiais.',
};

export default function GestaoEsportivaPage() {
  return (
    <ProjetoLayout
      title="Plataforma de gestão esportiva"
      subtitle="Sistema operacional para federações e eventos oficiais"
      intro={[
        'Projeto desenvolvido para atender federações esportivas que precisam lidar com múltiplas entidades, atletas, provas e rankings dentro de uma estrutura institucional.',
        'Um sistema pensado para suportar regras de negócio complexas e operação real de eventos.',
      ]}
      problema={{
        text: 'A gestão era descentralizada e pouco padronizada:',
        items: [
          'Dados espalhados',
          'Dificuldade de controle de provas e resultados',
          'Processos manuais em eventos oficiais',
          'Pouca visibilidade operacional',
        ],
      }}
      construido={{
        text: 'Plataforma de gestão com:',
        items: [
          'Cadastro e gestão de federações, hípicas e entidades',
          'Controle de atletas e participantes',
          'Organização de provas e eventos',
          'Cálculo e visualização de rankings',
          'Múltiplos níveis de acesso conforme perfil do usuário',
        ],
      }}
      decisoes={[
        'Modelagem de dados focada em consistência e rastreabilidade',
        'Separação clara entre operação e visualização',
        'Flexibilidade para diferentes formatos de evento',
        'Foco em lógica de negócio antes de interface',
      ]}
      resultado={[
        'A federação passou a ter controle centralizado das informações, mais organização nos eventos e uma base sólida para crescimento e padronização futura.',
        'O sistema deixou de ser apenas apoio e passou a ser estrutura.',
      ]}
    />
  );
}
