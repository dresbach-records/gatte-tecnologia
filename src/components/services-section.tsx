import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LayoutGrid,
  ShieldCheck,
  HardDriveUpload,
  Headset,
  CreditCard,
  ShoppingCart,
  Code,
  Globe,
} from 'lucide-react';

const services = [
  {
    icon: <LayoutGrid className="h-8 w-8 text-accent" />,
    title: 'Sistemas de Gestão Empresarial',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Certificação Digital',
  },
  {
    icon: <HardDriveUpload className="h-8 w-8 text-accent" />,
    title: 'Implantação de Sistemas',
  },
  {
    icon: <Headset className="h-8 w-8 text-accent" />,
    title: 'Suporte Técnico Especializado',
  },
  {
    icon: <CreditCard className="h-8 w-8 text-accent" />,
    title: 'Integração de Pagamentos',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'Automação Comercial',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Desenvolvimento de Sistemas',
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Criação de Sites',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Soluções completas para transformar a gestão e a operação do seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center justify-center h-full">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-primary">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
