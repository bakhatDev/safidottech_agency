import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import ContactForm from '@/components/shared/ContactForm';
import SectionContainer from '@/components/shared/SectionContainer';
import ContactPanel from '@/components/sections/ContactPanel';
import { cn } from '@/lib/cn';

export const metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Get In Touch"
        eyebrow="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Contact' }
        ]}
      />

      {/* 2. Main Contact Card Section */}
      <SectionContainer>
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
            
            {/* Left Column: Contact Details (40%) */}
            <div className="p-8 lg:p-12 bg-[#1A1A1A] border-b lg:border-b-0 lg:border-r border-[#2A2A2A] flex flex-col gap-10">
              
              {/* Phone Detail */}
              <div className="space-y-4">
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Call Us</h4>
                <a 
                  href="tel:+923000000000" 
                  className="text-[#C2F026] text-2xl lg:text-3xl font-bold hover:opacity-80 transition-opacity block"
                >
                  +92 321 000 0000
                </a>
              </div>

              {/* Office Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                <div className="space-y-4">
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Pakistan Office</h4>
                  <address className="not-italic text-white/80 text-sm leading-relaxed">
                    24-Z, Phase 3, DHA<br />
                    Lahore, 54000<br />
                    Punjab, Pakistan
                  </address>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">UK Registration</h4>
                  <address className="not-italic text-white/80 text-sm leading-relaxed">
                    71-75 Shelton Street<br />
                    Covent Garden, London<br />
                    WC2H 9JQ, United Kingdom
                  </address>
                </div>
              </div>

              {/* Email Detail */}
              <div className="space-y-4">
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Email Us</h4>
                <a 
                  href="mailto:info@safidottech.com" 
                  className="text-white text-lg font-medium hover:text-[#C2F026] transition-colors flex items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  info@safidottech.com
                </a>
              </div>

              {/* Social Connectivity */}
              <div className="space-y-4">
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Connect</h4>
                <div className="flex items-center gap-4">
                  {['instagram', 'linkedin', 'twitter'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com/safidottech`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#999] transition-all duration-300 hover:border-[#C2F026] hover:bg-[#C2F026] hover:text-[#111111]"
                      aria-label={social}
                    >
                      {social === 'instagram' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>}
                      {social === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>}
                      {social === 'twitter' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-[#111111] rounded-xl h-64 flex flex-col items-center justify-center border border-[#2A2A2A] mt-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-[#666666] text-xs font-medium uppercase tracking-widest">Map Coming Soon</span>
              </div>
            </div>

            {/* Right Column: Form Area (60%) */}
            <div className="p-8 lg:p-12 flex flex-col">
              <div className="mb-10">
                <span className="text-[#C2F026] text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                  Have Questions?
                </span>
                <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                  Tell Us About Your Project.
                </h2>
                <p className="text-[#999] text-sm leading-relaxed">
                  Fill in the form and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Form Component */}
              <div className="[&_form]:bg-transparent [&_form]:border-0 [&_form]:p-0">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </SectionContainer>

      {/* 3. Closing Section: CTA only */}
      <ContactPanel />
    </main>
  );
}
