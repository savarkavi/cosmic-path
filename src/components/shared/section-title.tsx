import { cn } from "@/lib/utils";
import { IoStar } from "react-icons/io5";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="flex w-fit flex-col items-center gap-8">
      <div className="flex w-100 items-center gap-2">
        <div className="bg-primary h-px w-1/2" />
        <IoStar className="text-primary size-6" />
        <div className="bg-primary h-px w-1/2" />
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-center gap-5">
          {title.split(" ").map((word, i) => (
            <p
              key={i}
              className={cn(
                "text-6xl uppercase",
                i === 1 && "text-accent-foreground italic",
              )}
            >
              {word}
            </p>
          ))}
        </div>
        <p className="text-muted-foreground mt-4 max-w-150 text-center text-lg">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
