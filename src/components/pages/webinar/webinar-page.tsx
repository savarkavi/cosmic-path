"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebinarBackground from "./webinar-background";
import WebinarCountdown from "./webinar-countdown";
import WebinarCta from "./webinar-cta";
import WebinarDetailsSection from "./webinar-details-section";
import WebinarFaqSection from "./webinar-faq-section";
import WebinarHero from "./webinar-hero";
import WebinarInstructorSection from "./webinar-instructor-section";
import WebinarLearnSection from "./webinar-learn-section";
import WebinarTestimonialsSection from "./webinar-testimonials-section";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WebinarPage = () => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-hero-item]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          y: 0,
        },
      );

      gsap.fromTo(
        "[data-hero-photo]",
        { autoAlpha: 0, scale: 0.92, x: 40 },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scale: 1,
          x: 0,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            end: "bottom 15%",
            start: "top 82%",
            trigger: element,
          },
          y: 32,
        });
      });
    },
    { scope },
  );

  return (
    <main
      ref={scope}
      className="relative isolate overflow-hidden bg-[#080613] text-[#e4e0f0]"
    >
      <style jsx global>{`
        @keyframes webinar-twinkle {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: var(--star-opacity);
            transform: scale(1.2);
          }
        }
      `}</style>
      <WebinarBackground />
      <div className="relative z-10">
        <WebinarHero />
        <WebinarCountdown />
        <WebinarLearnSection />
        <WebinarDetailsSection />
        <WebinarInstructorSection />
        <WebinarTestimonialsSection />
        <WebinarFaqSection />
        <WebinarCta />
      </div>
    </main>
  );
};

export default WebinarPage;
