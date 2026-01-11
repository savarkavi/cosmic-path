import SectionTitle from "@/components/shared/section-title";
import CoursesCarousel from "./courses-carousel";
import { Button } from "@/components/ui/button";

const FeaturedCoursesSection = () => {
  return (
    <section className="mx-auto min-h-screen max-w-[1400px] pt-12">
      <div className="relative flex justify-center">
        <SectionTitle title="Our Courses" />
        <Button className="absolute right-0 -bottom-12 text-white">
          Explore More
        </Button>
      </div>
      <CoursesCarousel />
    </section>
  );
};

export default FeaturedCoursesSection;
