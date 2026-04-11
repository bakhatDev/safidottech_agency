"use client";

import { cn } from '@/lib/cn';
import Link from 'next/link';

export interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'lime' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  showArrow?: boolean;
}

export default function Button({
  label,
  href,
  onClick,
  variant = 'lime',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  showArrow = false,
}: ButtonProps) {
  const baseStyles = 'rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  const variantStyles = {
    lime: 'bg-[#C2F026] text-[#111111] font-semibold hover:shadow-[0_4px_24px_rgba(194,240,38,0.25)]',
    ghost: 'border border-[#2A2A2A] text-white hover:border-[#C2F026] hover:text-[#C2F026]',
    outline: 'border border-white/20 text-white hover:border-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  const content = showArrow ? `${label} →` : label;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
