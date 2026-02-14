"use client";

import CourseCard from "@/components/shared/course-card";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";

const CoursesContainer = () => {
  const data = useQuery(api.courses.getFeaturedCourses);

  if (data === undefined)
    return (
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <Skeleton
            key={item}
            className="h-125 w-full rounded-xl bg-gray-200"
          />
        ))}{" "}
      </div>
    );

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {data.map((data) => (
          <CourseCard key={data.title} course={data} />
        ))}
      </div>
    </div>
  );
};

export default CoursesContainer;
