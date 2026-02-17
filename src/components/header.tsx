'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navLinks = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#especialidades', label: 'Diferenciais' },
  { href: '/#depoimentos', label: 'Depoimentos' },
  { href: '/#promocoes', label: 'Ofertas' },
];

const solutions = [
    { href: '/solucoes/implantacao-erp-com-desconto-especial', label: 'Implantação ERP com Desconto' },
    { href: '/solucoes/certificado-digital-com-condicao-especial', label: 'Certificado Digital Especial' },
    { href: '/solucoes/pacote-completo-erp-treinamento', label: 'Pacote ERP + Treinamento' },
    { href: '/solucoes/integracao-pix-tef-com-desconto', label: 'Integração PIX e TEF' },
    { href: '/solucoes/diagnostico-gratuito-de-sistema', label: 'Diagnóstico Gratuito de Sistema' },
    { href: '/solucoes/suporte-tecnico-prioritario', label: 'Suporte Técnico Prioritário' },
    { href: '/solucoes/implantacao-rapida-empresarial', label: 'Implantação Rápida' },
    { href: '/solucoes/automacao-comercial-completa', label: 'Automação Comercial' },
    { href: '/solucoes/pacote-pme-tecnologia', label: 'Pacote PME Tecnologia' },
    { href: '/solucoes/atualizacao-de-sistema-com-beneficio', label: 'Atualização de Sistema' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Página inicial">
          <Logo />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-4 text-sm font-medium">
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80 px-2 py-1">Início</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/60 transition-colors hover:text-foreground/80 focus:outline-none px-2 py-1">
              Soluções <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {solutions.map((solution) => (
                <DropdownMenuItem key={solution.href} asChild>
                  <Link href={solution.href}>{solution.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80 px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="/#contato">Fale com um Especialista</Link>
          </Button>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background shadow-lg">
          <nav className="flex flex-col items-center gap-1 p-4">
              <Link href="/" onClick={handleLinkClick} className="text-foreground/80 transition-colors hover:text-foreground w-full text-center py-2 rounded-md hover:bg-muted">Início</Link>
              
              <Collapsible open={isSolutionsOpen} onOpenChange={setIsSolutionsOpen} className="w-full">
                <CollapsibleTrigger className="flex items-center justify-center gap-1 text-foreground/80 transition-colors hover:text-foreground w-full text-center py-2 rounded-md hover:bg-muted">
                  Soluções <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col items-center gap-1 mt-1 mx-4 p-2 bg-muted/50 rounded-md">
                    {solutions.map((solution) => (
                       <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={handleLinkClick}
                        className="text-foreground/70 transition-colors hover:text-foreground w-full text-center py-2 rounded-md hover:bg-background"
                      >
                        {solution.label}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-foreground/80 transition-colors hover:text-foreground w-full text-center py-2 rounded-md hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2">
                <Link href="/#contato" onClick={handleLinkClick}>Fale com um Especialista</Link>
              </Button>
            </nav>
        </div>
      )}
    </header>
  );
}
