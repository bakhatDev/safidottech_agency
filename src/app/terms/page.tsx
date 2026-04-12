import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';

export const metadata = pageMetadata.terms;

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      <PageBanner
        title="Terms of Service"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Terms' }
        ]}
      />

      <SectionContainer>
        <article className="prose prose-invert prose-lime max-w-3xl mx-auto">
          <p className="italic text-white/60 mb-10">
            Last Updated: April 12, 2024
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Safi Dot Tech website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site.
          </p>

          <h2>2. Services Provided</h2>
          <p>
            We provide bespoke web development (MERN stack), SEO strategy, and UI/UX design. Specific deliverables and timelines are outlined in individual service agreements signed per project.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, code, and graphics on this site are the property of Safi Dot Tech unless otherwise stated. Upon final payment for a project, the client is granted ownership rights as specified in their contract.
          </p>

          <h2>4. Payment and Fees</h2>
          <p>
            Fees for services are structured based on the chosen package. Projects require a mobilization deposit. Full payment details and schedules will be part of the specific project Statement of Work.
          </p>

          <h2>5. Revisions and Changes</h2>
          <p>
            Our fixed-price models include specified rounds of revisions. Scope changes requested after project commencement may incur additional fees at our standard hourly rates.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Safi Dot Tech is not liable for indirect or consequential damages arising from the use of our services. We strive for excellence but do not guarantee specific search rankings unless explicitly stated.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by the laws of Pakistan and the United Kingdom. Any disputes arising from these terms will be settled in the jurisdiction of the courts in these locations.
          </p>
        </article>
      </SectionContainer>
    </main>
  );
}
