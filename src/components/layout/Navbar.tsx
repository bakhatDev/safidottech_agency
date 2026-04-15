"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCurrency } from '@/hooks/useCurrency';
import { navItems } from '@/data/navigation';
import Button from '@/components/shared/Button';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Focus Trap for Mobile Menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const menu = document.getElementById('mobile-nav-menu');
    if (!menu) return;

    const focusableElements = menu.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-[#1C1C1C] shadow-[0_1px_0_rgba(255,255,255,0.05)] py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="z-50 shrink-0">
            <span className="text-white font-bold text-xl tracking-tight">
              SafiDotTech
            </span>
          </Link>

          {/* Nav Links - Center (Desktop) */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
              const hasChildren = item.children && item.children.length > 0;

              if (item.label === 'Get In Touch' || item.label === 'Client Login') return null;

              if (hasChildren) {
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[#C2F026]",
                        isActive ? "text-[#C2F026]" : "text-white/80"
                      )}
                    >
                      <span>{item.label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl shadow-xl overflow-hidden min-w-[240px] p-2 flex flex-col gap-1">
                        {item.children?.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-[#C2F026] rounded-lg transition-colors whitespace-nowrap block"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#C2F026]",
                    isActive ? "text-[#C2F026]" : "text-white/80"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls - Right (Desktop) */}
          <div className="hidden lg:flex items-center justify-end space-x-6">
            {/* Currency Toggle - HIDDEN */}
            {/* <div className="flex items-center bg-[#111111] border border-[#2A2A2A] rounded-full overflow-hidden p-1">
              <button
                onClick={() => setCurrency('USD')}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-full transition-colors",
                  currency === 'USD' ? "bg-[#C2F026] text-[#111111]" : "text-white/60 hover:text-white"
                )}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('PKR')}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-full transition-colors",
                  currency === 'PKR' ? "bg-[#C2F026] text-[#111111]" : "text-white/60 hover:text-white"
                )}
              >
                PKR
              </button>
            </div> */}

            {/* CTAs */}
            <div className="flex items-center space-x-3">
              {/* Client Login - HIDDEN */}
              {/* <Button label="Client Login" variant="ghost" size="sm" href="/login" /> */}
              <Button label="Get In Touch" variant="lime" size="sm" href="/contact" />
            </div>
          </div>

          {/* Hamburger - Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative z-50 p-2 text-white/80 hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={cn("w-full h-0.5 bg-current rounded-full transition-all duration-300", isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : "")}></span>
              <span className={cn("w-full h-0.5 bg-current rounded-full transition-all duration-300", isMobileMenuOpen ? "opacity-0" : "")}></span>
              <span className={cn("w-full h-0.5 bg-current rounded-full transition-all duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : "")}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-nav-menu"
        className={cn(
          "fixed inset-0 bg-[#111111] z-40 lg:hidden transition-all duration-500 ease-in-out flex flex-col pt-24 pb-8",
          isMobileMenuOpen ? "opacity-100 visible h-screen" : "opacity-0 invisible h-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="flex-1 overflow-y-auto px-6 hide-scrollbar flex flex-col justify-between">
          <nav className="flex flex-col space-y-2 mt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownOpen = mobileDropdownOpen === item.label;

              if (item.label === 'Get In Touch' || item.label === 'Client Login') return null;

              if (hasChildren) {
                return (
                  <div key={item.label} className="border-b border-white/10 pb-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex-1 py-4 text-2xl font-bold tracking-tight transition-colors hover:text-[#C2F026]",
                          isActive ? "text-[#C2F026]" : "text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="p-2 text-white/80 hover:text-[#C2F026] transition-colors"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isDropdownOpen}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={cn(
                            "opacity-70 transition-transform duration-300",
                            isDropdownOpen ? "rotate-180 text-[#C2F026]" : ""
                          )}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 flex flex-col space-y-1 pl-4",
                        isDropdownOpen ? "max-h-[400px] opacity-100 py-2" : "max-h-0 opacity-0 my-0"
                      )}
                    >
                      {item.children?.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-3 text-lg text-white/70 hover:text-[#C2F026]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div key={item.label} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-4 text-2xl font-bold tracking-tight transition-colors hover:text-[#C2F026]",
                      isActive ? "text-[#C2F026]" : "text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>
          
          <div className="mt-12 flex flex-col space-y-6">
            {/* Currency Toggle Mobile - HIDDEN */}
            {/* <div className="flex flex-col space-y-3">
              <span className="text-sm text-white/50 font-medium uppercase tracking-wider">Currency</span>
              <div className="flex items-center bg-[#1C1C1C] rounded-full p-1 w-full max-w-[200px]">
                <button
                  onClick={() => setCurrency('USD')}
                  className={cn(
                    "flex-1 py-3 text-sm font-semibold rounded-full transition-colors",
                    currency === 'USD' ? "bg-[#C2F026] text-[#111111]" : "text-white/60"
                  )}
                >
                  USD
                </button>
                <button
                  onClick={() => setCurrency('PKR')}
                  className={cn(
                    "flex-1 py-3 text-sm font-semibold rounded-full transition-colors",
                    currency === 'PKR' ? "bg-[#C2F026] text-[#111111]" : "text-white/60"
                  )}
                >
                  PKR
                </button>
              </div>
            </div> */}

            <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
              <Button label="Get In Touch" variant="lime" size="lg" className="w-full justify-center" href="/contact" />
              {/* Client Login Mobile - HIDDEN */}
              {/* <Button label="Client Login" variant="ghost" size="lg" className="w-full justify-center" href="/login" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}