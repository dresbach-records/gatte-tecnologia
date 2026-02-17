import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'GATTE Tecnologia | Soluções em Gestão, TI e Certificação Digital',
  description: 'Especialistas em sistemas de gestão (ERP), certificação digital, implantação, suporte, automação comercial e desenvolvimento de soluções para pequenas e médias empresas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script src='https://cdn.jotfor.ms/agent/embedjs/019c6bf631da793b963edab2f75ddebb28cb/embed.js' />
      </body>
    </html>
  );
}
