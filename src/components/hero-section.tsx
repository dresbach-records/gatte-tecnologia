import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative py-24 sm:py-32 lg:py-40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Transforme sua gestão, impulsione seus resultados
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
          Elimine falhas, otimize processos e ganhe tranquilidade para focar no que realmente importa: o crescimento do seu negócio. Descubra como nossa consultoria e tecnologia integrada podem destravar o potencial da sua empresa.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/solucoes/diagnostico-gratuito-de-sistema">Agendar Diagnóstico Gratuito</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/#servicos">Conheça Nossas Soluções</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
