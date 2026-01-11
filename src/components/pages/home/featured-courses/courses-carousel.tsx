"use client";

import { coursesData } from "@/lib/constants";
import CourseCard from "@/components/shared/course-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CoursesCarousel = () => {
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
        {coursesData.map((course, i) => (
          <CarouselItem key={i} className="basis-1/3">
            <CourseCard course={course} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CoursesCarousel;
