import CourseCard from "@/components/shared/course-card";
import SectionTitle from "@/components/shared/section-title";
import { coursesData } from "@/lib/constants";

const FeaturedCoursesSection = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="flex justify-center">
        <SectionTitle title="Our Courses" />
      </div>
      <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 justify-items-center gap-20">
        {coursesData.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
