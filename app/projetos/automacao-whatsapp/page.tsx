import type { Metadata } from 'next';
import ProjetoLayout from '@/components/ProjetoLayout';

export const metadata: Metadata = {
  title: 'Automação de Atendimento via WhatsApp — Alisson Rosa',
  description:
    'Automação de atendimento e agendamento via WhatsApp. Fluxos para transformar conversa em agenda com qualificação, roteamento e follow-up.',
};

export default function AutomacaoWhatsAppPage() {
  return (
    <ProjetoLayout
      title="Automação de atendimento e agendamento via WhatsApp"
      subtitle="Fluxos para transformar conversa em agenda"
      intro={[
        'Esse projeto nasceu de um problema bem comum em negócios de atendimento: a conversa até começa bem, mas morre no meio do caminho.',
        'A proposta aqui não foi "automatizar por automatizar". Foi criar um fluxo que mantém a conversa viva, conduz a cliente com naturalidade e aumenta a taxa de agendamentos, sem depender de improviso.',
      ]}
      problema={{
        text: 'O atendimento geralmente travava em pontos previsíveis:',
        items: [
          'Cliente some depois do "oi"',
          'Resposta lenta e inconsistente',
          'Falta de padrão entre pessoas do time',
          'Muito esforço manual para pouco resultado',
          'Desorganização na confirmação e no pós-atendimento',
        ],
      }}
      construido={{
        text: 'Automação e estrutura de atendimento com:',
        items: [
          'Qualificação automática (entender o que a cliente quer e em qual momento ela está)',
          'Roteamento do atendimento (quando segue automático e quando vira humano)',
          'Mensagens de condução para agendamento, confirmação e follow-up',
          'Organização de informações para evitar retrabalho',
          'Integração com sistemas quando necessário (agenda, CRM, banco de dados, etc.)',
        ],
      }}
      decisoes={[
        'Manter linguagem humana, sem "robô de atendimento"',
        'Reduzir fricção e aumentar velocidade de resposta',
        'Criar um fluxo claro que qualquer pessoa do time consiga seguir',
        'Garantir consistência no atendimento sem engessar a conversa',
      ]}
      resultado={[
        'Mais previsibilidade no atendimento e mais conversas chegando até o agendamento.',
        'O ponto principal não é "automação". É processo.',
        'Quando o processo fica claro, a operação fica leve e o resultado aparece.',
      ]}
    />
  );
}
