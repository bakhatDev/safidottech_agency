import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import Button from '@/components/shared/Button';
import { services } from '@/data/services';

export default function ServicesOverview() {
  return (
    <SectionContainer bgColor="bg-[#1A1A1A]">
      <SectionHeader
        align="center"
        eyebrow="What We Do Best"
        heading="Full-Stack Solutions. Zero Compromises."
        className="mb-12 lg:mb-16"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="flex justify-center mt-12 lg:mt-16">
        <Button
          label="View All Services →"
          href="/services"
          variant="ghost"
        />
      </div>
    </SectionContainer>
  );
}
