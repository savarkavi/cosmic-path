"use client";

import CourseCard from "@/components/shared/course-card";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";

const CoursesContainer = () => {
  const data = useQuery(api.courses.getAllCourses);

  const renderHeader = () => (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3">
        <div
          className="h-px w-12"
          style={{ background: "oklch(76.856% 0.16472 70.113)" }}
        />
        <span
          className="text-sm font-medium tracking-[0.2em] uppercase"
          style={{ color: "oklch(76.856% 0.16472 70.113)" }}
        >
          Our Courses
        </span>
        <div
          className="h-px w-12"
          style={{ background: "oklch(76.856% 0.16472 70.113)" }}
        />
      </div>
      <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl lg:text-5xl">
        Choose Your{" "}
        <span
          className="italic"
          style={{ color: "oklch(76.856% 0.16472 70.113)" }}
        >
          Course
        </span>
      </h2>
      <p className="max-w-2xl text-lg text-slate-500">
        Explore our diverse range of educational programs. Select the path that resonates with your learning goals.
      </p>
    </div>
  );

  if (data === undefined)
    return (
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 lg:px-8 mt-16">
        {renderHeader()}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Skeleton
              key={item}
              className="h-[400px] w-full rounded-xl bg-gray-200"
            />
          ))}
        </div>
      </section>
    );

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 lg:px-8 mt-12">
      {renderHeader()}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.length > 0 ? (
          data.map((courseItem) => (
            <CourseCard key={courseItem.title} course={courseItem} />
          ))
        ) : (
          <p className="text-muted-foreground col-span-full py-12 text-center text-lg">
            No courses found.
          </p>
        )}
      </div>
    </section>
  );
};

export default CoursesContainer;
