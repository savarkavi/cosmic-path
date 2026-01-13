import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex w-fit flex-col items-center gap-2">
      <div className="flex items-center gap-5">
        {title.split(" ").map((word, i) => (
          <p
            key={i}
            className={cn(
              "text-7xl capitalize",
              i === 1 && "font-italiana text-accent-foreground italic",
            )}
          >
            {word}
          </p>
        ))}
      </div>
      <div className="bg-primary h-1 w-1/2" />
    </div>
  );
};

export default SectionTitle;
