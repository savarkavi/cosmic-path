import { heroServices } from "@/lib/constants";

const HeroServices = () => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      {heroServices.map((service) => {
        const Icon = service.icon;

        return (
          <div key={service.title}>
            <div className="flex items-center gap-3">
              <Icon color={service.color} />
              <p>{service.title}</p>
            </div>
            <p className="text-muted-foreground mt-2 w-full lg:max-w-[250px]">
              {service.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroServices;
