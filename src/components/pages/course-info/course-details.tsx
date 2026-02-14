import Image from "next/image";
import { Doc } from "../../../../convex/_generated/dataModel";
import CourseHighlights from "./course-highlights";
import CoursePurchase from "./course-purchase";

interface CourseDetailsProps {
  course: Doc<"courses">;
}

const CourseDetails = ({ course }: CourseDetailsProps) => {
  return (
    <div className="mx-auto mt-28 flex max-w-340 flex-col items-center gap-14 px-4 md:mt-40 lg:flex-row lg:justify-center">
      <div className="relative h-80 w-full shrink-0 rounded-lg shadow-xl sm:h-120 lg:h-170 lg:w-150">
        <Image
          src={course.imageUrl ? course.imageUrl : "/placeholder.png"}
          alt="course banner"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex max-w-150 flex-col justify-center gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-accent-foreground text-3xl leading-tight capitalize md:text-6xl">
            {course.title}
          </h1>
          <p className="text-xl text-gray-600">{course.description}</p>
        </div>
        <CourseHighlights course={course} />
        <CoursePurchase course={course} />
      </div>
    </div>
  );
};

export default CourseDetails;
