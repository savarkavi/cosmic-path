import Image from "next/image";
import { Doc } from "../../../../convex/_generated/dataModel";
import CourseHighlights from "./course-highlights";
import CoursePurchase from "./course-purchase";

interface CourseDetailsProps {
  course: Doc<"courses">;
}

const CourseDetails = ({ course }: CourseDetailsProps) => {
  return (
    <div className="mx-auto mt-40 flex max-w-340 justify-center gap-14">
      <div className="relative h-170 w-150 shrink-0 rounded-lg shadow-xl">
        <Image
          src={course.imageUrl ? course.imageUrl : "/placeholder.png"}
          alt="course banner"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex max-w-150 flex-col justify-center gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-accent-foreground text-6xl leading-tight capitalize">
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
