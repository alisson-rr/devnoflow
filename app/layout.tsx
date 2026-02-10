import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alisson Rosa — Desenvolvimento de Plataformas Digitais',
  description:
    'Sistemas bem pensados não chamam atenção. Eles simplesmente funcionam. Desenvolvimento de plataformas digitais focadas em operação, clareza e escala.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#09090b] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
