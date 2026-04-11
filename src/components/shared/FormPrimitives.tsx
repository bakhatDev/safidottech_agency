"use client";

import React, { forwardRef } from 'react';
import { cn } from '@/lib/cn';

// ── FormField (Wrapper) ─────────────────────────────────────
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  error,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label className="text-xs font-medium uppercase tracking-wider text-[#999]">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

// ── Shared base styles ──────────────────────────────────────
const baseInputStyles =
  'w-full bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#666] focus:outline-none focus:border-[#C2F026] transition-colors duration-200';

// ── Input ───────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          baseInputStyles,
          error && 'border-red-500/60',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

// ── Textarea ────────────────────────────────────────────────
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 5, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          baseInputStyles,
          'resize-none',
          error && 'border-red-500/60',
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

// ── Select ──────────────────────────────────────────────────
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            baseInputStyles,
            'appearance-none pr-10 cursor-pointer',
            error && 'border-red-500/60',
            className
          )}
          {...props}
        >
          {children}
        </select>
        {/* Custom chevron */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#999]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    );
  }
);
Select.displayName = 'Select';
