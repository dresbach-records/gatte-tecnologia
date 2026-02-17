import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div className="relative mb-10 lg:mb-0">
                <Image
                    src="/publicidade/Cópia de PRECISA DE (1).png"
                    alt="Equipe GATTE pronta para ajudar"
                    width={600}
                    height={450}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="team meeting"
                />
            </div>
            <div className="lg:mt-0">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Sobre a GATTE Tecnologia
                </h2>
                <p className="mt-6 text-lg leading-8 text-foreground/80">
                    Com mais de 10 anos de experiência no mercado de Tecnologia da Informação, a GATTE Tecnologia é sua parceira estratégica para o sucesso. Nosso foco é entregar soluções que otimizam processos, aumentam a eficiência e garantem a segurança das operações da sua empresa. Atendemos a uma ampla gama de segmentos, oferecendo desde sistemas de gestão robustos até suporte técnico especializado, sempre com o compromisso de impulsionar o seu crescimento.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
