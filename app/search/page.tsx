'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import StoreCard from '@/components/StoreCard';
import { stores, categories } from '@/data/mockData';
import { Search as SearchIcon, X } from 'lucide-react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header title="BUSCAR" showBack />
      
      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Search Input */}
        <section className="animate-fade-in">
          <div className="relative">
            <input
              type="text"
              placeholder="BUSCAR RESTAURANTES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="y2k-input pl-12 pr-12"
            />
            <SearchIcon 
              className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-gray-400" 
              size={20} 
              strokeWidth={3}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-y2k-blue transition-colors"
              >
                <X size={20} strokeWidth={3} />
              </button>
            )}
          </div>
        </section>

        {/* Category Filters */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="y2k-subtitle mb-4 dark:text-y2k-cream">FILTRAR POR CATEGORIA</h2>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`y2k-btn whitespace-nowrap ${selectedCategory === 'all' ? 'y2k-btn-primary' : ''}`}
            >
              TODOS
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`y2k-btn whitespace-nowrap ${selectedCategory === category.id ? 'y2k-btn-blue' : ''}`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="y2k-subtitle dark:text-y2k-cream">
              {searchQuery ? 'RESULTADOS' : 'TODOS OS RESTAURANTES'}
            </h2>
            <div className="y2k-mono text-sm dark:text-y2k-cream">
              {filteredStores.length} ENCONTRADOS
            </div>
          </div>
          
          {filteredStores.length === 0 ? (
            <div className="text-center py-20">
              <SearchIcon size={80} className="mx-auto mb-6 opacity-20" strokeWidth={2} />
              <h3 className="y2k-subtitle mb-4 dark:text-y2k-cream">SEM RESULTADOS</h3>
              <p className="y2k-mono text-sm opacity-70 dark:text-gray-400">
                TENTE OUTRO TERMO DE BUSCA
              </p>
            </div>
          ) : (
            <div className="y2k-grid">
              {filteredStores.map((store, index) => (
                <div 
                  key={store.id}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  className="animate-slide-up"
                >
                  <StoreCard store={store} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Popular Searches */}
        {!searchQuery && (
          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="y2k-subtitle mb-4 dark:text-y2k-cream">BUSCAS POPULARES</h2>
            
            <div className="flex flex-wrap gap-2">
              {['HAMBÚRGUER', 'PIZZA', 'SUSHI', 'SOBREMESA', 'VEGANO', 'FAST FOOD'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="y2k-badge hover:bg-y2k-blue transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
