import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Youtube } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const videos = [
  {
    title: 'Aula 14 - PDV NFC-e vendas completo',
    description: 'Um tutorial completo sobre vendas no Ponto de Venda com NFC-e.',
  },
  {
    title: 'Aula 17 - Gourmet (completo)',
    description: 'Veja como gerenciar mesas, pedidos e o dia a dia de restaurantes.',
  },
  {
    title: 'Aula 13 - Atendimento de balcão',
    description: 'Otimize suas vendas rápidas com o módulo de atendimento de balcão.',
  },
];

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
            <Card key={video.title}>
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
          ))}
        </div>
      </div>
    </div>
  );
}
