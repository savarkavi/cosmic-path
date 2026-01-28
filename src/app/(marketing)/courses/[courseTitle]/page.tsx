"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { use } from "react";
import { Triangle } from "react-loader-spinner";
import CourseAbout from "@/components/pages/course-info/course-about";
import CourseDetails from "@/components/pages/course-info/course-details";

const CourseInfoPage = ({
  params,
}: {
  params: Promise<{ courseTitle: string }>;
}) => {
  const { courseTitle } = use(params);

  const data = useQuery(api.courses.getCourseBySlug, { slug: courseTitle });

  if (data === undefined)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#f59e0a"
          ariaLabel="triangle-loading"
        />
        <p className="text-muted-foreground text-lg">Fetching details...</p>
      </div>
    );

  if (data === null)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <p className="">This course doesnt exist.</p>
      </div>
    );

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-16">
      <CourseDetails course={data} />
      <CourseAbout course={data} />
    </div>
  );
};

export default CourseInfoPage;
