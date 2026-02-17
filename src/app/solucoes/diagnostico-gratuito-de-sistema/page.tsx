import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function DiagnosticoGratuitoPage() {
  const whatsappMessage = encodeURIComponent('Olá! Tenho interesse na oferta "Diagnóstico Gratuito de Sistema" (código: CHECKUPTI). Podemos conversar?');
  const whatsappLink = `https://wa.me/5551933806899?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Home
        </Link>
      </Button>
      <div className="space-y-6">
        <Badge variant="secondary" className="bg-accent text-accent-foreground text-sm">
          Código: CHECKUPTI
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Diagnóstico Gratuito de Sistema
        </h1>
        <p className="text-xl text-foreground/80">
          Avaliação gratuita da gestão e estrutura tecnológica da empresa.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Não tem certeza se sua tecnologia está atendendo bem ao seu negócio? Oferecemos um diagnóstico completo da sua infraestrutura de TI e sistemas de gestão, identificando pontos de melhoria e oportunidades de otimização, sem custo algum.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar Diagnóstico CHECKUPTI</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
