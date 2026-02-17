"use client";

import CourseCard from "@/components/shared/course-card";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";
import { DifficultyFilter } from "./header";

interface CoursesContainerProps {
  filter: DifficultyFilter;
}

const CoursesContainer = ({ filter }: CoursesContainerProps) => {
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

  const filteredData =
    filter === "all"
      ? data
      : data.filter((course) => course.difficulty === filter);

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <CourseCard key={data.title} course={data} />
          ))
        ) : (
          <p className="text-muted-foreground col-span-full py-12 text-center text-lg">
            No courses found for this difficulty level.
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursesContainer;
