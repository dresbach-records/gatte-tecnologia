import Link from 'next/link';
import Image from 'next/image';
import { Logo } from './logo';
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const navLinks = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#especialidades', label: 'Diferenciais' },
  { href: '/#depoimentos', label: 'Depoimentos' },
  { href: '/#promocoes', label: 'Ofertas' },
  { href: '/#contato', label: 'Contato' },
];

const solutions = [
    { href: '/solucoes/implantacao-erp-com-desconto-especial', label: 'Implantação ERP (Desconto)' },
    { href: '/solucoes/certificado-digital-com-condicao-especial', label: 'Certificado Digital' },
    { href: '/solucoes/pacote-completo-erp-treinamento', label: 'ERP + Treinamento' },
    { href: '/solucoes/integracao-pix-tef-com-desconto', label: 'Integração PIX & TEF' },
    { href: '/solucoes/diagnostico-gratuito-de-sistema', label: 'Diagnóstico Gratuito' },
    { href: '/solucoes/suporte-tecnico-prioritario', label: 'Suporte Prioritário' },
    { href: '/solucoes/implantacao-rapida-empresarial', label: 'Implantação Rápida' },
    { href: '/solucoes/automacao-comercial-completa', label: 'Automação Comercial' },
    { href: '/solucoes/pacote-pme-tecnologia', label: 'Pacote PME' },
    { href: '/solucoes/atualizacao-de-sistema-com-beneficio', label: 'Atualização de Sistema' },
];

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/gatte-tecnologia', name: 'LinkedIn' },
  { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/gattetecnologia', name: 'Facebook' },
  { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/gatte_tecnologia/', name: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Sobre */}
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-4 text-foreground/80 text-sm">
              Soluções completas em gestão, TI e certificação digital para potencializar o seu negócio.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="font-semibold text-primary">Navegação</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-foreground/80 hover:text-accent transition-colors">Início</Link></li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div>
            <h3 className="font-semibold text-primary">Soluções</h3>
            <ul className="mt-4 space-y-2">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href} className="text-sm text-foreground/80 hover:text-accent transition-colors">
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato e Redes Sociais */}
          <div>
            <h3 className="font-semibold text-primary">Contato</h3>
            <ul className="mt-4 space-y-2">
                <li>
                    <a href="https://wa.me/5551933806899" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-foreground/80 hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        WhatsApp
                    </a>
                </li>
                <li>
                    <a href="mailto:contato@gattetecnologia.com.br" className="flex items-center text-sm text-foreground/80 hover:text-accent transition-colors">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                    </a>
                </li>
            </ul>
            <div className="mt-6">
                <h3 className="font-semibold text-primary">Siga-nos</h3>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-foreground/80 hover:text-accent transition-colors">
                      {social.icon}
                    </a>
                  ))}
                </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 text-center sm:text-left">
              &copy; {currentYear} GATTE Tecnologia. Todos os direitos reservados.
          </p>
          <a href="https://media.licdn.com/dms/image/v2/D4D2DAQEZJAzcrT9bBA/profile-treasury-document-cover-images_480/B4DZxoP7G9JkBI-/0/1771275535192?e=1771941600&v=beta&t=ougQAczlgjifQ6d0kIkQyJKeVHI6y9jMLfGKVJgNJBA" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            Certificação
          </a>
        </div>
        <div className="mt-8 flex justify-center">
            <Image
                src="/publicidade/MARCA.png"
                alt="Marca GATTE Tecnologia"
                width={150}
                height={40}
            />
        </div>
      </div>
    </footer>
  );
}
