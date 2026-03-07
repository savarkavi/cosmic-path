"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense, useCallback } from "react";
import BundleBanner from "@/components/pages/courses/bundle-banner";
import CoursesContainer from "@/components/pages/courses/courses-container";
import Header, { TypeFilter } from "@/components/pages/courses/header";

const CoursesPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filterParam = searchParams.get("type");
  const validFilters: TypeFilter[] = ["all", "astrology", "vastu", "tarot"];
  const filter: TypeFilter = validFilters.includes(filterParam as TypeFilter)
    ? (filterParam as TypeFilter)
    : "all";

  const setFilter = useCallback(
    (newFilter: TypeFilter) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newFilter === "all" || !newFilter) {
        params.delete("type");
      } else {
        params.set("type", newFilter);
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return (
    <div className="mx-auto w-full max-w-300 px-4 pt-28 md:pt-46 lg:px-0">
      <Header filter={filter} onFilterChange={setFilter} />
      <BundleBanner />
      <CoursesContainer filter={filter} />
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
