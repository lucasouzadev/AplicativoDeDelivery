'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function LoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <>
      <Header showBack />
      
      <main className="max-w-md mx-auto p-6 mt-12">
        <div className="animate-fade-in space-y-6">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="y2k-title mb-2">Y2K</h1>
            <h2 className="y2k-title text-y2k-green">DELIVERY</h2>
            <p className="y2k-date mt-4">EST. 2000</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsSignUp(false)}
              className={`y2k-btn flex-1 ${!isSignUp ? 'y2k-btn-primary' : ''}`}
            >
              LOGIN
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`y2k-btn flex-1 ${isSignUp ? 'y2k-btn-primary' : ''}`}
            >
              SIGN UP
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="animate-slide-up">
                <label className="y2k-mono text-sm font-bold block mb-2">
                  USERNAME
                </label>
                <input
                  type="text"
                  placeholder="ENTER USERNAME"
                  className="y2k-input"
                  required
                />
              </div>
            )}

            <div className={isSignUp ? 'animate-slide-up' : ''}>
              <label className="y2k-mono text-sm font-bold block mb-2">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="USER@Y2K.COM"
                className="y2k-input"
                required
              />
            </div>

            <div className={isSignUp ? 'animate-slide-up' : ''}>
              <label className="y2k-mono text-sm font-bold block mb-2">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="y2k-input"
                required
              />
            </div>

            {isSignUp && (
              <div className="animate-slide-up">
                <label className="y2k-mono text-sm font-bold block mb-2">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="y2k-input"
                  required
                />
              </div>
            )}

            {!isSignUp && (
              <div className="text-right">
                <button
                  type="button"
                  className="y2k-mono text-sm underline hover:text-y2k-green"
                >
                  FORGOT PASSWORD?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="y2k-btn y2k-btn-primary w-full mt-6"
            >
              {isSignUp ? 'CREATE ACCOUNT' : 'LOGIN'}
            </button>
          </form>

          {/* Social Login */}
          <div className="space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-y2k-black"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-y2k-cream px-4 y2k-mono text-xs">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <button className="y2k-btn y2k-btn-blue w-full">
              GOOGLE.2000
            </button>
            <button className="y2k-btn w-full">
              FACEBOOK.COM
            </button>
          </div>

          {/* Terms */}
          <p className="text-center text-xs opacity-70 y2k-mono">
            BY CONTINUING, YOU AGREE TO OUR
            <br />
            TERMS OF SERVICE & PRIVACY POLICY
          </p>
        </div>
      </main>
    </>
  );
}
