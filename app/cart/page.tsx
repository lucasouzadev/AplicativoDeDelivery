'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { products, Product } from '@/data/mockData';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

interface CartItem {
  product: Product;
  quantity: number;
}

export default function CartPage() {
  const router = useRouter();
  
  // Mock cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 2 },
    { product: products[1], quantity: 1 },
    { product: products[7], quantity: 1 },
  ]);

  const updateQuantity = (productId: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    if (confirm('Clear all items from cart?')) {
      setCartItems([]);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const deliveryFee = 3.99;
  const serviceFee = 2.50;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <>
      <Header title="YOUR CART" showBack />
      
      <main className="max-w-3xl mx-auto p-4 space-y-6">
        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-20 animate-fade-in">
            <ShoppingBag size={80} className="mx-auto mb-6 opacity-20" strokeWidth={2} />
            <h2 className="y2k-subtitle mb-4">CART IS EMPTY</h2>
            <p className="y2k-mono text-sm opacity-70 mb-6">
              TIME TO ADD SOME FOOD!
            </p>
            <button
              onClick={() => router.push('/')}
              className="y2k-btn y2k-btn-primary"
            >
              BROWSE RESTAURANTS
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <section className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h2 className="y2k-subtitle">{cartItems.length} ITEMS</h2>
                <button
                  onClick={clearCart}
                  className="y2k-btn flex items-center gap-2"
                >
                  <Trash2 size={18} />
                  CLEAR ALL
                </button>
              </div>

              {cartItems.map((item, index) => (
                <div
                  key={item.product.id}
                  className="y2k-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div 
                      className="w-24 h-24 bg-gradient-to-br from-y2k-green to-y2k-blue border-2 border-y2k-black flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-3xl opacity-50">
                        {item.product.category === 'burger' ? '🍔' : 
                         item.product.category === 'pizza' ? '🍕' : 
                         item.product.category === 'sushi' ? '🍣' : '🍰'}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="y2k-mono font-bold text-sm mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-xs opacity-70 mb-3">
                        {item.product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border-3 border-y2k-black">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-2 hover:bg-y2k-blue transition-colors"
                          >
                            <Minus size={16} strokeWidth={3} />
                          </button>
                          
                          <span className="y2k-mono font-bold w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-2 hover:bg-y2k-blue transition-colors"
                          >
                            <Plus size={16} strokeWidth={3} />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="y2k-mono font-bold">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-xs opacity-70 hover:text-red-600 underline"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Order Summary */}
            <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-y2k-black text-y2k-cream p-6 border-4 border-y2k-black">
                <h3 className="y2k-subtitle mb-4">ORDER SUMMARY</h3>
                
                <div className="space-y-2 y2k-mono text-sm">
                  <div className="flex justify-between">
                    <span>SUBTOTAL</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>DELIVERY FEE</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>SERVICE FEE</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t-2 border-y2k-cream my-3"></div>
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>TOTAL</span>
                    <span className="text-y2k-blue">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Promo Code */}
            <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="ENTER PROMO CODE"
                  className="y2k-input flex-1"
                />
                <button className="y2k-btn y2k-btn-blue">
                  APPLY
                </button>
              </div>
            </section>

            {/* Checkout Button */}
            <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => router.push('/checkout')}
                className="y2k-btn y2k-btn-primary w-full text-xl py-4"
              >
                PROCEED TO CHECKOUT
              </button>
            </section>
          </>
        )}
      </main>
    </>
  );
}
