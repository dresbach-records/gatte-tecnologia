import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PacotePmePage() {
  const whatsappMessage = encodeURIComponent('Olá! Tenho interesse na oferta "Pacote PME Tecnologia" (código: PMEGATTE). Podemos conversar?');
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
          Código: PMEGATTE
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Pacote PME Tecnologia
        </h1>
        <p className="text-xl text-foreground/80">
          Solução completa para pequenas e médias empresas.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Oferecemos um pacote de tecnologia pensado para as PMEs, incluindo sistema de gestão, automação, suporte e consultoria. Uma solução integrada para impulsionar o crescimento da sua empresa com o melhor custo-benefício.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Conhecer Pacote PMEGATTE</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
