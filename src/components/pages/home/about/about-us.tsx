import SectionTitle from "@/components/shared/section-title";
import Image from "next/image";

const philosophyItems = [
  {
    title: "Empowerment over prediction",
    description: "You leave with understanding, not dependency.",
  },
  {
    title: "Honesty over theatre",
    description: "If a chart doesn't call for a remedy, you won't be sold one.",
  },
  {
    title: "Tradition, applied practically",
    description: "Vedic method, explained in language you can actually use.",
  },
  {
    title: "One practitioner, full accountability",
    description:
      "Every reading is done personally by Yashkaran - nothing outsourced.",
  },
];

const title = (
  <>
    Awareness, not fear.{" "}
    <span className="text-primary font-serif italic">
      {"That's the entire practice."}
    </span>
  </>
);

const subtitle =
  "Astrology is easy to sell through fear - vague warnings, urgent remedies, endless follow-ups. Cosmic Path is built the opposite way: every session exists to give you clarity you can act on, not anxiety you have to keep paying to manage.";

const AboutUs = () => {
  return (
    <div className="bg-accent-foreground mt-24 w-full overflow-hidden px-6 py-24 text-white md:py-32 xl:px-0">
      <div className="mx-auto grid w-full max-w-300 items-center gap-16 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
        <div className="flex justify-center">
          <div className="relative flex h-[400px] w-[250px] items-end justify-center md:h-[520px] md:w-[340px]">
            <div
              className="absolute top-1/2 left-1/2 h-[120%] w-[170%] -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite]"
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
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="210"
                  stroke="#d97706"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <path
                  d="M250 40L400 104L462 250L400 396L250 460L100 396L38 250L100 104Z"
                  stroke="#d97706"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                />
                <path
                  d="M250 40L462 250M400 104L250 460M100 104L400 396M38 250L250 460M100 396L250 40"
                  stroke="#d97706"
                  strokeOpacity="0.3"
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
            <Image
              src="/vedic-astrologer-cropped.png"
              alt="Vedic astrologer illustration"
              fill
              className="relative z-10 ml-4 object-contain object-bottom"
              sizes="(min-width: 768px) 340px, 280px"
            />
          </div>
        </div>

        <div>
          <SectionTitle
            badge="Our Philosophy"
            title={title}
            subtitle={subtitle}
            className="max-w-2xl"
            titleClassName="text-white md:text-5xl"
            subtitleClassName="max-w-2xl text-white/85 md:text-base"
            badgeClassName="text-primary"
          />

          <div className="mt-8 grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {philosophyItems.map((item) => (
              <div
                key={item.title}
                className="border-t border-white/25 py-5 text-white"
              >
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
