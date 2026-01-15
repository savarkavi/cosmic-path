import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

type service = {
  label: string;
  img: string;
  desc: string;
};

interface ServiceCardProps {
  service: service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-accent h-full w-full rounded-md shadow-lg">
      <div className="relative h-[300px] w-full rounded-t-md">
        <Image
          src={service.img}
          alt="service banner image"
          fill
          className="rounded-t-md object-cover"
        />
        <div className="from-accent absolute bottom-0 left-0 h-24 w-full bg-linear-to-t" />
      </div>
      <div className="mt-4 flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <p className="line-clamp-1 text-2xl uppercase">{service.label}</p>
        </div>
        <p className="text-muted-foreground line-clamp-2">{service.desc}</p>
        <Separator className="my-4 w-full" />
        <Button className="bg-foreground mt-4 cursor-pointer py-6 text-lg text-white">
          Book now
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
