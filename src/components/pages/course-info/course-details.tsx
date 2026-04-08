"use client";

import Image from "next/image";
import { Doc } from "../../../../convex/_generated/dataModel";
import CourseContent from "./course-content";
import CoursePurchase from "./course-purchase";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  GraduationCap,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { calculateDiscountedPrice, formatINR } from "@/lib/utils";

interface CourseDetailsProps {
  course: Doc<"courses">;
}

const CourseDetails = ({ course }: CourseDetailsProps) => {
  const discountedPrice = calculateDiscountedPrice(
    course.price,
    course.discount,
  );

  return (
    <div className="flex w-full flex-col">
      {/* ── Hero Banner ── */}
      <div className="relative flex min-h-[520px] w-full items-end overflow-hidden bg-[#0f0d0a] md:min-h-[600px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={course.imageUrl ? course.imageUrl : "/placeholder.png"}
            alt={course.title}
            fill
            priority
            className="object-cover opacity-35"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0a] via-[#0f0d0a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0a]/80 to-transparent" />
        </div>

        {/* Decorative ambient glow */}
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#d49f3c]/10 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-40 pb-14 md:px-10 md:pb-20">
          {/* Breadcrumb */}
          <Link
            href="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-[#d49f3c]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Courses</span>
          </Link>

          {/* Course badges */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-[#d49f3c]/30 bg-[#d49f3c]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#d49f3c] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{course.difficulty}</span>
            </div>
            {course.classes && (
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
                <Clock className="h-3.5 w-3.5" />
                <span>{course.classes} Classes</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Certificate Included</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-playfair mb-5 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
            {course.title}
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            {course.description}
          </p>

          {/* Rating + price peek (mobile) */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#d49f3c]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/50">
                4.9 (120+ students)
              </span>
            </div>
            <div className="hidden h-5 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#d49f3c]" />
              <span className="text-sm font-medium text-white/50">
                By Yahskaran Sharma
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left column – Course Info */}
          <div className="flex-1">
            {/* Course Image Card */}
            <div className="mb-12 overflow-hidden rounded-2xl border border-[#e5ddd0]/60 shadow-lg">
              <div className="relative aspect-16/10 w-full">
                <Image
                  src={course.imageUrl ? course.imageUrl : "/placeholder.png"}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Course Content */}
            <CourseContent course={course} />

            {/* What You'll Gain */}
            <div className="mt-12 rounded-2xl border border-[#e5ddd0]/60 bg-white p-8 shadow-sm">
              <h3 className="font-playfair mb-6 text-2xl font-semibold text-[#1a1512]">
                What You&apos;ll Gain
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: <GraduationCap className="h-5 w-5" />,
                    text: "Professional certification upon completion",
                  },

                  {
                    icon: <Star className="h-5 w-5" />,
                    text: "Live Q&A sessions with the instructor",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-[#faf8f5] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d49f3c]/10 text-[#d49f3c]">
                      {item.icon}
                    </div>
                    <span className="pt-1.5 text-sm leading-snug font-medium text-[#4a4540]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column – Purchase Card (sticky) */}
          <div className="w-full shrink-0 lg:w-[380px]">
            <div className="lg:sticky lg:top-36">
              {/* Price highlight card */}
              <div className="overflow-hidden rounded-2xl border border-[#e5ddd0]/60 bg-white shadow-lg">
                {/* Price header */}
                <div className="border-b border-[#e5ddd0]/60 bg-gradient-to-r from-[#1a1512] to-[#2a2118] p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-white md:text-4xl">
                      ₹{formatINR(discountedPrice)}
                    </span>
                    {course.discount && course.discount > 0 && (
                      <>
                        <span className="text-base text-white/40 line-through">
                          ₹{formatINR(course.price)}
                        </span>
                        <span className="rounded-full bg-[#d49f3c]/20 px-2.5 py-0.5 text-xs font-bold text-[#d49f3c]">
                          {course.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6">
                  <CoursePurchase course={course} />
                </div>

                {/* Trust indicators */}
                <div className="border-t border-[#e5ddd0]/40 px-6 py-4">
                  <div className="flex flex-col gap-2.5 text-xs text-[#8a8580]">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span>Secure payment via Cashfree</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span>Instant Live classes after purchase</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor mini card */}
              <div className="mt-6 rounded-2xl border border-[#e5ddd0]/60 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/owner-photo.jpeg"
                    alt="Yahskaran Sharma"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border-2 border-[#d49f3c]/30 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#1a1512]">
                      Yahskaran Sharma
                    </p>
                    <p className="text-xs text-[#8a8580]">
                      Professional Vedic Astrologer
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-[#d49f3c]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
