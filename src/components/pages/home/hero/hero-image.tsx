import Image from "next/image";
import CourseCard from "./course-card";

const HeroImage = () => {
  return (
    <div className="relative w-full px-8">
      <div className="relative h-100 w-full rounded-2xl 2xl:h-140 2xl:w-140">
        <Image
          src="/service-course-img.jpg"
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
