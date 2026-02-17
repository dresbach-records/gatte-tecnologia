import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ImplantacaoRapidaPage() {
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
          Código: STARTNOW
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Implantação Rápida Empresarial
        </h1>
        <p className="text-xl text-foreground/80">
          Implantação acelerada para empresas que precisam começar imediato.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Precisa de um sistema de gestão para ontem? Nosso processo de implantação rápida coloca sua empresa em operação no menor tempo possível, sem abrir mão da qualidade e do suporte necessário para um início de sucesso.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <Link href="/#contato">Iniciar Imediatamente</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
