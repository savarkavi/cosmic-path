import Image from "next/image";
import CourseCard from "./course-card";
import { Skeleton } from "@/components/ui/skeleton";

const HeroImage = () => {
  return (
    <div className="relative w-full px-8">
      <div className="relative h-100 w-full rounded-2xl 2xl:h-140 2xl:w-140">
        <Skeleton className="absolute top-0 left-0 h-full w-full rounded-2xl bg-gray-300" />
        <Image
          src="/hero-img.jpg"
          alt="hero-image"
          fill
          className="rounded-2xl object-cover"
        />
      </div>
      <CourseCard />
    </div>
  );
};

export default HeroImage;
