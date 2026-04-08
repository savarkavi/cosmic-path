import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { formatINR } from "@/lib/utils";

type service = {
  label: string;
  slug?: string;
  img: string;
  desc: string;
  price: number;
};

interface ServiceCardProps {
  service: service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link
      href={service.slug ? `/services/${service.slug}` : "#"}
      className="bg-background h-full w-full max-w-lg rounded-md shadow-lg transition-transform duration-300 hover:scale-[1.02]"
    >
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
          <p className="line-clamp-1 text-2xl capitalize">{service.label}</p>
        </div>
        <p className="text-muted-foreground line-clamp-2">{service.desc}</p>
        <Separator className="my-4 w-full" />
        <div className="text-muted-foreground flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full">
              <Image
                src="/owner-photo.jpeg"
                alt="avatar image"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] uppercase">Consultant</p>
              <p className="text-black">Yashkaran Sharma</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] uppercase">Fee</p>
            <p className="text-black">
              <span className="text-primary font-bold">
                ₹{formatINR(service.price)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
