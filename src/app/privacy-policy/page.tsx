import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';

export const metadata = pageMetadata.privacy;

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      <PageBanner
        title="Privacy Policy"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Privacy Policy' }
        ]}
      />

      <SectionContainer>
        <article className="prose prose-invert prose-lime max-w-3xl mx-auto">
          <p className="italic text-white/60 mb-10">
            Last Updated: April 12, 2024
          </p>

          <h2>1. Introduction</h2>
          <p>
            At Safi Dot Tech, we are committed to protecting your personal data and respecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Data Collection</h2>
          <p>
            We collect information that you provide directly to us through contact forms, newsletter subscriptions, and project inquiries. This may include your name, email address, phone number, and company details.
          </p>

          <h2>3. Cookies and Analytics</h2>
          <p>
            We use cookies to improve your browsing experience and analyze site traffic using Google Analytics. You can manage your cookie preferences through our cookie banner or browser settings.
          </p>

          <h2>4. How We Use Data</h2>
          <p>
            Your data is used solely to provide and improve our services, communicate with you regarding inquiries, and send marketing updates if you have opted in. We never sell your data to third parties.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures, including SSL encryption and secure server environments, to protect your data from unauthorized access or disclosure.
          </p>

          <h2>6. GDPR and Your Rights</h2>
          <p>
            For our European clients, we comply with GDPR regulations. You have the right to access, rectify, or delete your personal data. To exercise these rights, please contact us at info@safidottech.com.
          </p>

          <h2>7. Contact and Updates</h2>
          <p>
            We may update this policy periodically. Questions regarding this policy should be directed to our privacy officer at our London or Lahore offices.
          </p>
        </article>
      </SectionContainer>
    </main>
  );
}
