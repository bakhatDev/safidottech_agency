import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';

export const metadata = pageMetadata.terms;

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Terms of Service"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Terms' }
        ]}
      />

      {/* 2. Content Section */}
      <SectionContainer>
        <article className="prose prose-invert prose-lime max-w-3xl mx-auto">
          <p className="italic text-white/60 bg-white/5 p-4 rounded-xl border border-white/10 mb-10">
            Note: These terms should be reviewed by a qualified legal professional before publication.
          </p>

          <h2>1. Acceptance</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2>2. Services</h2>
          <p>
            Safi Dot Tech provides web design, development, SEO, and digital marketing services. The scope of work, timelines, and specific deliverables for any project will be outlined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.
          </p>

          <h2>3. Payment</h2>
          <p>
            Payments for services shall be made as specified in the individual project contract. We offer packages starting from $499. For clients in Pakistan, pricing in PKR is available based on current exchange rates. Projects typically require a commencement deposit before work begins.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, Safi Dot Tech retains the rights to all underlying code, techniques, and processes used. Upon final payment, the client will be granted a license or ownership of the specific final deliverables as defined in their contract.
          </p>

          <h2>5. Revisions</h2>
          <p>
            Our fixed-price packages include a specified number of revision rounds. Any requests for changes beyond the agreed project scope or revision limits may be subject to additional fees at our standard hourly rates.
          </p>

          <h2>6. Liability</h2>
          <p>
            Safi Dot Tech shall not be liable for any indirect, special, or consequential damages, or any loss of revenue, profits, or data arising in connection with this agreement or the services provided, even if we have been advised of the possibility of such damages.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Pakistan and the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in those locations.
          </p>
        </article>
      </SectionContainer>
    </main>
  );
}
