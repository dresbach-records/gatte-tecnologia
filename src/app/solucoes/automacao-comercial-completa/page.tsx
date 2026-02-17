import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function AutomacaoComercialPage() {
  const whatsappMessage = encodeURIComponent('Olá! Tenho interesse na oferta "Automação Comercial Completa" (código: AUTOGATTE). Podemos conversar?');
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
          Código: AUTOGATTE
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Automação Comercial Completa
        </h1>
        <p className="text-xl text-foreground/80">
          Condição especial para PDV e controle de estoque.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Transforme sua frente de caixa e a gestão do seu inventário. Oferecemos uma solução completa de automação comercial, incluindo Ponto de Venda (PDV) e controle de estoque, com uma condição especial de contratação.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Automatizar com AUTOGATTE</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
