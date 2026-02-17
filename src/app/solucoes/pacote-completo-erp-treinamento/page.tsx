import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PacoteCompletoPage() {
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
          Código: ERPSTART
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
          Pacote Completo ERP + Treinamento
        </h1>
        <p className="text-xl text-foreground/80">
          Implantação + treinamento incluso sem custo adicional.
        </p>
        <p className="text-lg leading-relaxed text-foreground/70">
          Aderindo ao nosso plano de implantação de ERP, sua equipe recebe um treinamento completo sem custos adicionais. Garantimos que todos estarão aptos a utilizar o sistema em sua totalidade, maximizando o retorno sobre o investimento.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <Link href="/#contato">Começar Agora</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
