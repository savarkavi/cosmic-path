import SectionTitle from "@/components/shared/section-title";
import ServiceCard from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/constants";
import Link from "next/link";

const ServicesSection = () => {
  const subtitle =
    "Explore our diverse range of spiritual and astrological consultations designed to guide you through life&apos;s journey with clarity and purpose.";

  return (
    <section className="mx-auto flex min-h-screen max-w-[1360px] flex-col items-center pt-20">
      <div>
        <SectionTitle title="Our Services" subtitle={subtitle} />
      </div>
      <div className="mt-16 grid grid-cols-3 gap-12">
        {servicesData.slice(0, 3).map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
      <Link href="/services">
        <Button size="lg" className="mt-16 cursor-pointer text-white">
          Explore More
        </Button>
      </Link>
    </section>
  );
};

export default ServicesSection;
