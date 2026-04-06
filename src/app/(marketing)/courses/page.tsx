"use client";

import { Suspense } from "react";
import BundleBanner from "@/components/pages/courses/bundle-banner";
import CoursesContainer from "@/components/pages/courses/courses-container";
import Header from "@/components/pages/courses/header";

const CoursesPageContent = () => {
  return (
    <div className="mx-auto w-full max-w-300 px-4 pt-28 md:pt-46 xl:px-0">
      <Header />
      <BundleBanner />
      <CoursesContainer />
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
