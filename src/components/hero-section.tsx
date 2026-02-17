import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroBackground = () => (
    <div
      className="absolute inset-0 z-0 opacity-10"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(to right, hsl(var(--primary)) 0.5px, hsl(var(--background)) 0.5px)',
        backgroundSize: '2rem 2rem',
      }}
    />
);

export default function HeroSection() {
  return (
    <section id="inicio" className="relative py-24 md:py-32 lg:py-40 bg-background">
      <HeroBackground />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Soluções em gestão, TI e certificação digital
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
          Potencializamos o seu negócio com tecnologia de ponta, da gestão empresarial à segurança digital, garantindo eficiência e tranquilidade para sua empresa crescer.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <Link href="#contato">Fale com um Especialista</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
