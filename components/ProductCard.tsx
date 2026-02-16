'use client';

import { Product } from '@/data/mockData';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="y2k-card">
      <div 
        className="y2k-card-image bg-gradient-to-br from-y2k-green to-y2k-blue"
        style={{
          backgroundImage: `linear-gradient(135deg, #5F7F61 0%, #A8C5CD 100%)`
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-5xl opacity-50">
            {product.category === 'burger' ? '🍔' : 
             product.category === 'pizza' ? '🍕' : 
             product.category === 'sushi' ? '🍣' : '🍰'}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="y2k-mono text-lg font-bold">{product.name}</h3>
          <span className="y2k-badge">${product.price}</span>
        </div>
        
        <p className="text-xs opacity-70 leading-relaxed">{product.description}</p>
        
        {onAdd && (
          <button
            onClick={() => onAdd(product)}
            className="y2k-btn y2k-btn-primary w-full flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            ADD
          </button>
        )}
      </div>
    </div>
  );
}
