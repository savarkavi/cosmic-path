"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type TypeFilter = "all" | "astrology" | "vastu" | "tarot";

interface HeaderProps {
  filter: TypeFilter;
  onFilterChange: (value: TypeFilter) => void;
}

const Header = ({ filter, onFilterChange }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-6 md:items-center lg:gap-8 xl:flex-row xl:justify-between xl:gap-0">
      <p className="text-3xl capitalize md:text-6xl">
        Explore the{" "}
        <span className="text-accent-foreground italic">Cosmic</span> sciences
      </p>
      <Select
        value={filter}
        onValueChange={(value) => onFilterChange(value as TypeFilter)}
      >
        <SelectTrigger className="w-48 cursor-pointer rounded-full border px-6 py-2.5 text-sm font-medium shadow-lg">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="all">All courses</SelectItem>
          <SelectItem value="astrology">Astrology</SelectItem>
          <SelectItem value="vastu">Vastu</SelectItem>
          <SelectItem value="tarot">Tarot</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Header;
