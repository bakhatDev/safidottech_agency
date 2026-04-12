import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import ContactPanel from '@/components/sections/ContactPanel';
import { teamMembers } from '@/data/team';
import FilteredTeamGrid from './FilteredTeamGrid';

export const metadata = pageMetadata.team;

export default function TeamListingPage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      {/* Section 1: Page Banner */}
      <PageBanner
        title="Meet The Team"
        eyebrow="The People Behind the Code"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Team' }
        ]}
      />

      {/* Section 2: Filterable Grid */}
      <FilteredTeamGrid members={teamMembers} />

      {/* Section 3: Contact Panel */}
      <ContactPanel />
    </main>
  );
}
