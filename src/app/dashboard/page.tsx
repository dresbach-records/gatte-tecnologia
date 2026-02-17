'use client';

import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, loading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null; // or a redirect component
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
       <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">
            Área do Cliente
        </h1>
        <p className="text-xl text-foreground/80">
            Bem-vindo(a), {user.displayName || user.email}!
        </p>
        <p className="text-lg text-foreground/70">
            Este é o seu espaço. Em breve, você encontrará informações sobre seus serviços, suporte e muito mais.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
                <Link href="/base-de-conhecimento">Acessar Base de Conhecimento</Link>
            </Button>
            <Button variant="destructive" onClick={handleSignOut}>Sair da Conta</Button>
        </div>
       </div>
    </div>
  );
}
