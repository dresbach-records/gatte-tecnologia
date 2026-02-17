import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ImplantacaoErpPage() {
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
          Código: GATTEERP10
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Implantação ERP com Desconto Especial
        </h1>
        <p className="text-xl text-foreground/80">
          10% de desconto na implantação de sistema de gestão empresarial.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Nossa equipe especializada garante uma transição suave para um novo sistema ERP, customizado para as necessidades do seu negócio. Com esta oferta, você otimiza seus processos, ganha eficiência e ainda economiza.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <Link href="/#contato">Quero esse Desconto</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
