'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { User, MapPin, CreditCard, Bell, HelpCircle, LogOut, ChevronRight, Star, Package } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();

  const profileSections = [
    {
      title: 'ACCOUNT',
      items: [
        { icon: User, label: 'EDIT PROFILE', onClick: () => {} },
        { icon: MapPin, label: 'ADDRESSES', onClick: () => {} },
        { icon: CreditCard, label: 'PAYMENT METHODS', onClick: () => router.push('/payment') },
      ]
    },
    {
      title: 'PREFERENCES',
      items: [
        { icon: Bell, label: 'NOTIFICATIONS', onClick: () => {} },
        { icon: Star, label: 'FAVORITES', onClick: () => {} },
        { icon: Package, label: 'ORDER HISTORY', onClick: () => router.push('/history') },
      ]
    },
    {
      title: 'SUPPORT',
      items: [
        { icon: HelpCircle, label: 'HELP CENTER', onClick: () => {} },
        { icon: LogOut, label: 'LOGOUT', onClick: () => router.push('/login'), danger: true },
      ]
    }
  ];

  return (
    <>
      <Header title="PERFIL" />
      
      <main className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <section className="animate-fade-in">
          <div className="y2k-card bg-y2k-blue">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-y2k-green to-y2k-black border-3 border-y2k-black rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
              
              <div className="flex-1">
                <h2 className="y2k-title text-2xl mb-1">USER.2000</h2>
                <p className="y2k-mono text-sm opacity-70">user@y2k.com</p>
                
                <div className="flex gap-3 mt-3 y2k-mono text-xs">
                  <div>
                    <strong>24</strong> ORDERS
                  </div>
                  <div>
                    <strong>$847</strong> SPENT
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="black" />
                    <strong>4.9</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Sections */}
        {profileSections.map((section, sectionIndex) => (
          <section 
            key={section.title}
            className="animate-slide-up"
            style={{ animationDelay: `${0.1 + sectionIndex * 0.1}s` }}
          >
            <h3 className="y2k-subtitle mb-3">{section.title}</h3>
            
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    onClick={item.onClick}
                    className={`w-full y2k-card hover:bg-y2k-cream transition-colors ${
                      item.danger ? 'border-red-600' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 border-3 border-y2k-black flex items-center justify-center ${
                          item.danger ? 'bg-red-600' : 'bg-white'
                        }`}>
                          <Icon 
                            size={24} 
                            strokeWidth={3}
                            color={item.danger ? 'white' : 'black'}
                          />
                        </div>
                        
                        <span className={`y2k-mono font-bold ${
                          item.danger ? 'text-red-600' : ''
                        }`}>
                          {item.label}
                        </span>
                      </div>
                      
                      <ChevronRight size={24} strokeWidth={3} />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        ))}

        {/* Promo Banner */}
        <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-y2k-green text-white p-6 border-4 border-y2k-black">
            <span className="y2k-badge bg-white text-y2k-black mb-2">MEMBER SINCE</span>
            <h3 className="y2k-subtitle mt-2">JAN 2024</h3>
            <p className="y2k-mono text-sm mt-2 opacity-90">
              THANKS FOR BEING WITH US! 🎉
            </p>
          </div>
        </section>

        {/* App Info */}
        <section className="text-center py-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="y2k-mono text-xs opacity-70">
            Y2K DELIVERY APP<br />
            VERSION 1.0.0 • 2024<br />
            MADE WITH 💚
          </p>
        </section>
      </main>
    </>
  );
}
