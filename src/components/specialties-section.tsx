import { CheckCircle2 } from 'lucide-react';

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
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Nossos Diferenciais Técnicos
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Vamos além do básico para oferecer soluções que realmente fazem a diferença no seu dia a dia, com foco em estratégia, segurança e crescimento.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <ul className="space-y-4">
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
        </div>
      </div>
    </section>
  );
}
