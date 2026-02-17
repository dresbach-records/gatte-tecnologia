import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Instagram, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/company/gatte-tecnologia', name: 'LinkedIn' },
  { icon: <Facebook className="h-6 w-6" />, href: 'https://www.facebook.com/gattetecnologia', name: 'Facebook' },
  { icon: <Instagram className="h-6 w-6" />, href: 'https://www.instagram.com/gatte_tecnologia/', name: 'Instagram' },
];

const contactDetails = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 text-accent"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>, text: '+55 51 93380-6899 (WhatsApp)', href: 'https://wa.me/5551933806899' },
    { icon: <Phone className="h-5 w-5 mr-3 text-accent" />, text: '(51) 3786-6302 (Fixo)', href: 'tel:+555137866302' },
    { icon: <Mail className="h-5 w-5 mr-3 text-accent" />, text: 'contato@gattetecnologia.com.br', href: 'mailto:contato@gattetecnologia.com.br' },
]

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Entre em Contato
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Estamos prontos para ouvir sobre seu projeto. Fale conosco e descubra como podemos ajudar.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">
            <div className="space-y-4 text-left">
                {contactDetails.map((detail, index) => (
                    <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-foreground hover:text-accent transition-colors">
                        {detail.icon}
                        <span>{detail.text}</span>
                    </a>
                ))}
            </div>
        </div>
        
        <div className="mt-12">
            <h3 className="text-xl font-semibold text-primary">Siga-nos nas redes sociais</h3>
            <div className="mt-6 flex justify-center gap-6">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
