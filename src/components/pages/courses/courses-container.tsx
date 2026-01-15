import CourseCard from "@/components/shared/course-card";
import { coursesData } from "@/lib/constants";

const CoursesContainer = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-3 gap-12">
        {coursesData.map((data) => (
          <CourseCard key={data.title} course={data} />
        ))}
      </div>
    </div>
  );
};

export default CoursesContainer;
