'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-y2k-cream dark:bg-gray-900">
      <div className="text-center max-w-md animate-fade-in">
        <div className="y2k-title text-8xl mb-4 dark:text-y2k-cream">404</div>
        <h1 className="y2k-subtitle text-3xl mb-4 dark:text-y2k-cream">
          PÁGINA NÃO ENCONTRADA
        </h1>
        <p className="y2k-mono text-sm mb-8 opacity-70 dark:text-gray-400">
          A página que você procura não existe ou foi movida.
        </p>
        <Link href="/" className="y2k-btn y2k-btn-primary inline-flex items-center gap-2">
          <Home size={20} />
          VOLTAR PARA HOME
        </Link>
      </div>
    </div>
  );
}
