import type { Metadata } from 'next';
import ProjetoLayout from '@/components/ProjetoLayout';

export const metadata: Metadata = {
  title: 'Vistorias Imobiliárias — Alisson Rosa',
  description:
    'Plataforma de vistorias imobiliárias. Sistema completo para gestão de vistorias, padronização e controle de laudos.',
};

export default function VistoriasImobiliariasPage() {
  return (
    <ProjetoLayout
      title="Plataforma de vistorias imobiliárias"
      subtitle="Organização, padronização e controle de laudos"
      intro={[
        'Sistema desenvolvido para estruturar o processo de vistorias imobiliárias, substituindo fluxos manuais e pouco confiáveis por uma operação digital organizada.',
      ]}
      problema={{
        text: 'O processo tradicional envolvia:',
        items: [
          'Registros manuais',
          'Informações inconsistentes',
          'Dificuldade de padronização',
          'Retrabalho na geração de laudos',
        ],
        closing:
          'Isso comprometia qualidade, tempo e confiabilidade dos dados.',
      }}
      construido={{
        text: 'Plataforma completa para:',
        items: [
          'Cadastro e organização de ambientes',
          'Controle de itens vistoriados',
          'Registro estruturado de informações',
          'Padronização dos dados coletados',
          'Apoio à geração de laudos consistentes',
        ],
      }}
      decisoes={[
        'Foco forte em usabilidade no campo',
        'Estrutura rígida o suficiente para padronizar, flexível para adaptar',
        'Organização clara dos dados para uso posterior',
        'Eliminação de etapas manuais desnecessárias',
      ]}
      resultado={[
        'O processo de vistoria se tornou mais rápido, organizado e confiável.',
        'Menos erro, menos retrabalho e mais consistência na entrega final.',
      ]}
    />
  );
}
