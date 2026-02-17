import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const specialties = [
  'Gestão Fiscal e Financeira',
  'Consultoria em Processos',
  'Tecnologia para PME',
  'Segurança e Organização de Ambientes Empresariais',
];

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Nossos Diferenciais Técnicos
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Vamos além do básico para oferecer soluções que realmente fazem a diferença no seu dia a dia, com foco em estratégia, segurança e crescimento.
            </p>
            <ul className="mt-10 space-y-4">
              {specialties.map((specialty, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <p className="ml-3 text-lg font-medium text-primary">
                    {specialty}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
            <Image
                src="/publicidade/Cópia de dash - tenha indicadores diarios.png"
                alt="Dashboard de indicadores"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="dashboard analytics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
