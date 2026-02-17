import { Badge } from '@/components/ui/badge';

const promotions = [
  { title: 'Automação Comercial', code: 'AUTOGEST' },
  { title: 'Criação de Sites', code: 'SITEGATTE' },
  { title: 'Certificação Digital', code: 'CERTGATTE' },
  { title: 'Implantação ERP', code: 'ERPSTART' },
  { title: 'Suporte Técnico', code: 'SUPVIP' },
  { title: 'Integração de Pagamentos', code: 'PAGTECH' },
  { title: 'Desenvolvimento Sob Medida', code: 'DEVPRO' },
];

export default function PromotionsSection() {
  return (
    <section id="promocoes" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Promoções e Ofertas Especiais
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Aproveite nossas soluções com condições exclusivas por tempo limitado.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 text-center">
            {promotions.map((promo) => (
                <div key={promo.code} className="p-4 bg-primary-foreground/10 rounded-lg flex flex-col justify-center items-center h-28">
                    <h3 className="text-sm font-semibold flex-grow flex items-center">{promo.title}</h3>
                    <Badge variant="secondary" className="mt-2 bg-accent text-accent-foreground">{promo.code}</Badge>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
