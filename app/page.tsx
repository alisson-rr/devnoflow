import Hero from '@/components/Hero';
import Posicionamento from '@/components/Posicionamento';
import Problemas from '@/components/Problemas';
import Projetos from '@/components/Projetos';
import Confidencialidade from '@/components/Confidencialidade';
import ComoTrabalho from '@/components/ComoTrabalho';
import Stack from '@/components/Stack';
import CTAFinal from '@/components/CTAFinal';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Posicionamento />
      <Problemas />
      <Projetos />
      <Confidencialidade />
      <ComoTrabalho />
      <Stack />
      <CTAFinal />

      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Alisson Rosa</p>
          <p className="text-zinc-700 text-sm">
            Desenvolvimento de plataformas digitais
          </p>
        </div>
      </footer>
    </main>
  );
}
