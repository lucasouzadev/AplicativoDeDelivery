'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { CreditCard, Wallet, Plus, Check } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'card' | 'wallet';
  name: string;
  last4?: string;
  icon: string;
}

export default function PaymentPage() {
  const router = useRouter();
  
  const [paymentMethods] = useState<PaymentMethod[]>([
    { id: '1', type: 'card', name: 'VISA', last4: '4242', icon: '💳' },
    { id: '2', type: 'card', name: 'MASTERCARD', last4: '5555', icon: '💳' },
    { id: '3', type: 'wallet', name: 'PAYPAL', icon: '💰' },
  ]);

  const [selectedMethod, setSelectedMethod] = useState('1');
  const [showAddCard, setShowAddCard] = useState(false);

  const handlePlaceOrder = () => {
    router.push('/confirmation');
  };

  return (
    <>
      <Header title="PAYMENT" showBack />
      
      <main className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Saved Payment Methods */}
        <section className="animate-fade-in">
          <h2 className="y2k-subtitle mb-4">SELECT PAYMENT METHOD</h2>
          
          <div className="space-y-3">
            {paymentMethods.map((method, index) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className="w-full animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`y2k-card ${selectedMethod === method.id ? 'bg-y2k-blue' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="text-left">
                        <div className="y2k-mono font-bold">
                          {method.name}
                        </div>
                        {method.last4 && (
                          <div className="text-sm opacity-70">
                            •••• {method.last4}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {selectedMethod === method.id && (
                      <div className="w-8 h-8 bg-y2k-black rounded-full flex items-center justify-center">
                        <Check size={20} color="white" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Add New Payment Method */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => setShowAddCard(!showAddCard)}
            className="y2k-btn y2k-btn-blue w-full flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            ADD NEW PAYMENT METHOD
          </button>

          {showAddCard && (
            <div className="mt-4 space-y-3 animate-slide-up">
              <div>
                <label className="y2k-mono text-sm font-bold block mb-2">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="y2k-input"
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="y2k-mono text-sm font-bold block mb-2">
                    EXPIRY DATE
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="y2k-input"
                    maxLength={5}
                  />
                </div>

                <div>
                  <label className="y2k-mono text-sm font-bold block mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="y2k-input"
                    maxLength={3}
                  />
                </div>
              </div>

              <div>
                <label className="y2k-mono text-sm font-bold block mb-2">
                  CARDHOLDER NAME
                </label>
                <input
                  type="text"
                  placeholder="JOHN DOE"
                  className="y2k-input"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowAddCard(false)}
                  className="y2k-btn flex-1"
                >
                  CANCEL
                </button>
                <button className="y2k-btn y2k-btn-primary flex-1">
                  SAVE CARD
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Order Total */}
        <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-y2k-black text-y2k-cream p-6 border-4 border-y2k-black">
            <h3 className="y2k-subtitle mb-4">PAYMENT SUMMARY</h3>
            
            <div className="space-y-2 y2k-mono text-sm">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span>$35.98</span>
              </div>
              
              <div className="flex justify-between">
                <span>DELIVERY FEE</span>
                <span>$3.99</span>
              </div>
              
              <div className="flex justify-between">
                <span>SERVICE FEE</span>
                <span>$2.50</span>
              </div>
              
              <div className="border-t-2 border-y2k-cream my-3"></div>
              
              <div className="flex justify-between text-lg font-bold">
                <span>TOTAL TO PAY</span>
                <span className="text-y2k-blue">$42.47</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Info */}
        <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-y2k-green text-white p-4 border-3 border-y2k-black">
            <div className="flex items-start gap-3">
              <CreditCard size={24} className="flex-shrink-0 mt-1" />
              <div className="text-sm y2k-mono">
                <strong>SECURE PAYMENT</strong>
                <p className="opacity-90 mt-1">
                  YOUR PAYMENT INFO IS ENCRYPTED & SECURE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Place Order Button */}
        <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={handlePlaceOrder}
            className="y2k-btn y2k-btn-primary w-full text-xl py-4"
          >
            PLACE ORDER - $42.47
          </button>
          
          <p className="text-center text-xs opacity-70 y2k-mono mt-3">
            BY PLACING THIS ORDER, YOU AGREE TO OUR TERMS
          </p>
        </section>
      </main>
    </>
  );
}
