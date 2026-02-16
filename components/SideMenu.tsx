'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, User, Edit, MapPin, CreditCard, Settings, HelpCircle, LogOut, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  const menuSections = [
    {
      title: 'CONTA',
      items: [
        { 
          icon: User, 
          label: 'Perfil ID', 
          sublabel: 'USER.2000',
          onClick: () => handleNavigation('/profile') 
        },
        { 
          icon: Edit, 
          label: 'Editar Perfil', 
          onClick: () => handleNavigation('/profile') 
        },
        { 
          icon: MapPin, 
          label: 'Endereço', 
          onClick: () => {} 
        },
        { 
          icon: CreditCard, 
          label: 'Métodos de Pagamento', 
          onClick: () => handleNavigation('/payment') 
        },
      ]
    },
    {
      title: 'CONFIGURAÇÕES',
      items: [
        { 
          icon: Settings, 
          label: 'Preferências', 
          onClick: () => {} 
        },
        { 
          icon: HelpCircle, 
          label: 'Suporte', 
          onClick: () => {} 
        },
      ]
    }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-y2k-cream dark:bg-gray-900 border-r-4 border-y2k-black dark:border-gray-700 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b-4 border-y2k-black dark:border-gray-700 flex items-center justify-between">
            <h2 className="y2k-title text-2xl dark:text-y2k-cream">MENU</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-y2k-blue dark:hover:bg-gray-800 transition-colors"
            >
              <X size={24} strokeWidth={3} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {menuSections.map((section, index) => (
              <div key={index}>
                <h3 className="y2k-subtitle text-sm mb-3 opacity-70 dark:text-y2k-cream">
                  {section.title}
                </h3>
                
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={itemIndex}
                        onClick={item.onClick}
                        className="w-full flex items-center gap-3 p-3 border-3 border-y2k-black dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-y2k-blue dark:hover:bg-gray-700 transition-colors"
                      >
                        <Icon size={20} strokeWidth={3} className="dark:text-y2k-cream" />
                        <div className="flex-1 text-left">
                          <div className="y2k-mono text-sm font-bold dark:text-y2k-cream">
                            {item.label}
                          </div>
                          {item.sublabel && (
                            <div className="text-xs opacity-70 dark:text-gray-400">
                              {item.sublabel}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Dark Mode Toggle */}
            <div>
              <h3 className="y2k-subtitle text-sm mb-3 opacity-70 dark:text-y2k-cream">
                APARÊNCIA
              </h3>
              
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 p-3 border-3 border-y2k-black dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-y2k-blue dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'light' ? (
                  <Moon size={20} strokeWidth={3} className="dark:text-y2k-cream" />
                ) : (
                  <Sun size={20} strokeWidth={3} className="dark:text-y2k-cream" />
                )}
                <div className="flex-1 text-left">
                  <div className="y2k-mono text-sm font-bold dark:text-y2k-cream">
                    Tema {theme === 'light' ? 'Escuro' : 'Claro'}
                  </div>
                </div>
              </button>
            </div>

            {/* Logout */}
            <div>
              <button
                onClick={() => handleNavigation('/login')}
                className="w-full flex items-center gap-3 p-3 border-3 border-red-600 dark:border-red-500 bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 text-white transition-colors"
              >
                <LogOut size={20} strokeWidth={3} />
                <div className="flex-1 text-left">
                  <div className="y2k-mono text-sm font-bold">
                    Sair
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t-4 border-y2k-black dark:border-gray-700 text-center">
            <p className="y2k-mono text-xs opacity-70 dark:text-gray-400">
              Y2K DELIVERY<br />
              Versão 1.0.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
