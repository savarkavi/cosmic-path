"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type DifficultyFilter = "all" | "beginner" | "advanced";

interface HeaderProps {
  filter: DifficultyFilter;
  onFilterChange: (value: DifficultyFilter) => void;
}

const Header = ({ filter, onFilterChange }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-6 md:items-center lg:gap-8 xl:flex-row xl:justify-between xl:gap-0">
      <p className="text-3xl capitalize md:text-6xl">
        Explore the{" "}
        <span className="text-accent-foreground italic">Cosmic</span> sciences
      </p>
      <Tabs
        value={filter}
        onValueChange={(value) => onFilterChange(value as DifficultyFilter)}
      >
        <TabsList className="h-auto gap-2 rounded-full bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-foreground cursor-pointer rounded-full border px-8 py-2.5 text-sm font-medium shadow-lg data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            All courses
          </TabsTrigger>
          <TabsTrigger
            value="beginner"
            className="data-[state=active]:bg-foreground cursor-pointer rounded-full border px-8 py-2.5 text-sm font-medium shadow-lg data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            Beginner
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="data-[state=active]:bg-foreground cursor-pointer rounded-full border px-8 py-2.5 text-sm font-medium shadow-lg data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            Advanced
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Header;
