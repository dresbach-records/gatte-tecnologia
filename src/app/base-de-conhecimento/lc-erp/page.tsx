'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Film, PlayCircle } from 'lucide-react';
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
    <Link href={`/base-de-conhecimento/${video.category}/${video.slug}`} className="block h-full group">
      <Card className="h-full flex flex-col overflow-hidden group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300 transform group-hover:-translate-y-1">
        <div className="relative aspect-video bg-muted">
          {video.youtubeId ? (
            <>
              <Image
                src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={`Capa do vídeo: ${video.title}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="h-16 w-16 text-white/90" />
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Film className="h-12 w-12 text-muted-foreground/40" />
            </div>
          )}
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="text-lg font-semibold text-primary">{video.title}</CardTitle>
          <CardDescription className="mt-2 text-sm text-foreground/70 line-clamp-2">{video.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className={`flex items-center text-sm font-semibold ${video.youtubeId ? 'text-accent' : 'text-muted-foreground'}`}>
                {video.youtubeId ? 'Assistir ao tutorial' : 'Em breve'}
            </p>
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
