import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const promotions = [
  { title: 'Implantação ERP com Desconto Especial', code: 'GATTEERP10', href: '/solucoes/implantacao-erp-com-desconto-especial' },
  { title: 'Certificado Digital com Condição Especial', code: 'CERTGATTE', href: '/solucoes/certificado-digital-com-condicao-especial' },
  { title: 'Pacote Completo ERP + Treinamento', code: 'ERPSTART', href: '/solucoes/pacote-completo-erp-treinamento' },
  { title: 'Integração PIX e TEF com Desconto', code: 'PAGTECH5', href: '/solucoes/integracao-pix-tef-com-desconto' },
  { title: 'Diagnóstico Gratuito de Sistema', code: 'CHECKUPTI', href: '/solucoes/diagnostico-gratuito-de-sistema' },
  { title: 'Suporte Técnico Prioritário', code: 'SUPVIP', href: '/solucoes/suporte-tecnico-prioritario' },
  { title: 'Implantação Rápida Empresarial', code: 'STARTNOW', href: '/solucoes/implantacao-rapida-empresarial' },
  { title: 'Automação Comercial Completa', code: 'AUTOGATTE', href: '/solucoes/automacao-comercial-completa' },
  { title: 'Pacote PME Tecnologia', code: 'PMEGATTE', href: '/solucoes/pacote-pme-tecnologia' },
  { title: 'Atualização de Sistema com Benefício', code: 'UPGRADE10', href: '/solucoes/atualizacao-de-sistema-com-beneficio' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {promotions.map((promo) => (
                <Link key={promo.code} href={promo.href} className="flex">
                    <Card className="w-full text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex flex-col">
                        <CardHeader className="flex-grow">
                            <CardTitle className="text-base font-semibold">{promo.title}</CardTitle>
                        </CardHeader>
                        <div className="p-4 pt-0 text-center">
                            <Badge variant="secondary" className="bg-accent text-accent-foreground">{promo.code}</Badge>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
