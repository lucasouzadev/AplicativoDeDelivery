'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingCart, History } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'INÍCIO' },
    { href: '/search', icon: Search, label: 'BUSCAR' },
    { href: '/cart', icon: ShoppingCart, label: 'CARRINHO' },
    { href: '/history', icon: History, label: 'HISTÓRICO' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={24} strokeWidth={2.5} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
