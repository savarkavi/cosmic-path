import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const HeroImage = () => {
  return (
    <div className="relative w-full px-8">
      <div className="relative mx-auto flex h-80 w-full items-center justify-center 2xl:h-140 2xl:w-140">
        <div
          className="absolute h-[112%] w-[112%] animate-[spin_28s_linear_infinite]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 500 500"
            className="h-full w-full overflow-visible"
            fill="none"
          >
            <circle
              cx="250"
              cy="250"
              r="177"
              stroke="#d97706"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="210"
              stroke="#d97706"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
            <path
              d="M250 40L400 104L462 250L400 396L250 460L100 396L38 250L100 104Z"
              stroke="#d97706"
              strokeOpacity="0.28"
              strokeWidth="1"
            />
            <path
              d="M250 40L462 250M400 104L250 460M100 104L400 396M38 250L250 460M100 396L250 40"
              stroke="#d97706"
              strokeOpacity="0.16"
              strokeWidth="1"
            />
            {[
              [250, 40],
              [400, 104],
              [462, 250],
              [400, 396],
              [250, 460],
              [100, 396],
              [38, 250],
              [100, 104],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5"
                fill="#d97706"
                fillOpacity="0.34"
              />
            ))}
          </svg>
        </div>
        <div className="relative h-60 w-60 rounded-full border border-[#d97706]/20 shadow-2xl shadow-[#d97706]/10 lg:h-70 lg:w-70 2xl:h-100 2xl:w-100">
          <Skeleton className="absolute top-0 left-0 h-full w-full rounded-full bg-gray-300" />
          <Image
            src="/yashkaran-photo.png"
            alt="Yashkaran Sharma"
            fill
            className="rounded-full object-cover"
            priority
          />
          <div className="bg-foreground absolute -right-2 bottom-2 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-[#d97706]/40 text-white shadow-xl shadow-black/20 2xl:h-24 2xl:w-24">
            <span className="text-primary font-serif text-2xl leading-none font-semibold">
              4.9
            </span>
            <span className="mt-1 text-[9px] tracking-wider text-white/70 uppercase">
              5000+ Reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
