import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Youtube } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const modulos = [
  {
    name: 'Módulo de Cadastros',
    videos: [
      {
        title: 'Cadastro de produtos',
        description: 'Aprenda a cadastrar seus produtos no sistema.',
        href: 'https://youtu.be/a8JJedfr4jM?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1',
      },
      {
        title: 'Cadastro de clientes',
        description: 'Guia completo para registrar e gerenciar clientes.',
        href: 'https://youtu.be/lPmx6Pn8tVI?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1',
      },
      {
        title: 'Cadastro de usuários',
        description: 'Gerencie os acessos e permissões da sua equipe.',
        href: 'https://youtu.be/ZsZZLZ6BajM?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1',
      },
      {
        title: 'Cadastro de caixa',
        description: 'Aprenda como realizar o cadastro de caixas em seu sistema.',
        href: 'https://youtu.be/Q-zfv7w3Id8?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1',
      },
    ],
  },
  {
    name: 'Módulo de Estoque',
    videos: [
      {
        title: 'Ajuste de estoque',
        description: 'Como fazer ajustes manuais no seu inventário.',
        href: 'https://youtu.be/pnRoqOUnZPg?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg',
      },
      {
        title: 'Lote e vencimento',
        description: 'Controle produtos por lote e data de vencimento.',
        href: 'https://youtu.be/7HzZg0dnoeI?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg',
      },
      {
        title: 'Entrada de estoque (NF-e)',
        description: 'Domine o processo de entrada de mercadorias via XML.',
        href: 'https://youtu.be/Gf7-Lcp8bdI?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg',
      },
      {
        title: 'Coletor de dados',
        description: 'Agilize seu balanço e controle de estoque com o coletor.',
        href: 'https://youtu.be/M-BwM7tV1Hw?list=PLBc9EKD_Uy-pIganp8J2DVlj8eAljoDHg',
      },
    ],
  },
  {
    name: 'Módulo de Vendas e Serviços',
    videos: [
       {
        title: 'Ordem de Serviço',
        description: 'Gerencie e acompanhe ordens de serviço de forma eficiente.',
        href: 'https://youtu.be/y0CY2iadFEM?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv',
      },
      {
        title: 'Módulo Retaguarda',
        description: 'Visão geral das funcionalidades do sistema de retaguarda.',
        href: 'https://youtu.be/Mourf3MWLYQ?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv',
      },
      {
        title: 'Tabela de Preços',
        description: 'Crie e gerencie diferentes tabelas de preços.',
        href: 'https://youtu.be/8oOeWQTe4_0?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv',
      },
    ]
  },
  {
    name: 'Módulo Financeiro e Fiscal',
    videos: [
      {
        title: 'Contas a Receber',
        description: 'Faça a gestão completa das contas a receber de seus clientes.',
        href: 'https://youtu.be/KvBcYi_oYTI?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv',
      },
      {
        title: 'Controle de Caixa',
        description: 'Aprenda a fazer a gestão completa do seu fluxo de caixa.',
        href: 'https://www.youtube.com/watch?v=3h3z4y5zX-w',
      },
      {
        title: 'XML para Contabilidade',
        description: 'Exporte os arquivos XML para o seu contador de forma simples.',
        href: 'https://youtu.be/61ZajDOEREU?list=PLBc9EKD_Uy-reKIvvbT53VIp12AOXABUO',
      },
    ],
  },
];

const VideoCard = ({ video }: { video: { title: string, description: string, href?: string } }) => {
  const card = (
    <Card className={`h-full ${video.href ? 'hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1' : ''}`}>
      <CardContent className="p-0">
        <div className="aspect-video bg-muted flex items-center justify-center rounded-t-lg">
          <Youtube className="h-16 w-16 text-muted-foreground/50" />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{video.title}</CardTitle>
        <CardDescription>{video.description}</CardDescription>
      </CardHeader>
    </Card>
  );

  if (video.href) {
    return (
      <a href={video.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    );
  }

  return <div className="h-full">{card}</div>;
};

export default function LcErpPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/base-de-conhecimento">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Categorias
        </Link>
      </Button>
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Tutoriais em Vídeo - LC ERP
        </h1>
        <p className="text-xl text-foreground/80">
          Aprenda a utilizar os recursos avançados do nosso ERP completo, organizados por módulos.
        </p>

        {modulos.map((modulo) => (
          <div key={modulo.name} className="pt-10">
            <h2 className="text-3xl font-bold tracking-tight text-primary/90 border-b-2 border-primary/20 pb-2 mb-8">
              {modulo.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modulo.videos.map((video) => (
                <VideoCard key={video.title} video={video} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
