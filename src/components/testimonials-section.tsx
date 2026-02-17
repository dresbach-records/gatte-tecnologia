import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "João Silva",
    company: "Diretor da Indústria XYZ",
    avatar: "JS",
    quote: "A GATTE transformou nossa gestão. O sistema ERP implementado otimizou todos os processos e o suporte é incrivelmente ágil. Deixamos de apagar incêndios para focar na estratégia.",
  },
  {
    name: "Maria Souza",
    company: "Gerente da Varejo ABC",
    avatar: "MS",
    quote: "Tínhamos muitos problemas com o controle fiscal e perdíamos tempo com retrabalho. A consultoria da GATTE foi fundamental para nos deixar em conformidade e com muito mais segurança nas operações.",
  },
  {
    name: "Carlos Pereira",
    company: "Sócio da Serviços XPTO",
    avatar: "CP",
    quote: "Como uma PME, precisávamos de tecnologia de ponta que coubesse no orçamento. O Pacote PME da GATTE foi a solução perfeita, com um custo-benefício que realmente fez a diferença para o nosso crescimento.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Histórias reais de empresas que transformaram seus resultados com a nossa parceria.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col border">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/70">{testimonial.company}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
