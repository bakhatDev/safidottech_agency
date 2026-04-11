"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import * as z from 'zod';
import { FormField, Input, Textarea, Select } from '@/components/shared/FormPrimitives';
import Button from '@/components/shared/Button';
import { submitContactForm } from '@/services/contactService';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'web-design', label: 'Web Design & Development' },
  { value: 'seo', label: 'Search Engine Optimization' },
  { value: 'frontend', label: 'Frontend Development' },
  { value: 'backend', label: 'Backend Development' },
  { value: 'ecommerce', label: 'E-Commerce Solutions' },
  { value: 'other', label: 'Other / Not Sure' },
];

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: standardSchemaResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);

    try {
      const result = await submitContactForm({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        serviceInterest: data.serviceInterest,
      });

      if (result.success) {
        setIsSuccess(true);
      } else {
        setServerError(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Unable to send your message. Please try again later.');
    }
  };

  // ── Success State ──────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        {/* Checkmark Icon */}
        <div className="w-16 h-16 rounded-full bg-[#C2F026]/10 flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C2F026"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h3 className="text-white font-bold text-2xl mb-2">Message Sent.</h3>
        <p className="text-[#999] text-sm max-w-sm">
          Thanks — we&apos;ve got your message and will be in touch within 24 hours.
        </p>

        <p className="text-[#666] text-[10px] mt-4 text-center max-w-xs">
          By submitting this form you agree to our Privacy Policy. We never share your data with third parties.
        </p>
      </div>
    );
  }

  // ── Form State ─────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10"
      noValidate
    >
      <div className="space-y-6">
        {/* Name — Full Width */}
        <FormField label="Full Name" error={errors.name?.message} required>
          <Input
            placeholder="Your full name"
            error={!!errors.name}
            {...register('name')}
          />
        </FormField>

        {/* Email + Phone — 2 Col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Email Address" error={errors.email?.message} required>
            <Input
              type="email"
              placeholder="you@example.com"
              error={!!errors.email}
              {...register('email')}
            />
          </FormField>

          <FormField label="Phone Number" error={errors.phone?.message}>
            <Input
              type="tel"
              placeholder="+1 (555) 000-0000"
              error={!!errors.phone}
              {...register('phone')}
            />
          </FormField>
        </div>

        {/* Service Interest — Full Width */}
        <FormField label="Service Interest" error={errors.serviceInterest?.message}>
          <Select
            error={!!errors.serviceInterest}
            {...register('serviceInterest')}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </FormField>

        {/* Message — Full Width */}
        <FormField label="Your Message" error={errors.message?.message} required>
          <Textarea
            placeholder="Tell us about your project..."
            error={!!errors.message}
            {...register('message')}
          />
        </FormField>

        {/* Server Error */}
        {serverError && (
          <p className="text-red-400 text-sm text-center">{serverError}</p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          label={isSubmitting ? 'Sending...' : 'Get In Touch →'}
          variant="lime"
          className="w-full"
          disabled={isSubmitting}
        />

        {/* Legal */}
        <p className="text-[#666] text-[10px] mt-4 text-center">
          By submitting this form you agree to our Privacy Policy. We never share your data with third parties.
        </p>
      </div>
    </form>
  );
}
