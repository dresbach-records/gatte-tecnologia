'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Film } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { videos, Video, Modulo } from '@/lib/videos';

const modulos: Modulo[] = [
  {
    key: 'cadastros',
    name: 'Módulo de Cadastros',
    videos: videos.filter(v => v.category === 'lc-erp' && v.subModule === 'cadastros'),
  },
  {
    key: 'estoque',
    name: 'Módulo de Estoque',
    videos: videos.filter(v => v.category === 'lc-erp' && v.subModule === 'estoque'),
  },
  {
    key: 'vendas-e-servicos',
    name: 'Módulo de Vendas e Serviços',
    videos: videos.filter(v => v.category === 'lc-erp' && v.subModule === 'vendas-e-servicos'),
  },
  {
    key: 'financeiro-e-fiscal',
    name: 'Módulo Financeiro e Fiscal',
    videos: videos.filter(v => v.category === 'lc-erp' && v.subModule === 'financeiro-e-fiscal'),
  },
];

const VideoCard = ({ video }: { video: Video }) => {
  return (
    <Link href={`/base-de-conhecimento/${video.category}/${video.slug}`} className="block h-full">
      <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary transition-all duration-300">
        <CardHeader className="flex-grow">
          <CardTitle className="text-lg font-semibold text-primary">{video.title}</CardTitle>
          <CardDescription className="mt-1">{video.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`flex items-center text-sm ${video.youtubeId ? 'text-accent' : 'text-muted-foreground'}`}>
            <Film className="mr-2 h-4 w-4" />
            {video.youtubeId ? 'Assistir tutorial' : 'Em breve'}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
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
