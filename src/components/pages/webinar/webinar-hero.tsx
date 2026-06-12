import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trustStats } from "./webinar-data";

const WebinarHero = () => {
  const liveBadge = (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-[#e4e0f0]">
      <CalendarDays className="size-4 text-[#e8d08f]" />
      Live <span className="text-[#c9a84c]">Astrology Webinar</span> on Sunday,
      12 July 2026
    </span>
  );

  return (
    <section className="relative mx-auto flex w-full max-w-300 flex-col gap-8 px-4 pt-36 pb-16 md:pt-44 lg:min-h-[calc(100vh-88px)] lg:flex-row lg:items-center lg:gap-16">
      <div
        className="invisible inline-flex w-fit flex-wrap items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-2 opacity-0 backdrop-blur-md lg:hidden"
        data-hero-item
      >
        {liveBadge}
      </div>

      <div className="order-3 flex flex-1 flex-col items-start lg:order-none">
        <div
          className="invisible mb-8 hidden flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 opacity-0 backdrop-blur-md lg:inline-flex"
          data-hero-item
        >
          {liveBadge}
        </div>

        <h1
          className="invisible max-w-4xl text-4xl leading-[1.05] text-white opacity-0 md:text-7xl"
          data-hero-item
        >
          Start Your Astrology Journey at
          <br /> <span className="text-[#c9a84c] italic">Cosmic Path</span>
        </h1>

        <p
          className="invisible mt-6 max-w-2xl text-lg leading-8 text-[#bdb7ce] opacity-0 md:text-xl"
          data-hero-item
        >
          Join a live Astrology Webinar with{" "}
          <span className="text-[#c9a84c]">Yashkaran Sharma</span> and discover
          our complete course curriculum, learn chart reading basics, and get
          your questions answered LIVE.
        </p>

        <div
          className="invisible mt-9 flex flex-wrap items-center gap-4 opacity-0"
          data-hero-item
        >
          <Link
            href="#register"
            className="inline-flex items-center gap-3 rounded-full bg-linear-to-br from-[#e8d08f] to-[#b08930] px-7 py-4 text-base font-bold text-[#0a0818] shadow-[0_12px_35px_rgba(201,168,76,0.24)] transition-transform hover:-translate-y-1"
          >
            Reserve Your Seat - Rs. 99
            <ArrowRight className="size-5" />
          </Link>
          <Link
            href="#learn"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-[#c9a84c] hover:bg-[#c9a84c]/10"
          >
            What You Will Learn
          </Link>
        </div>

        <div
          className="invisible mt-8 flex flex-wrap gap-3 opacity-0"
          data-hero-item
        >
          {trustStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-[#bdb7ce]"
              >
                <Icon className="size-4 text-[#c9a84c]" />
                <strong className="text-[#e8d08f]">{stat.value}</strong>
                {stat.label}
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="invisible relative order-2 mx-auto aspect-square w-full max-w-90 shrink-0 opacity-0 sm:max-w-115 lg:order-none lg:max-w-125"
        data-hero-photo
      >
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#c9a84c]/30 to-[#7b5ea7]/30 blur-2xl" />
        <div className="relative h-full w-full rounded-full border border-[#c9a84c]/25 bg-white/4 p-3 shadow-[0_0_80px_rgba(201,168,76,0.20)]">
          <Image
            src="/owner-photo.jpeg"
            alt="Yash Karan Sharma"
            fill
            priority
            className="rounded-full object-cover p-3"
          />
        </div>
      </div>
    </section>
  );
};

export default WebinarHero;
