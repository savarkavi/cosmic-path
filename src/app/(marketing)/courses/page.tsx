"use client";

import { useState } from "react";
import BundleBanner from "@/components/pages/courses/bundle-banner";
import CoursesContainer from "@/components/pages/courses/courses-container";
import Header, { DifficultyFilter } from "@/components/pages/courses/header";

const CoursesPage = () => {
  const [filter, setFilter] = useState<DifficultyFilter>("all");

  return (
    <div className="mx-auto w-full max-w-340 px-4 pt-28 md:pt-46">
      <Header filter={filter} onFilterChange={setFilter} />
      <BundleBanner />
      <CoursesContainer filter={filter} />
    </div>
  );
};

export default CoursesPage;
