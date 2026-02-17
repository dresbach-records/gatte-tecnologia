import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function SuporteTecnicoPage() {
  const whatsappMessage = encodeURIComponent('Olá! Tenho interesse na oferta "Suporte Técnico Prioritário" (código: SUPVIP). Podemos conversar?');
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
          Código: SUPVIP
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Suporte Técnico Prioritário
        </h1>
        <p className="text-xl text-foreground/80">
          Atendimento técnico prioritário para novos contratos.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Sua empresa não pode parar. Com nosso plano de suporte prioritário, você tem acesso a uma equipe de especialistas pronta para resolver qualquer problema com agilidade e eficiência, garantindo a continuidade das suas operações.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Contratar Suporte SUPVIP</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
