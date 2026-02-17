import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseProvider } from '@/firebase';
import ChatWidget from '@/components/chat-widget';

export const metadata: Metadata = {
  title: 'GATTE Tecnologia | Soluções em Gestão, TI e Certificação Digital',
  description: 'Especialistas em sistemas de gestão (ERP), certificação digital, implantação, suporte, automação comercial e desenvolvimento de soluções para pequenas e médias empresas.',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <meta name="theme-color" content="#0A2540" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FirebaseProvider>
            {children}
        </FirebaseProvider>
        <Toaster />
        <ChatWidget />
      </body>
    </html>
  );
}
