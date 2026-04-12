import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';

export const metadata = pageMetadata.privacy;

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Privacy Policy"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Privacy Policy' }
        ]}
      />

      {/* 2. Content Section */}
      <SectionContainer>
        <article className="prose prose-invert prose-lime max-w-3xl mx-auto">
          <h2>1. Who We Are</h2>
          <p>
            Safi Dot Tech is a digital agency registered in Pakistan and the United Kingdom. We specialize in high-performance web development and SEO services. Our website address is: <a href="https://safidottech.com">https://safidottech.com</a>.
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect may include names, email addresses, phone numbers, and project details.
          </p>

          <h2>3. How We Use Your Data</h2>
          <p>
            We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use your data to provide our services, respond to inquiries, and send administrative information.
          </p>

          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to access or store information. Cookies help us provide a better user experience by allowing us to monitor which pages you find useful and which you do not. You can choose to accept or decline cookies through your browser settings.
          </p>

          <h2>5. GDPR Rights</h2>
          <p>
            If you are a resident in the European Economic Area (EEA), you have certain rights under applicable data protection laws. These include the right to request access and obtain a copy of your personal information, the right to request rectification or erasure, and the right to restrict the processing of your personal information.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <a href="mailto:info@safidottech.com">info@safidottech.com</a>.
          </p>
        </article>
      </SectionContainer>
    </main>
  );
}
