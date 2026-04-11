"use client";

import { useEffect } from 'react';
import Button from '@/components/shared/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
        Something went wrong
      </h2>
      <p className="text-[#999] text-base lg:text-lg max-w-lg mb-8">
        {error.message || "An unexpected error occurred. Our team has been notified."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          label="Try again" 
          variant="lime" 
          onClick={reset} 
        />
        <Button 
          label="Back to Home" 
          variant="ghost" 
          href="/" 
        />
      </div>
    </div>
  );
}
