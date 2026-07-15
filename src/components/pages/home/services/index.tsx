import SectionTitle from "@/components/shared/section-title";
import ServiceCard from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const title = (
    <>
      Choose the <span className="text-accent-foreground italic">guidance</span>{" "}
      you actually need
    </>
  );
  const subtitle =
    "Explore our diverse range of spiritual and astrological consultations designed to guide you through life's journey with clarity and purpose.";

  return (
    <section className="mx-auto flex min-h-screen max-w-300 flex-col items-center px-4 py-30 xl:px-0">
      <SectionTitle badge="Our Services" title={title} subtitle={subtitle} />
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {servicesData.slice(0, 3).map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
      <Link href="/services">
        <Button
          variant="outline"
          className="border-primary text-foreground mt-16 cursor-pointer rounded-full px-10 py-6"
        >
          <div className="flex items-center gap-2">
            Explore All Services
            <ArrowRight />
          </div>
        </Button>
      </Link>
    </section>
  );
};

export default ServicesSection;
