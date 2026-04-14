"use client";

import { Suspense } from "react";
import CourseHero from "@/components/pages/courses/course-hero";
import CoursesContainer from "@/components/pages/courses/courses-container";

const CoursesPageContent = () => {
  return (
    <div className="mx-auto pb-20 xl:pt-32">
      <div className="flex flex-col gap-20">
        <CourseHero />
        <div id="courses">
          <CoursesContainer />
        </div>
      </div>
    </div>
  );
};

const CoursesPage = () => {
  return (
    <Suspense>
      <CoursesPageContent />
    </Suspense>
  );
};

export default CoursesPage;
