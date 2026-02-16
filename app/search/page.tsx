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
      <Header title="SEARCH" showBack />
      
      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Search Input */}
        <section className="animate-fade-in">
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH RESTAURANTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="y2k-input pl-12 pr-12"
            />
            <SearchIcon 
              className="absolute left-4 top-1/2 -translate-y-1/2" 
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
          <h2 className="y2k-subtitle mb-4">FILTER BY CATEGORY</h2>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`y2k-btn whitespace-nowrap ${selectedCategory === 'all' ? 'y2k-btn-primary' : ''}`}
            >
              ALL
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
            <h2 className="y2k-subtitle">
              {searchQuery ? 'RESULTS' : 'ALL RESTAURANTS'}
            </h2>
            <div className="y2k-mono text-sm">
              {filteredStores.length} FOUND
            </div>
          </div>
          
          {filteredStores.length === 0 ? (
            <div className="text-center py-20">
              <SearchIcon size={80} className="mx-auto mb-6 opacity-20" strokeWidth={2} />
              <h3 className="y2k-subtitle mb-4">NO RESULTS</h3>
              <p className="y2k-mono text-sm opacity-70">
                TRY A DIFFERENT SEARCH TERM
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
            <h2 className="y2k-subtitle mb-4">POPULAR SEARCHES</h2>
            
            <div className="flex flex-wrap gap-2">
              {['BURGER', 'PIZZA', 'SUSHI', 'DESSERT', 'VEGAN', 'FAST FOOD'].map((tag) => (
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
