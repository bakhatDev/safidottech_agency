import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { CurrencyProvider } from '@/lib/CurrencyContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import CookieBanner from '@/components/shared/CookieBanner';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: { 
    default: 'Web Design & SEO Agency | Safi Dot Tech', 
    template: '%s | Safi Dot Tech' 
  },
  description: 'MERN Stack web development with built-in SEO and sub-5s load speeds. Registered in Pakistan & UK. Free SEO audit. Serving clients globally.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://safidottech.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="bg-[#111111] text-white font-sans antialiased">
        <CurrencyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
        </CurrencyProvider>
      </body>
    </html>
  );
}
