'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { deliveryDriver } from '@/data/mockData';
import { MapPin, Phone, Star, Package, Bike, CheckCircle } from 'lucide-react';

export default function TrackingPage() {
  const [currentStatus, setCurrentStatus] = useState(1);
  const orderId = 'ORD-2024-042';
  const estimatedTime = '18';
  const distance = '2.3';

  const statuses = [
    { id: 0, label: 'ORDER PLACED', icon: Package, completed: true },
    { id: 1, label: 'PREPARING', icon: Package, completed: true },
    { id: 2, label: 'ON THE WAY', icon: Bike, completed: false },
    { id: 3, label: 'DELIVERED', icon: CheckCircle, completed: false },
  ];

  // Simulate status progression
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStatus < 3) {
        setCurrentStatus(prev => prev + 1);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentStatus]);

  return (
    <>
      <Header title="TRACK ORDER" showBack />
      
      <main className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Order ID */}
        <section className="animate-fade-in">
          <div className="bg-y2k-black text-y2k-cream p-4 border-4 border-y2k-black text-center">
            <div className="y2k-mono text-xs opacity-70 mb-1">ORDER ID</div>
            <div className="y2k-mono text-xl font-bold">{orderId}</div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative h-64 bg-gradient-to-br from-y2k-blue to-y2k-green border-4 border-y2k-black overflow-hidden">
            {/* Simple map representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={64} color="white" strokeWidth={3} className="mx-auto mb-4 animate-pulse" />
                <div className="y2k-mono text-white font-bold">
                  LIVE TRACKING
                </div>
                <div className="y2k-mono text-white text-sm opacity-90 mt-2">
                  {distance} KM AWAY
                </div>
              </div>
            </div>
            
            {/* Grid overlay for retro effect */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                linear-gradient(0deg, #000 1px, transparent 1px),
                linear-gradient(90deg, #000 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </section>

        {/* Status Timeline */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="y2k-subtitle mb-4">ORDER STATUS</h2>
          
          <div className="space-y-4">
            {statuses.map((status, index) => {
              const Icon = status.icon;
              const isActive = index <= currentStatus;
              const isCurrent = index === currentStatus;
              
              return (
                <div key={status.id} className="relative">
                  {index < statuses.length - 1 && (
                    <div 
                      className={`absolute left-6 top-12 w-1 h-8 ${
                        isActive ? 'bg-y2k-green' : 'bg-gray-300'
                      }`}
                    />
                  )}
                  
                  <div className={`y2k-card ${isCurrent ? 'bg-y2k-blue' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 border-3 border-y2k-black flex items-center justify-center ${
                        isActive ? 'bg-y2k-green' : 'bg-white'
                      }`}>
                        <Icon 
                          size={24} 
                          strokeWidth={3} 
                          color={isActive ? 'white' : 'black'}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="y2k-mono font-bold">
                          {status.label}
                        </div>
                        {isCurrent && (
                          <div className="text-xs opacity-70 mt-1 animate-pulse">
                            IN PROGRESS...
                          </div>
                        )}
                      </div>
                      
                      {isActive && !isCurrent && (
                        <CheckCircle size={24} className="text-y2k-green" fill="currentColor" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ETA */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-y2k-green text-white p-6 border-4 border-y2k-black text-center">
            <div className="y2k-mono text-sm opacity-90 mb-2">ESTIMATED ARRIVAL</div>
            <div className="y2k-title text-4xl">{estimatedTime} MIN</div>
            <div className="y2k-mono text-sm opacity-90 mt-2">{distance} KM AWAY</div>
          </div>
        </section>

        {/* Driver Info */}
        {currentStatus >= 2 && (
          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="y2k-subtitle mb-4">YOUR DRIVER</h2>
            
            <div className="y2k-card">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-y2k-blue to-y2k-green border-3 border-y2k-black rounded-full flex items-center justify-center text-3xl">
                  👤
                </div>
                
                <div className="flex-1">
                  <div className="y2k-mono font-bold text-lg">
                    {deliveryDriver.name}
                  </div>
                  
                  <div className="flex items-center gap-3 y2k-mono text-xs mt-1">
                    <div className="flex items-center gap-1">
                      <Star size={12} fill="black" />
                      <span>{deliveryDriver.rating}</span>
                    </div>
                    
                    <div className="opacity-70">
                      {deliveryDriver.deliveries} DELIVERIES
                    </div>
                  </div>
                  
                  <div className="y2k-badge mt-2 text-xs">
                    {deliveryDriver.vehicle}
                  </div>
                </div>
                
                <button className="w-12 h-12 bg-y2k-blue border-3 border-y2k-black flex items-center justify-center hover:bg-y2k-green transition-colors">
                  <Phone size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Delivery Code */}
        {currentStatus >= 2 && (
          <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-y2k-black text-y2k-cream p-6 border-4 border-y2k-black text-center">
              <div className="y2k-mono text-sm opacity-70 mb-2">DELIVERY CODE</div>
              <div className="y2k-title text-3xl text-y2k-blue">4 2 0 6</div>
              <div className="y2k-mono text-xs opacity-70 mt-2">
                SHARE THIS CODE WITH YOUR DRIVER
              </div>
            </div>
          </section>
        )}

        {/* Support */}
        <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-y2k-cream border-3 border-y2k-black p-4">
            <p className="y2k-mono text-sm text-center">
              NEED HELP WITH YOUR ORDER?<br />
              <button className="underline font-bold hover:text-y2k-green mt-1">
                CONTACT SUPPORT
              </button>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
