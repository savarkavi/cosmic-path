import Image from "next/image";
import { consultationHighlights, servicesData } from "@/lib/constants";
import { Sparkles } from "lucide-react";

const ConsultationHero = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-slate-900 lg:mt-8">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/book-consultation-img.jpg"
          alt="consultation banner"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(76.856% 0.16472 70.113), transparent)",
        }}
      />
      <div
        className="absolute bottom-10 left-10 h-48 w-48 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(76.856% 0.16472 70.113), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-amber-400/60" />
            <span className="text-sm font-medium tracking-[0.2em] text-amber-400 uppercase">
              Expert Guidance
            </span>
          </div>

          <h1 className="text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl">
            Book Your{" "}
            <span
              className="italic"
              style={{ color: "oklch(76.856% 0.16472 70.113)" }}
            >
              Personalized
            </span>{" "}
            Consultation
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Get the most scientific analysis of your horoscope. Unlock clarity
            in love, career, health, and every area of life with Cosmic Path.
          </p>
        </div>

        {/* Highlight badges */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest text-slate-400 uppercase">
            Areas of Life
          </p>
          <div className="flex flex-wrap gap-3">
            {consultationHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-amber-400/30 hover:bg-white/10"
                >
                  <Icon
                    className="h-4 w-4"
                    style={{ color: "oklch(76.856% 0.16472 70.113)" }}
                  />
                  <span className="text-sm font-medium text-slate-200">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-2 text-sm font-medium tracking-widest text-slate-400 uppercase">
            Our Services
          </p>
          <div className="flex flex-wrap gap-3">
            {servicesData.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-amber-400/30 hover:bg-white/10"
              >
                <Sparkles
                  className="h-4 w-4"
                  style={{ color: "oklch(76.856% 0.16472 70.113)" }}
                />
                <span className="text-sm font-medium text-slate-200">
                  {item.label}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-amber-400/30 hover:bg-white/10">
              <Sparkles
                className="h-4 w-4"
                style={{ color: "oklch(76.856% 0.16472 70.113)" }}
              />
              <span className="text-sm font-medium text-slate-200">
                And More +
              </span>
            </div>
          </div>
        </div>

        {/* Starting price pill */}
        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium tracking-wide text-slate-400 uppercase">
              Starting from
            </span>
            <span
              className="text-3xl font-bold md:text-4xl"
              style={{ color: "oklch(76.856% 0.16472 70.113)" }}
            >
              ₹2,100
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <span className="text-sm text-slate-400">per session</span>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;
