import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function IntegracaoPixPage() {
  const whatsappMessage = encodeURIComponent('Olá! Tenho interesse na oferta "Integração PIX e TEF com Desconto" (código: PAGTECH5). Podemos conversar?');
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
          Código: PAGTECH5
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Integração PIX e TEF com Desconto
        </h1>
        <p className="text-xl text-foreground/80">
          5% de desconto na integração de meios de pagamento.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Modernize suas formas de recebimento. Integramos soluções de PIX e TEF ao seu sistema de vendas de forma eficiente e segura, agora com um desconto especial para facilitar ainda mais suas transações.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Resgatar Desconto PAGTECH5</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
