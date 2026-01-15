import SectionTitle from "@/components/shared/section-title";
import ServicesCarousel from "./services-carousel";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  return (
    <section className="mx-auto min-h-screen max-w-[1360px] pt-12">
      <div className="relative flex justify-center">
        <SectionTitle title="Our Services" />
        <Button className="absolute right-0 -bottom-12 text-white">
          Explore More
        </Button>
      </div>
      <ServicesCarousel />
    </section>
  );
};

export default ServicesSection;
