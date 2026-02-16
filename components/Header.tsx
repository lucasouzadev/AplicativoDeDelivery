'use client';

import { ArrowLeft, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMenu } from './MenuContext';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export default function Header({ title, showBack = false }: HeaderProps) {
  const router = useRouter();
  const { openMenu } = useMenu();

  return (
    <header className="sticky top-0 z-50 bg-y2k-cream dark:bg-gray-900 border-b-4 border-y2k-black dark:border-gray-700 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {showBack ? (
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-y2k-blue dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={24} strokeWidth={3} className="dark:text-y2k-cream" />
          </button>
        ) : (
          <button 
            onClick={openMenu}
            className="p-2 hover:bg-y2k-blue dark:hover:bg-gray-800 transition-colors"
          >
            <Menu size={24} strokeWidth={3} className="dark:text-y2k-cream" />
          </button>
        )}
        
        {title && (
          <h1 className="y2k-subtitle text-center flex-1 dark:text-y2k-cream">{title}</h1>
        )}
        
        <div className="w-10"></div>
      </div>
    </header>
  );
}
