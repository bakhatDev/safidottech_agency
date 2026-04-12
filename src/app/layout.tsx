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
  display: 'swap',
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
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
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
