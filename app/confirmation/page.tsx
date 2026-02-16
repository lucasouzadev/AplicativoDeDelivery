'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { CheckCircle2, Package, Clock, MapPin } from 'lucide-react';

export default function ConfirmationPage() {
  const router = useRouter();
  const orderId = 'ORD-2024-042';
  const estimatedTime = '25-35';

  return (
    <>
      <Header title="ORDER CONFIRMED" />
      
      <main className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Success Animation */}
        <section className="text-center py-8 animate-fade-in">
          <div className="inline-block mb-6 animate-slide-up">
            <CheckCircle2 
              size={120} 
              className="text-y2k-green" 
              strokeWidth={3}
            />
          </div>
          
          <h1 className="y2k-title text-4xl mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            ORDER
            <br />
            CONFIRMED!
          </h1>
          
          <p className="y2k-mono text-sm opacity-70 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            YOUR ORDER HAS BEEN PLACED SUCCESSFULLY
          </p>
        </section>

        {/* Order ID */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-y2k-black text-y2k-cream p-8 border-4 border-y2k-black text-center">
            <div className="y2k-mono text-sm opacity-70 mb-2">ORDER ID</div>
            <div className="y2k-title text-3xl text-y2k-blue">{orderId}</div>
          </div>
        </section>

        {/* Order Details */}
        <section className="space-y-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="y2k-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-y2k-blue border-2 border-y2k-black flex items-center justify-center">
                <Clock size={24} strokeWidth={3} />
              </div>
              <div>
                <div className="y2k-mono text-sm opacity-70">ESTIMATED DELIVERY</div>
                <div className="y2k-mono font-bold">{estimatedTime} MINUTES</div>
              </div>
            </div>
          </div>

          <div className="y2k-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-y2k-green border-2 border-y2k-black flex items-center justify-center">
                <Package size={24} strokeWidth={3} color="white" />
              </div>
              <div>
                <div className="y2k-mono text-sm opacity-70">RESTAURANT</div>
                <div className="y2k-mono font-bold">RETRO BURGER</div>
              </div>
            </div>
          </div>

          <div className="y2k-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-y2k-cream border-2 border-y2k-black flex items-center justify-center">
                <MapPin size={24} strokeWidth={3} />
              </div>
              <div className="flex-1">
                <div className="y2k-mono text-sm opacity-70">DELIVERY ADDRESS</div>
                <div className="y2k-mono font-bold text-sm">
                  123 RETRO STREET, CYBER CITY
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="y2k-subtitle mb-3">ORDER ITEMS</h3>
          
          <div className="bg-white border-4 border-y2k-black p-4">
            <div className="space-y-3 y2k-mono text-sm">
              <div className="flex justify-between">
                <div>
                  <div className="font-bold">2x Y2K CLASSIC</div>
                  <div className="text-xs opacity-70">Double beef, special sauce</div>
                </div>
                <div className="font-bold">$25.98</div>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <div className="font-bold">1x MILLENNIUM BACON</div>
                  <div className="text-xs opacity-70">Crispy bacon, aged cheddar</div>
                </div>
                <div className="font-bold">$14.99</div>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <div className="font-bold">1x REBOOT BROWNIE</div>
                  <div className="text-xs opacity-70">Triple chocolate</div>
                </div>
                <div className="font-bold">$8.99</div>
              </div>
              
              <div className="border-t-3 border-y2k-black my-2"></div>
              
              <div className="flex justify-between text-base font-bold">
                <span>TOTAL PAID</span>
                <span className="text-y2k-green">$42.47</span>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Banner */}
        <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-y2k-blue p-4 border-3 border-y2k-black">
            <p className="y2k-mono text-sm">
              📱 <strong>WE'LL NOTIFY YOU</strong> when your order is ready for delivery
            </p>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="space-y-3 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => router.push('/tracking')}
            className="y2k-btn y2k-btn-primary w-full text-xl py-4"
          >
            TRACK ORDER
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="y2k-btn w-full"
          >
            BACK TO HOME
          </button>
        </section>

        {/* Support */}
        <section className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="y2k-mono text-xs opacity-70">
            NEED HELP? CONTACT SUPPORT<br />
            SUPPORT@Y2K-DELIVERY.COM
          </p>
        </section>
      </main>
    </>
  );
}
