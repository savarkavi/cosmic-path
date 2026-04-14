"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

const CourseHero = () => {
  const courses = useQuery(api.courses.getAllCourses);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 md:px-6 lg:px-8">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/courses-hero-img.jpg"
          alt="courses banner"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/75 via-slate-900/50 to-slate-900/20" />
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
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-amber-400/60" />
            <span className="text-sm font-medium tracking-[0.2em] text-amber-400 uppercase">
              Limited Bundle
            </span>
          </div>

          <h1 className="text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl">
            Become a{" "}
            <span
              className="italic"
              style={{ color: "oklch(76.856% 0.16472 70.113)" }}
            >
              Certified
            </span>{" "}
            Astrologer
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Get access to premium courses of all levels and 100+ hrs of
            mentorship, taught by{" "}
            <span className="text-primary italic">
              Astrologer Yashkaran Sharma
            </span>
            .
          </p>
        </div>

        {/* Highlight badges */}
        <div className="flex flex-col gap-4">
          <p className="mt-2 text-sm font-medium tracking-widest text-slate-400 uppercase">
            Our Courses
          </p>
          <div className="flex flex-wrap gap-3">
            {courses === undefined ? (
              <div className="h-10 w-32 animate-pulse rounded-full bg-white/10" />
            ) : (
              <>
                {courses.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-amber-400/30 hover:bg-white/10"
                  >
                    <Sparkles
                      className="h-4 w-4"
                      style={{ color: "oklch(76.856% 0.16472 70.113)" }}
                    />
                    <span className="text-[0.7rem] font-medium text-slate-200 capitalize sm:text-sm">
                      {item.title}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
