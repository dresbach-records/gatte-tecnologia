import { slugify } from "./utils";

export interface Video {
  slug: string;
  title: string;
  description: string;
  youtubeId: string | null;
  category: 'lc-erp' | 'automacao-comercial' | 'lc-web';
  subModule?: 'cadastros' | 'estoque' | 'vendas-e-servicos' | 'financeiro-e-fiscal';
}

export interface Modulo {
    key: string;
    name: string;
    videos: Video[];
}

function getYouTubeId(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2] && match[2].length === 11) ? match[2] : null;
}

const allVideos: Omit<Video, 'slug'>[] = [
  // LC ERP - Cadastros
  {
    title: 'Cadastro de produtos',
    description: 'Aprenda a cadastrar seus produtos no sistema.',
    youtubeId: getYouTubeId('https://youtu.be/a8JJedfr4jM?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1'),
    category: 'lc-erp',
    subModule: 'cadastros',
  },
  {
    title: 'Cadastro de clientes',
    description: 'Guia completo para registrar e gerenciar clientes.',
    youtubeId: getYouTubeId('https://youtu.be/lPmx6Pn8tVI?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1'),
    category: 'lc-erp',
    subModule: 'cadastros',
  },
  {
    title: 'Cadastro de usuários',
    description: 'Gerencie os acessos e permissões da sua equipe.',
    youtubeId: getYouTubeId('https://youtu.be/ZsZZLZ6BajM?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1'),
    category: 'lc-erp',
    subModule: 'cadastros',
  },
  {
    title: 'Cadastro de caixa',
    description: 'Aprenda como realizar o cadastro de caixas em seu sistema.',
    youtubeId: getYouTubeId('https://youtu.be/Q-zfv7w3Id8?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1'),
    category: 'lc-erp',
    subModule: 'cadastros',
  },
  // LC ERP - Estoque
  {
    title: 'Ajuste de estoque',
    description: 'Como fazer ajustes manuais no seu inventário.',
    youtubeId: getYouTubeId('https://youtu.be/pnRoqOUnZPg?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg'),
    category: 'lc-erp',
    subModule: 'estoque',
  },
  {
    title: 'Lote e vencimento',
    description: 'Controle produtos por lote e data de vencimento.',
    youtubeId: getYouTubeId('https://youtu.be/7HzZg0dnoeI?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg'),
    category: 'lc-erp',
    subModule: 'estoque',
  },
  {
    title: 'Entrada de estoque (NF-e)',
    description: 'Domine o processo de entrada de mercadorias via XML.',
    youtubeId: getYouTubeId('https://youtu.be/Gf7-Lcp8bdI?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg'),
    category: 'lc-erp',
    subModule: 'estoque',
  },
  {
    title: 'Coletor de dados',
    description: 'Agilize seu balanço e controle de estoque com o coletor.',
    youtubeId: getYouTubeId('https://youtu.be/M-BwM7tV1Hw?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg'),
    category: 'lc-erp',
    subModule: 'estoque',
  },
  // LC ERP - Vendas e Serviços
  {
    title: 'Ordem de Serviço',
    description: 'Gerencie e acompanhe ordens de serviço de forma eficiente.',
    youtubeId: getYouTubeId('https://youtu.be/y0CY2iadFEM?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv'),
    category: 'lc-erp',
    subModule: 'vendas-e-servicos',
  },
  {
    title: 'Módulo Retaguarda',
    description: 'Visão geral das funcionalidades do sistema de retaguarda.',
    youtubeId: getYouTubeId('https://youtu.be/Mourf3MWLYQ?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv'),
    category: 'lc-erp',
    subModule: 'vendas-e-servicos',
  },
  {
    title: 'Tabela de Preços',
    description: 'Crie e gerencie diferentes tabelas de preços.',
    youtubeId: getYouTubeId('https://youtu.be/8oOeWQTe4_0?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv'),
    category: 'lc-erp',
    subModule: 'vendas-e-servicos',
  },
   // LC ERP - Financeiro e Fiscal
  {
    title: 'Contas a Receber',
    description: 'Faça a gestão completa das contas a receber de seus clientes.',
    youtubeId: getYouTubeId('https://youtu.be/KvBcYi_oYTI?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv'),
    category: 'lc-erp',
    subModule: 'financeiro-e-fiscal',
  },
  {
    title: 'Controle de Caixa',
    description: 'Aprenda a fazer a gestão completa do seu fluxo de caixa.',
    youtubeId: getYouTubeId('https://www.youtube.com/watch?v=3h3z4y5zX-w'),
    category: 'lc-erp',
    subModule: 'financeiro-e-fiscal',
  },
  {
    title: 'XML para Contabilidade',
    description: 'Exporte os arquivos XML para o seu contador de forma simples.',
    youtubeId: getYouTubeId('https://youtu.be/61ZajDOEREU?list=PLBc9EKD_Uy-reKIvvbT53VIp12AOXABUO'),
    category: 'lc-erp',
    subModule: 'financeiro-e-fiscal',
  },
  // Automação Comercial
  {
    title: 'PDV NFC-e vendas completo',
    description: 'Um tutorial completo sobre vendas no Ponto de Venda com NFC-e.',
    youtubeId: getYouTubeId('https://youtu.be/bo1W3Mt3H9w?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv'),
    category: 'automacao-comercial',
  },
  {
    title: 'Atendimento de balcão',
    description: 'Otimize suas vendas rápidas com o módulo de atendimento de balcão.',
    youtubeId: getYouTubeId('https://youtu.be/vwrSCpgcPag?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv'),
    category: 'automacao-comercial',
  },
  {
    title: 'Gourmet (completo)',
    description: 'Veja como gerenciar mesas, pedidos e o dia a dia de restaurantes.',
    youtubeId: null,
    category: 'automacao-comercial',
  },
  // LC Web
  {
    title: 'APP Força de Vendas (Completo)',
    description: 'Tutorial completo sobre como usar o aplicativo de força de vendas.',
    youtubeId: getYouTubeId('https://youtu.be/m9ecbLB4Z5Y?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv'),
    category: 'lc-web',
  },
  {
    title: 'APP LC Dashboard Mobile',
    description: 'Acompanhe os indicadores da sua empresa na palma da mão.',
    youtubeId: null,
    category: 'lc-web',
  },
  {
    title: 'Aplicativos mobile - apresentação',
    description: 'Conheça nossa suíte de aplicativos para gestão móvel.',
    youtubeId: null,
    category: 'lc-web',
  },
];

export const videos: Video[] = allVideos.map(v => ({
  ...v,
  slug: slugify(v.title),
}));
