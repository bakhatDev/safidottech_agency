"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to subscribe.');
      
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesLinks = [
    { label: 'Web Design & Development', href: '/services/web-design-development' },
    { label: 'Frontend Development', href: '/services/frontend-development' },
    { label: 'Backend Development', href: '/services/backend-development' },
    { label: 'SEO Optimization', href: '/services/seo' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  ];

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A] text-white">
      <div className="container mx-auto px-4 md:px-8 py-16 lg:py-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 mb-20">
          
          {/* Left Column - Brand */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <Link href="/" className="inline-block">
                <span className="text-white font-bold text-2xl tracking-tight">SafiDotTech</span>
              </Link>
              <p className="text-[#999] text-sm font-medium tracking-wide">
                Clean Code. Built-in SEO. Lightning Fast.
              </p>
            </div>
            
            <p className="text-white/60 text-base max-w-sm leading-relaxed">
              We are a premium digital agency specializing in high-performance MERN stack applications. We combine modern design with powerful engineering to build exceptional web experiences.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C2F026] hover:border-[#C2F026] transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* GitHub */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C2F026] hover:border-[#C2F026] transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C2F026] hover:border-[#C2F026] transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>

            <div className="pt-2">
              <a href="https://wa.me/placeholder" className="inline-flex items-center text-[#C2F026] text-sm font-semibold hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg tracking-wide">Services</h4>
              <ul className="space-y-4">
                {servicesLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-[#C2F026] text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg tracking-wide">Company</h4>
              <ul className="space-y-4">
                {companyLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-[#C2F026] text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-8 lg:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-2">
            <h3 className="text-2xl font-bold text-white">Stay updated with our latest insights</h3>
            <p className="text-white/60 text-sm">Join our newsletter to get development tips, SEO strategies, and company news directly to your inbox.</p>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            <form onSubmit={handleNewsletterSubmit} className="w-full max-w-md relative">
              <input
                type="email"
                required
                disabled={isSubmitting || submitStatus === 'success'}
                placeholder="Enter your email address"
                className="w-full bg-[#111111] border border-[#2A2A2A] text-white rounded-full py-4 pl-6 pr-16 focus:outline-none focus:border-[#C2F026] transition-colors placeholder:text-white/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-[#C2F026] text-[#111111] rounded-full flex items-center justify-center hover:shadow-[0_0_15px_rgba(194,240,38,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Subscribe"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                )}
              </button>
            </form>
            
            <div className="mt-3 w-full max-w-md">
              {submitStatus === 'success' && (
                <p className="text-[#C2F026] text-sm">You are in. No spam — unsubscribe anytime.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}
              {submitStatus === 'idle' && (
                <p className="text-white/40 text-xs">By subscribing, you agree with our Privacy Policy and provide consent to receive updates from our company.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2025 Safi Dot Tech. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
