'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Youtube } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const videos: {title: string, description: string, href?: string}[] = [
  {
    title: 'PDV NFC-e vendas completo',
    description: 'Um tutorial completo sobre vendas no Ponto de Venda com NFC-e.',
    href: 'https://youtu.be/bo1W3Mt3H9w?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv',
  },
  {
    title: 'Atendimento de balcão',
    description: 'Otimize suas vendas rápidas com o módulo de atendimento de balcão.',
    href: 'https://youtu.be/vwrSCpgcPag?list=PLBc9EKD_Uy-rbuYp9U5P1mTIhSOsBxIVv',
  },
  {
    title: 'Gourmet (completo)',
    description: 'Veja como gerenciar mesas, pedidos e o dia a dia de restaurantes.',
  },
];

function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2] && match[2].length === 11) ? match[2] : null;
}

const VideoCard = ({ video }: { video: { title: string, description: string, href?: string } }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = video.href ? getYouTubeId(video.href) : null;

  const handlePlayClick = () => {
    if (videoId) {
      setIsPlaying(true);
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-0">
        {isPlaying && videoId ? (
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-t-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div
            onClick={videoId ? handlePlayClick : undefined}
            className={`aspect-video bg-muted flex items-center justify-center rounded-t-lg relative group ${videoId ? 'cursor-pointer' : ''}`}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Youtube className={`h-16 w-16 text-muted-foreground/50 ${videoId ? 'transition-all group-hover:text-primary z-10 group-hover:scale-110' : ''}`} />
          </div>
        )}
      </CardContent>
      <CardHeader className="flex-grow">
        <CardTitle>{video.title}</CardTitle>
        <CardDescription>{video.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default function AutomacaoComercialPage() {
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
          Tutoriais em Vídeo - Automação Comercial
        </h1>
        <p className="text-xl text-foreground/80">
          Otimize sua operação de varejo com nossos guias práticos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
