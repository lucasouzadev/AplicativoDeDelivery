'use client';

import Link from 'next/link';
import { Store } from '@/data/mockData';
import { Star, Clock } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Link href={`/store/${store.id}`}>
      <div className="y2k-card animate-slide-up">
        <div 
          className="y2k-card-image bg-gradient-to-br from-y2k-blue to-y2k-green"
          style={{
            backgroundImage: `linear-gradient(135deg, #A8C5CD 0%, #5F7F61 100%)`
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl opacity-50">{store.category === 'burger' ? '🍔' : store.category === 'pizza' ? '🍕' : store.category === 'sushi' ? '🍣' : '🍰'}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="y2k-subtitle text-xl">{store.name}</h3>
          
          <p className="text-sm opacity-70">{store.description}</p>
          
          <div className="flex items-center justify-between y2k-mono text-xs">
            <div className="flex items-center gap-1">
              <Star size={14} fill="black" />
              <span>{store.rating}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{store.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
