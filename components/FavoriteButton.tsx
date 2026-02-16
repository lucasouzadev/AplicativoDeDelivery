'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  storeName: string;
}

export function FavoriteButton({ storeName }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="y2k-btn y2k-btn-blue p-3"
      aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      <Heart 
        size={24} 
        fill={isFavorite ? 'currentColor' : 'none'}
      />
    </button>
  );
}
