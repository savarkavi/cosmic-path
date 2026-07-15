import SectionTitle from "@/components/shared/section-title";
import Image from "next/image";

const stats = [
  { value: "15+", label: "Years Practicing" },
  { value: "3", label: "Disciplines Taught" },
  { value: "2,000+", label: "Students" },
];

const title = (
  <>
    A lifetime of serious study,{" "}
    <span className="text-primary font-serif italic">
      carried with clarity and integrity.
    </span>
  </>
);

const MeetTheFounderSection = () => {
  return (
    <section className="bg-[#202837] px-6 py-24 text-white md:py-32 xl:px-0">
      <div className="mx-auto grid w-full max-w-300 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="mx-auto w-full max-w-[420px]">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/12 bg-[#242c3a]">
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(120deg, transparent 0 26px, rgba(217, 119, 6, 0.35) 27px, transparent 28px)",
              }}
              aria-hidden="true"
            />
            <Image
              src="/owner-photo.jpeg"
              alt="Yashkaran Sharma"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>

          <div className="mt-5 grid grid-cols-3 border border-white/12 px-5 py-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-primary font-serif text-2xl leading-none font-semibold">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[11px] tracking-[0.08em] text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl">
          <SectionTitle
            badge="Meet the founder"
            title={title}
            className="max-w-2xl"
            titleClassName="text-white"
            badgeClassName="text-primary"
          />

          <div className="mt-7 space-y-6 text-base leading-7 text-white/72">
            <p>
              Mr. Yashkaran Sharma has spent years in serious study of Vedic
              astrology, Tantra, numerology, and remedial traditions, learning
              through classical texts, teachers, saints, and practicing masters.
              His work blends tradition with a modern, practical outlook.
            </p>
            <p>
              From early research in astrology&apos;s remedial side to teaching
              serious students and research scholars, his approach has remained
              disciplined: study deeply, explain clearly, and preserve the
              integrity of the knowledge while making it usable in everyday
              life.
            </p>
          </div>

          <figure className="border-primary mt-10 border-l pl-7">
            <blockquote className="font-serif text-2xl leading-9 font-semibold text-white italic">
              &quot;People don&apos;t come to me because they believe in magic.
              They come because they want a second, honest opinion on decisions
              they&apos;ve already been sitting with for months.&quot;
            </blockquote>
            <figcaption className="text-primary mt-6 font-mono text-[11px] tracking-[0.18em] uppercase">
              Yashkaran Sharma
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounderSection;
