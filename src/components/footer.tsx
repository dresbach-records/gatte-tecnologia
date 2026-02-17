import { Logo } from './logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
                <Logo />
                <p className="mt-2 text-sm text-foreground/60">
                    Tecnologia da Informação
                </p>
            </div>

            <a href="https://media.licdn.com/dms/image/v2/D4D2DAQEZJAzcrT9bBA/profile-treasury-document-cover-images_480/B4DZxoP7G9JkBI-/0/1771275535192?e=1771941600&v=beta&t=ougQAczlgjifQ6d0kIkQyJKeVHI6y9jMLfGKVJgNJBA" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
              Certificação
            </a>

            <p className="text-sm text-foreground/60 text-center md:text-right">
                &copy; {currentYear} GATTE Tecnologia. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
