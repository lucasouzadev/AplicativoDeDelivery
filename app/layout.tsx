'use client';

import './globals.css';
import BottomNav from '@/components/BottomNav';
import SideMenu from '@/components/SideMenu';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MenuProvider, useMenu } from '@/components/MenuContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isMenuOpen, closeMenu } = useMenu();

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
