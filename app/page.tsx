'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import StoreCard from '@/components/StoreCard';
import { stores, categories } from '@/data/mockData';
import { Search } from 'lucide-react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredStores = selectedCategory === 'all' 
    ? stores 
    : stores.filter(store => store.category === selectedCategory);

  return (
    <>
      <Header title="Y2K DELIVERY" />
      
      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Hero Section */}
        <section className="animate-fade-in">
          <div className="bg-y2k-black dark:bg-gray-800 text-y2k-cream p-8 border-4 border-y2k-black dark:border-gray-700">
            <h1 className="y2k-title mb-2">BEM-VINDO AO</h1>
            <h2 className="y2k-title text-y2k-blue">FUTURO.</h2>
            <p className="y2k-mono text-sm mt-4 opacity-80">
              DELIVERY.2000 - MOVIDO POR NOSTALGIA
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            <input
              type="text"
              placeholder="BUSCAR RESTAURANTES..."
              className="y2k-input pl-12"
            />
            <Search 
              className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-gray-400" 
              size={20} 
              strokeWidth={3}
            />
          </div>
        </section>

        {/* Categories */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="y2k-subtitle mb-4 dark:text-y2k-cream">CATEGORIAS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`y2k-btn ${selectedCategory === 'all' ? 'y2k-btn-primary' : ''}`}
            >
              TODOS
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`y2k-btn ${selectedCategory === category.id ? 'y2k-btn-blue' : ''}`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Stores */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="y2k-subtitle mb-4 dark:text-y2k-cream">
            {selectedCategory === 'all' ? 'LOJAS EM DESTAQUE' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          <div className="y2k-grid">
            {filteredStores.map((store, index) => (
              <div 
                key={store.id}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                className="animate-slide-up"
              >
                <StoreCard store={store} />
              </div>
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-y2k-green dark:bg-gray-700 text-white p-6 border-4 border-y2k-black dark:border-gray-600">
            <span className="y2k-badge bg-y2k-blue text-y2k-black mb-2">NOVO USUÁRIO</span>
            <h3 className="y2k-subtitle mt-2">GANHE 50% OFF</h3>
            <p className="y2k-mono text-sm mt-2 opacity-90">
              SEU PRIMEIRO PEDIDO - USE O CÓDIGO: Y2K2024
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
