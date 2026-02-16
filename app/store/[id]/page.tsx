import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { FavoriteButton } from '@/components/FavoriteButton';
import { stores, products, Product } from '@/data/mockData';
import { Star, Clock, Info } from 'lucide-react';

// Generate static params for all store IDs
export function generateStaticParams() {
  return stores.map((store) => ({
    id: store.id,
  }));
}

export default function StorePage({ params }: { params: { id: string } }) {
  const storeId = params.id;
  const store = stores.find(s => s.id === storeId);
  const storeProducts = products.filter(p => p.storeId === storeId);

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="y2k-title dark:text-y2k-cream">LOJA NÃO ENCONTRADA</div>
      </div>
    );
  }

  const handleAddToCart = (product: Product) => {
    // In a real app, this would update cart state
    alert(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <>
      <Header showBack />
      
      <main className="max-w-7xl mx-auto">
        {/* Store Header */}
        <section className="relative animate-fade-in">
          <div 
            className="h-48 bg-gradient-to-br from-y2k-blue to-y2k-green border-b-4 border-y2k-black"
            style={{
              backgroundImage: `linear-gradient(135deg, #A8C5CD 0%, #5F7F61 100%)`
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-9xl opacity-30">
                {store.category === 'burger' ? '🍔' : 
                 store.category === 'pizza' ? '🍕' : 
                 store.category === 'sushi' ? '🍣' : '🍰'}
              </span>
            </div>
          </div>
          
          <div className="bg-y2k-cream border-b-4 border-y2k-black p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="y2k-title text-3xl mb-2">{store.name}</h1>
                <p className="text-sm opacity-70 mb-3">{store.description}</p>
                
                <div className="flex items-center gap-4 y2k-mono text-sm">
                  <div className="flex items-center gap-1">
                    <Star size={16} fill="black" />
                    <span className="font-bold">{store.rating}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{store.deliveryTime}</span>
                  </div>
                  
                  <div className="y2k-badge">ENTREGA GRÁTIS</div>
                </div>
              </div>
              
              <FavoriteButton storeName={store.name} />
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="p-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-y2k-blue dark:bg-gray-700 border-3 border-y2k-black dark:border-gray-600 p-4 flex items-center gap-3">
            <Info size={24} strokeWidth={3} />
            <p className="y2k-mono text-sm dark:text-y2k-cream">
              <strong>INFO:</strong> Aberto 11h-22h • Pedido mín. R$10
            </p>
          </div>
        </section>

        {/* Menu */}
        <section className="p-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="y2k-subtitle mb-4 dark:text-y2k-cream">CARDÁPIO</h2>
          
          <div className="y2k-grid">
            {storeProducts.map((product, index) => (
              <div 
                key={product.id}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                className="animate-slide-up"
              >
                <ProductCard 
                  product={product} 
                  onAdd={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Popular Items Section */}
        <section className="p-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-y2k-green dark:bg-gray-700 text-white p-6 border-4 border-y2k-black dark:border-gray-600">
            <span className="y2k-badge bg-white text-y2k-black mb-2">POPULAR</span>
            <h3 className="y2k-subtitle mt-2">MAIS PEDIDOS</h3>
            <p className="y2k-mono text-sm mt-2 opacity-90">
              {storeProducts[0]?.name} • Pedido 247 vezes esta semana
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
