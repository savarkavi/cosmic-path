import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
  badge?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  badge = "Learn directly from him",
  className,
  titleClassName,
  subtitleClassName,
  badgeClassName,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-3xl flex-col items-start self-start",
        className,
      )}
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="bg-primary h-px w-6" />
        <p
          className={cn(
            "text-primary font-mono text-[11px] tracking-[0.28em] uppercase",
            badgeClassName,
          )}
        >
          {badge}
        </p>
      </div>
      <h2
        className={cn(
          "text-foreground max-w-2xl text-4xl leading-[1.08] font-medium text-balance md:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground mt-6 max-w-xl text-base leading-7 md:text-lg",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
