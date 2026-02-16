'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { mockOrders } from '@/data/mockData';
import { CheckCircle, XCircle, Clock, ChevronRight } from 'lucide-react';

export default function HistoryPage() {
  const router = useRouter();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={24} className="text-y2k-green" fill="currentColor" />;
      case 'cancelled':
        return <XCircle size={24} className="text-red-600" fill="currentColor" />;
      case 'in-transit':
        return <Clock size={24} className="text-y2k-blue" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'DELIVERED';
      case 'cancelled':
        return 'CANCELLED';
      case 'in-transit':
        return 'IN TRANSIT';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <>
      <Header title="ORDER HISTORY" showMenu />
      
      <main className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Stats Overview */}
        <section className="animate-fade-in">
          <div className="grid grid-cols-3 gap-3">
            <div className="y2k-card text-center p-4">
              <div className="y2k-title text-3xl mb-1">24</div>
              <div className="y2k-mono text-xs opacity-70">TOTAL ORDERS</div>
            </div>
            
            <div className="y2k-card text-center p-4 bg-y2k-blue">
              <div className="y2k-title text-3xl mb-1">$847</div>
              <div className="y2k-mono text-xs opacity-70">TOTAL SPENT</div>
            </div>
            
            <div className="y2k-card text-center p-4">
              <div className="y2k-title text-3xl mb-1">4.9</div>
              <div className="y2k-mono text-xs opacity-70">AVG RATING</div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button className="y2k-btn y2k-btn-primary whitespace-nowrap">
              ALL
            </button>
            <button className="y2k-btn whitespace-nowrap">
              DELIVERED
            </button>
            <button className="y2k-btn whitespace-nowrap">
              IN TRANSIT
            </button>
            <button className="y2k-btn whitespace-nowrap">
              CANCELLED
            </button>
          </div>
        </section>

        {/* Order List */}
        <section className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="y2k-subtitle">RECENT ORDERS</h2>
          
          {mockOrders.map((order, index) => (
            <div
              key={order.id}
              className="w-full text-left animate-slide-up cursor-pointer"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onClick={() => router.push('/tracking')}
            >
              <div className="y2k-card hover:bg-y2k-cream transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Order Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="y2k-badge">{order.id}</div>
                      <div className="y2k-date text-xs opacity-70">{order.date}</div>
                    </div>
                    
                    {/* Store Name */}
                    <h3 className="y2k-mono font-bold text-lg mb-2">
                      {order.store}
                    </h3>
                    
                    {/* Order Details */}
                    <div className="space-y-1 text-sm opacity-70">
                      <div>3 items</div>
                      <div className="y2k-mono font-bold text-base text-y2k-black opacity-100">
                        ${order.total.toFixed(2)}
                      </div>
                    </div>
                    
                    {/* Status */}
                    <div className="flex items-center gap-2 mt-3">
                      {getStatusIcon(order.status)}
                      <span className="y2k-mono text-sm font-bold">
                        {getStatusLabel(order.status)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    {order.status === 'delivered' && (
                      <button 
                        className="y2k-btn text-xs py-2 px-3 whitespace-nowrap"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Reorder logic here
                        }}
                      >
                        REORDER
                      </button>
                    )}
                    
                    <ChevronRight size={24} className="opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Load More */}
        <section className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button className="y2k-btn y2k-btn-blue">
            LOAD MORE ORDERS
          </button>
        </section>

        {/* Favorite Restaurants */}
        <section className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <h2 className="y2k-subtitle mb-4">YOUR FAVORITES</h2>
          
          <div className="bg-y2k-green text-white p-6 border-4 border-y2k-black">
            <div className="text-5xl mb-3">🍔</div>
            <h3 className="y2k-subtitle mb-2">RETRO BURGER</h3>
            <p className="y2k-mono text-sm opacity-90 mb-4">
              ORDERED 8 TIMES • LAST ORDER: FEB 15
            </p>
            <button className="y2k-btn bg-white text-y2k-black w-full">
              ORDER AGAIN
            </button>
          </div>
        </section>

        {/* Empty State Alternative (commented out for now) */}
        {/* {mockOrders.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Package size={80} className="mx-auto mb-6 opacity-20" strokeWidth={2} />
            <h2 className="y2k-subtitle mb-4">NO ORDERS YET</h2>
            <p className="y2k-mono text-sm opacity-70 mb-6">
              START YOUR FIRST ORDER NOW!
            </p>
            <button
              onClick={() => router.push('/')}
              className="y2k-btn y2k-btn-primary"
            >
              BROWSE RESTAURANTS
            </button>
          </div>
        )} */}
      </main>
    </>
  );
}
