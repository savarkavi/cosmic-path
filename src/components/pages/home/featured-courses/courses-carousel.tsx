"use client";

import CourseCard from "@/components/shared/course-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";

const CoursesCarousel = () => {
  const data = useQuery(api.courses.getFeaturedCourses);

  if (data === undefined)
    return (
      <div className="mt-16 flex w-full items-center justify-between gap-10">
        {[1, 2, 3].map((item) => (
          <Skeleton
            key={item}
            className="h-125 w-full rounded-xl bg-gray-200"
          />
        ))}{" "}
      </div>
    );

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
      className="relative mx-auto mt-16 w-full max-w-md lg:max-w-none"
    >
      <CarouselContent>
        {data.map((course, i) => (
          <CarouselItem key={i} className="lg:basis-1/2 xl:basis-1/3">
            <CourseCard course={course} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex lg:hidden 2xl:flex" />
      <CarouselNext className="hidden md:flex lg:hidden 2xl:flex" />
    </Carousel>
  );
};

export default CoursesCarousel;
