import type { Metadata } from 'next';
import ProjetoLayout from '@/components/ProjetoLayout';

export const metadata: Metadata = {
  title: 'Agenda Magnética — Alisson Rosa',
  description:
    'Plataforma de gestão e automação para clínicas. Sistema completo integrando agendamentos, clientes, profissionais, serviços e financeiro.',
};

export default function AgendaMagneticaPage() {
  return (
    <ProjetoLayout
      title="Agenda Magnética"
      subtitle="Plataforma de gestão e automação para clínicas"
      intro={[
        'A Agenda Magnética é uma plataforma criada para organizar a rotina operacional de clínicas que dependem de agenda, atendimento recorrente e controle financeiro.',
        'O foco do projeto nunca foi apenas "agendar horários", mas estruturar todo o funcionamento da clínica em um único sistema simples de operar.',
      ]}
      problema={{
        text: 'Antes da plataforma, a operação era fragmentada:',
        items: [
          'Agendas separadas',
          'Controle financeiro manual',
          'Atendimentos desorganizados',
          'Dependência excessiva da recepção',
        ],
        closing:
          'Isso gerava erros, retrabalho e pouca previsibilidade no dia a dia.',
      }}
      construido={{
        text: 'Sistema web completo com:',
        items: [
          'Gestão de clientes, profissionais e serviços',
          'Agenda visual por dia, semana e horário',
          'Controle financeiro com visão clara de entradas e pendências',
          'Dashboards operacionais para acompanhamento diário',
          'Estrutura pensada para uso contínuo, sem dependência de planilhas',
        ],
      }}
      decisoes={[
        'Foco em fluxo simples para quem opera o sistema todos os dias',
        'Redução máxima de cliques e telas desnecessárias',
        'Organização da lógica de negócio antes do visual',
        'Estrutura preparada para crescimento sem virar bagunça',
      ]}
      resultado={[
        'A clínica passou a operar com mais controle, menos erro e mais clareza sobre o próprio negócio.',
        'O sistema deixou de ser apenas uma agenda e passou a ser parte central da operação.',
      ]}
    />
  );
}
