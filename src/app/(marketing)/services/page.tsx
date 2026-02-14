import Header from "@/components/pages/services/header";
import ServiceBanner from "@/components/pages/services/service-banner";
import ServicesContainer from "@/components/pages/services/services-container";

const ServicesPage = () => {
  return (
    <div className="mx-auto w-full max-w-340 px-4 pt-28 md:pt-46">
      <Header />
      <ServiceBanner />
      <ServicesContainer />
    </div>
  );
};

export default ServicesPage;
