import ServiceCard from "@/components/shared/service-card";
import { servicesData } from "@/lib/constants";

const ServicesContainer = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-3 gap-12">
        {servicesData.map((data) => (
          <ServiceCard key={data.label} service={data} />
        ))}
      </div>
    </div>
  );
};

export default ServicesContainer;
