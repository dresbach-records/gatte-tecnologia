import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Youtube } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const videos: {title: string, description: string, href?: string}[] = [
  {
    title: 'Aula 10 - Cadastro de produtos',
    description: 'Um guia detalhado sobre como cadastrar seus produtos no sistema.',
  },
  {
    title: 'Aula 18 - Entrada de estoque (completo)',
    description: 'Domine o processo de entrada de mercadorias no seu estoque.',
  },
  {
    title: 'Aula 37 - Controle de Caixa',
    description: 'Aprenda a fazer a gestão completa do seu fluxo de caixa.',
  },
  {
    title: 'Aula 06 - Cadastro de caixa',
    description: 'Aprenda como realizar o cadastro de caixas em seu sistema.',
    href: 'https://youtu.be/Q-zfv7w3Id8?list=PLBc9EKD_Uy-rBMITzyPHmp7egoTQIjTi1',
  },
];

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
          Aprenda a utilizar os recursos avançados do nosso ERP completo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {videos.map((video) => {
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
                <a
                  key={video.title}
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              );
            }

            return (
              <div key={video.title} className="h-full">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
