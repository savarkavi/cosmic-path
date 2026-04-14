import ConsultationHero from "@/components/pages/book-consultation/consultation-hero";
import ConsultationServicesGrid from "@/components/pages/book-consultation/consultation-services-grid";
import ConsultationCTA from "@/components/pages/book-consultation/consultation-cta";

const ServicesPage = () => {
  return (
    <div className="mx-auto pb-20 xl:pt-32">
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
