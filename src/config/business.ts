/**
 * Gleice Farias | Estética Facial — Arquivo de Configuração Central
 * Anápolis, Goiás · Instagram: @esteticagleicefarias
 *
 * Edite este arquivo para atualizar os dados da clínica.
 * Campos com PENDING não exibem dados fictícios no site.
 */

export type PendingValue = 'PENDENTE';
export const PENDING: PendingValue = 'PENDENTE';

export interface BusinessConfig {
  name: string;
  shortName: string;
  segment: string;
  professional: string;
  city: string;
  state: string;
  instagram: string;
  instagramUrl: string;
  whatsapp: string | PendingValue;
  whatsappMessage: string;
  address: string | PendingValue;
  addressMapUrl: string | PendingValue;
  phone: string | PendingValue;
  businessHours: { days: string; hours: string }[] | PendingValue;
  seo: {
    title: string;
    description: string;
    url: string;
  };
}

// ============================================================
// CONFIGURAÇÃO OFICIAL DA MARCA
// ============================================================
// Para ativar o WhatsApp: substitua PENDING pelo número com DDI e DDD
// Exemplo: '5562999999999' (onde 62 é o DDD de Anápolis/GO)
export const WHATSAPP_NUMBER: string | PendingValue = PENDING;

const config: BusinessConfig = {
  name: 'Gleice Farias | Estética Facial',
  shortName: 'Gleice Farias',
  segment: 'Estética Facial',
  professional: 'Gleice Farias',

  // Localização confirmada
  city: 'Anápolis',
  state: 'GO',

  // Instagram oficial confirmado
  instagram: '@esteticagleicefarias',
  instagramUrl: 'https://www.instagram.com/esteticagleicefarias',

  // WhatsApp oficial (Pendente de confirmação do número com a profissional)
  whatsapp: WHATSAPP_NUMBER,
  whatsappMessage:
    'Olá, Gleice! Conheci seu trabalho pelo site e gostaria de saber mais sobre os tratamentos faciais e os horários disponíveis.',

  // Endereço exato (Pendente de confirmação devido a atualização de endereço no perfil)
  address: PENDING,
  addressMapUrl: PENDING,

  // Telefone fixo (opcional)
  phone: PENDING,

  // Horários de atendimento (sob confirmação - atendimento com hora marcada)
  businessHours: PENDING,

  // SEO e Metadados
  seo: {
    title: 'Gleice Farias | Estética Facial em Anápolis — GO',
    description:
      'Cuidados faciais personalizados, limpeza de pele profunda, peelings, microagulhamento e tratamento de manchas em Anápolis–GO. Agende sua avaliação.',
    url: 'https://esteticagleicefarias.com.br',
  },
};

export default config;

export function isPending(value: unknown): value is PendingValue {
  return value === PENDING;
}

export function getWhatsAppUrl(cfg: BusinessConfig = config): string | null {
  if (isPending(cfg.whatsapp) || !cfg.whatsapp) return null;
  const cleanNumber = cfg.whatsapp.replace(/\D/g, '');
  if (!cleanNumber) return null;
  const encoded = encodeURIComponent(cfg.whatsappMessage);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}
