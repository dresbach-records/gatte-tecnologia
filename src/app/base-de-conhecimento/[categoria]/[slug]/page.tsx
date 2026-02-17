'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { videos } from '@/lib/videos';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function getCategoryName(category: string | string[] | undefined): string {
    if (typeof category !== 'string') return 'Categoria';
    switch (category) {
        case 'lc-erp': return 'LC ERP';
        case 'lc-web': return 'LC Web';
        case 'automacao-comercial': return 'Automação Comercial';
        default: return 'Categoria';
    }
}

export default function VideoPage() {
  const params = useParams();
  const { slug, categoria } = params;

  const video = videos.find(v => v.slug === slug && v.category === categoria);

  if (!video) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Vídeo não encontrado</h1>
        <Button asChild variant="link" className="mt-4">
          <Link href="/base-de-conhecimento">Voltar para a Base de Conhecimento</Link>
        </Button>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Olá! Assisti ao tutorial "${video.title}" e ainda tenho uma dúvida. Poderiam me ajudar?`);
  const whatsappLink = `https://wa.me/5551933806899?text=${whatsappMessage}`;
  const categoryName = getCategoryName(categoria);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href={`/base-de-conhecimento/${video.category}`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para {categoryName}
        </Link>
      </Button>
      <div className="space-y-8">
        <div>
            <Badge variant="secondary" className="mb-2">{categoryName}</Badge>
            <h1 className="text-3xl font-extrabold tracking-tighter text-primary sm:text-4xl">
            {video.title}
            </h1>
            <p className="text-lg text-foreground/80 mt-2">
            {video.description}
            </p>
        </div>
        
        <div className="aspect-video w-full">
          {video.youtubeId ? (
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
             <div className="w-full h-full bg-muted rounded-lg flex flex-col items-center justify-center text-center p-8">
                <Youtube className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground font-medium">Vídeo indisponível no momento.</p>
                <p className="text-muted-foreground text-sm">Entre em contato para mais informações.</p>
            </div>
          )}
        </div>

        <Card className="bg-secondary/50 border-green-500/50 border-l-4 mt-12">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-primary">Ainda precisa de ajuda?</h3>
                    <p className="text-foreground/80 mt-1">Se mesmo com o tutorial sua dúvida não foi resolvida, nossa equipe de especialistas está pronta para ajudar.</p>
                </div>
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Chamar no WhatsApp
                    </a>
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
