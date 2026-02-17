'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#especialidades', label: 'Diferenciais' },
  { href: '#promocoes', label: 'Ofertas' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#inicio">
          <Logo />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          <Link href="#inicio" className="text-foreground/60 transition-colors hover:text-foreground/80">Início</Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="#contato">Fale com um Especialista</Link>
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
          <nav className="flex flex-col items-center gap-4 p-4">
            <Link href="#inicio" onClick={handleLinkClick} className="text-foreground/80 transition-colors hover:text-foreground w-full text-center py-2 rounded-md hover:bg-muted">Início</Link>
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
              <Link href="#contato" onClick={handleLinkClick}>Fale com um Especialista</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
