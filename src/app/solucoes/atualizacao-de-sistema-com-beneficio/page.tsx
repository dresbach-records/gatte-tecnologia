import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function AtualizacaoSistemaPage() {
  const whatsappMessage = encodeURIComponent('Olá! Tenho interesse na oferta "Atualização de Sistema com Benefício" (código: UPGRADE10). Podemos conversar?');
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
          Código: UPGRADE10
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Atualização de Sistema com Benefício
        </h1>
        <p className="text-xl text-foreground/80">
          Condição especial para migração ou atualização de sistema.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Seu sistema atual está obsoleto? Oferecemos uma condição especial para você migrar para uma tecnologia mais moderna ou atualizar sua versão atual, garantindo mais performance, segurança e novas funcionalidades.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Atualizar com Benefício UPGRADE10</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
