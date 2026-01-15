"use client";

import { servicesData } from "@/lib/constants";
import ServiceCard from "@/components/shared/service-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServicesCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      className="relative mt-16"
    >
      <CarouselContent>
        {servicesData.map((service, i) => (
          <CarouselItem key={i} className="basis-1/3">
            <ServiceCard service={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ServicesCarousel;
