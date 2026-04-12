"use client";

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for subscription would go here
    console.log('Subscribing:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative max-w-md mx-auto flex items-center"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-l-full px-5 py-4 flex-1 text-white text-sm placeholder:text-[#666] focus:outline-none focus:border-[#C2F026] transition-colors h-[54px]"
      />
      <button
        type="submit"
        className="bg-[#C2F026] text-[#111] px-6 rounded-r-full hover:bg-[#d4ff4d] transition-colors flex items-center justify-center h-[54px] border border-[#C2F026]"
        aria-label="Subscribe"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </form>
  );
}
