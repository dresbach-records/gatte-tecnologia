import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, LifeBuoy } from 'lucide-react';

const categories = [
  {
    title: 'LC Web',
    description: 'Tutoriais sobre o sistema de gestão online.',
    href: '/base-de-conhecimento/lc-web',
    icon: <BookOpen className="h-10 w-10 text-accent" />,
  },
  {
    title: 'LC ERP',
    description: 'Guias avançados para o nosso ERP completo.',
    href: '/base-de-conhecimento/lc-erp',
    icon: <BookOpen className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Automação Comercial',
    description: 'Vídeos sobre PDV, estoque e automação.',
    href: '/base-de-conhecimento/automacao-comercial',
    icon: <LifeBuoy className="h-10 w-10 text-accent" />,
  }
];

export default function BaseDeConhecimentoPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
            Base de Conhecimento
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Encontre tutoriais, guias em vídeo e respostas para as dúvidas mais comuns sobre nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.title} href={category.href} className="block">
              <Card className="h-full hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{category.title}</CardTitle>
                  <CardDescription className="mt-2 text-foreground/70">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
