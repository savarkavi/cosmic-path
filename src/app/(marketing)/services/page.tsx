import ConsultationHero from "@/components/pages/book-consultation/consultation-hero";
import ConsultationServicesGrid from "@/components/pages/book-consultation/consultation-services-grid";
import ConsultationCTA from "@/components/pages/book-consultation/consultation-cta";

const ServicesPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 md:px-6 lg:px-8">
      <div className="flex flex-col gap-20">
        {/* Hero section */}
        <ConsultationHero />

        {/* Services Grid */}
        <ConsultationServicesGrid />

        {/* CTA Section */}
        <ConsultationCTA />
      </div>
    </div>
  );
};

export default ServicesPage;
