"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';

const STORAGE_KEY = 'safidottech_cookie_consent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay for slide-up animation
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setIsVisible(false);
  };

  const handleManage = () => {
    // Placeholder for future preferences modal
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsVisible(false);
  };

  // Don't render anything if consent already given
  const [hasConsent, setHasConsent] = useState(true);
  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setHasConsent(false);
  }, []);

  if (hasConsent && !isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-out',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="bg-[#1C1C1C] border-t border-[#2A2A2A] px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm max-w-2xl">
            We use cookies to improve your experience and analyse site traffic. By continuing to use
            this site, you agree to our use of cookies.{' '}
            <a href="/privacy-policy" className="text-[#C2F026] hover:underline">
              Learn more
            </a>
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="text-white/50 hover:text-white text-sm transition-colors px-4 py-2"
            >
              Decline
            </button>
            <button
              onClick={handleManage}
              className="border border-[#2A2A2A] text-white hover:border-[#C2F026] hover:text-[#C2F026] rounded-full px-5 py-2 text-sm transition-all duration-300"
            >
              Manage Preferences
            </button>
            <button
              onClick={handleAccept}
              className="bg-[#C2F026] text-[#111111] font-semibold rounded-full px-5 py-2 text-sm hover:shadow-[0_4px_24px_rgba(194,240,38,0.25)] transition-all duration-300"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
