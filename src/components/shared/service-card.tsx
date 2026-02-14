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
    <div className="bg-background h-full w-full max-w-lg rounded-md shadow-lg">
      <div className="relative h-[200px] w-full rounded-t-md md:h-[300px]">
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
        <div className="text-muted-foreground flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full">
              <Image
                src="/testimonial-avatar-2.jpg"
                alt="avatar image"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] uppercase">Consultant</p>
              <p className="text-black">Yash Sharma</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] uppercase">Rate</p>
            <p className="text-black">
              <span className="text-primary font-bold">₹15</span>/Min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
