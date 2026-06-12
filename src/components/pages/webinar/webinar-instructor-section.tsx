import { BadgeCheck, Leaf, Target } from "lucide-react";
import Image from "next/image";
import { founderBio } from "./webinar-data";
import WebinarSectionHeading from "./webinar-section-heading";

const WebinarInstructorSection = () => {
  return (
    <section className="mx-auto w-full max-w-300 px-4 py-16 md:py-24">
      <WebinarSectionHeading label="Your Instructor" title="Yashkaran Sharma" />
      <div
        className="mt-10 grid gap-10 rounded-2xl border border-white/[0.07] bg-white/4 p-6 backdrop-blur-md md:p-10 lg:grid-cols-[280px_1fr] lg:items-center"
        data-reveal
      >
        <div className="relative mx-auto aspect-square w-full max-w-65 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/10 p-3">
          <Image
            src="/owner-photo.jpeg"
            alt="Yash Karan Sharma"
            fill
            className="rounded-full object-cover p-3"
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-[#c9a84c] uppercase">
            Vedic Astrologer & Educator
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Learn with practical guidance rooted in tradition.
          </h3>
          <p className="mt-5 text-lg leading-8 text-[#bdb7ce]">{founderBio}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <BadgeCheck className="mb-3 size-5 text-[#c9a84c]" />
              <strong className="block text-xl text-white">15+</strong>
              <span className="text-sm text-[#bdb7ce]">Years Experience</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <Leaf className="mb-3 size-5 text-[#c9a84c]" />
              <strong className="block text-xl text-white">Awareness</strong>
              <span className="text-sm text-[#bdb7ce]">Not fear</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <Target className="mb-3 size-5 text-[#c9a84c]" />
              <strong className="block text-xl text-white">Clarity</strong>
              <span className="text-sm text-[#bdb7ce]">For every seeker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarInstructorSection;
