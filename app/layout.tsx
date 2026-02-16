'use client';

import './globals.css';
import { useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import SideMenu from '@/components/SideMenu';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MenuProvider, useMenu } from '@/components/MenuContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isMenuOpen, closeMenu } = useMenu();

  // Set document title
  useEffect(() => {
    document.title = 'Y2K Delivery - App de Delivery Retrô';
  }, []);

  return (
    <>
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <div className="min-h-screen pb-20 dark:bg-gray-900">
        {children}
      </div>
      <BottomNav />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="App de delivery com design Y2K/Anos 2000" />
      </head>
      <body>
        <ThemeProvider>
          <MenuProvider>
            <LayoutContent>{children}</LayoutContent>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
