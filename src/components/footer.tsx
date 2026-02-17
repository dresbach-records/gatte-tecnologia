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
            <p className="text-sm text-foreground/60 text-center md:text-right">
                &copy; {currentYear} GATTE Tecnologia. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
