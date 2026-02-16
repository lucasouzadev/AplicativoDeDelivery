'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [deliveryType, setDeliveryType] = useState<'now' | 'scheduled'>('now');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const handleCheckout = () => {
    router.push('/payment');
  };

  return (
    <>
      <Header title="CHECKOUT" showBack />
      
      <main className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Delivery Address */}
        <section className="animate-fade-in">
          <h2 className="y2k-subtitle mb-4">DELIVERY ADDRESS</h2>
          
          <div className="y2k-card">
            <div className="flex items-start gap-4">
              <MapPin size={24} strokeWidth={3} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="y2k-mono font-bold mb-2">HOME</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  123 RETRO STREET<br />
                  CYBER CITY, Y2K 90210<br />
                  UNITED STATES
                </p>
                <button className="y2k-mono text-sm underline mt-3 hover:text-y2k-green">
                  CHANGE ADDRESS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Time */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="y2k-subtitle mb-4">DELIVERY TIME</h2>
          
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setDeliveryType('now')}
              className={`y2k-btn flex-1 ${deliveryType === 'now' ? 'y2k-btn-primary' : ''}`}
            >
              <Clock size={20} className="inline mr-2" />
              DELIVER NOW
            </button>
            
            <button
              onClick={() => setDeliveryType('scheduled')}
              className={`y2k-btn flex-1 ${deliveryType === 'scheduled' ? 'y2k-btn-primary' : ''}`}
            >
              <Calendar size={20} className="inline mr-2" />
              SCHEDULE
            </button>
          </div>

          {deliveryType === 'now' && (
            <div className="y2k-card animate-slide-up bg-y2k-blue border-y2k-black">
              <p className="y2k-mono text-sm">
                <strong>ESTIMATED DELIVERY:</strong> 25-35 MINUTES
              </p>
            </div>
          )}

          {deliveryType === 'scheduled' && (
            <div className="space-y-3 animate-slide-up">
              <div>
                <label className="y2k-mono text-sm font-bold block mb-2">
                  DATE
                </label>
                <input
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="y2k-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label className="y2k-mono text-sm font-bold block mb-2">
                  TIME
                </label>
                <input
                  type="time"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="y2k-input"
                />
              </div>
            </div>
          )}
        </section>

        {/* Delivery Instructions */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="y2k-subtitle mb-4">DELIVERY INSTRUCTIONS</h2>
          
          <textarea
            placeholder="ADD SPECIAL INSTRUCTIONS (OPTIONAL)"
            className="y2k-input min-h-[100px] resize-none"
          />
        </section>

        {/* Contact Info */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="y2k-subtitle mb-4">CONTACT INFO</h2>
          
          <div className="space-y-3">
            <div>
              <label className="y2k-mono text-sm font-bold block mb-2">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="y2k-input"
              />
            </div>
          </div>
        </section>

        {/* Order Summary Preview */}
        <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-y2k-green text-white p-6 border-4 border-y2k-black">
            <h3 className="y2k-subtitle mb-3">ORDER TOTAL</h3>
            <div className="y2k-mono text-2xl font-bold">$42.47</div>
            <p className="text-sm opacity-90 mt-2">3 ITEMS • RETRO BURGER</p>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="flex gap-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => router.back()}
            className="y2k-btn flex-1"
          >
            CANCEL
          </button>
          
          <button
            onClick={handleCheckout}
            className="y2k-btn y2k-btn-primary flex-1"
          >
            CONTINUE
          </button>
        </section>
      </main>
    </>
  );
}
