import { CalendarDays, Globe2, Laptop, Timer } from "lucide-react";
import WebinarSectionHeading from "./webinar-section-heading";

interface WebinarDetailsSectionProps {
  scheduledAt: string;
  duration: number;
}

const WebinarDetailsSection = ({
  scheduledAt,
  duration,
}: WebinarDetailsSectionProps) => {
  const date = new Date(scheduledAt);

  const formattedDate = date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  const startTime = date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  const endDate = new Date(date.getTime() + duration * 60 * 1000);
  const endTime = endDate.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  const hours = Math.floor(duration / 60);
  const mins = duration % 60;
  const durationLabel =
    hours > 0 && mins > 0
      ? `${hours}h ${mins}m of live learning`
      : hours > 0
        ? `${hours} hour${hours > 1 ? "s" : ""} of live learning`
        : `${mins} min of live learning`;

  const details = [
    {
      title: formattedDate,
      description: "Mark your calendar",
      icon: CalendarDays,
    },
    {
      title: `${startTime} - ${endTime} IST`,
      description: durationLabel,
      icon: Timer,
    },
    {
      title: "Online via Zoom",
      description: "Join from anywhere",
      icon: Laptop,
    },
    {
      title: "Hindi & English",
      description: "Bilingual session",
      icon: Globe2,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-300 px-4 py-16 md:py-24">
      <WebinarSectionHeading label="Webinar Details" title="When & Where" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {details.map((detail) => {
          const Icon = detail.icon;

          return (
            <article
              key={detail.title}
              className="rounded-2xl border border-white/[0.07] bg-white/4 p-7 text-center transition-colors hover:border-[#c9a84c]/25"
              data-reveal
            >
              <Icon className="mx-auto mb-4 size-8 text-[#c9a84c]" />
              <h3 className="text-lg font-semibold text-white">
                {detail.title}
              </h3>
              <p className="mt-2 text-sm text-[#bdb7ce]">
                {detail.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WebinarDetailsSection;
