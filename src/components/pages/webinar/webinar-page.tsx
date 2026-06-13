"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Loader2 } from "lucide-react";
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

const WebinarPage = ({ slug }: { slug: string }) => {
  const webinar = useQuery(api.webinars.getWebinarBySlug, { slug });
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!webinar) return;

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
    { scope, dependencies: [webinar] },
  );

  if (webinar === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080613]">
        <Loader2 className="size-8 animate-spin text-[#c9a84c]" />
      </div>
    );
  }

  if (webinar === null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#080613] text-[#e4e0f0]">
        <h1 className="text-3xl font-semibold">Webinar Not Found</h1>
        <p className="text-[#bdb7ce]">
          This webinar doesn&apos;t exist or may have been removed.
        </p>
      </div>
    );
  }

  const isPast = new Date(webinar.scheduledAt).getTime() < Date.now();

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
        <WebinarHero
          webinarId={webinar._id}
          headline={webinar.headline}
          description={webinar.description}
          scheduledAt={webinar.scheduledAt}
          price={webinar.price}
        />
        <WebinarCountdown scheduledAt={webinar.scheduledAt} isPast={isPast} />
        <WebinarLearnSection />
        <WebinarDetailsSection
          scheduledAt={webinar.scheduledAt}
          duration={webinar.duration}
        />
        <WebinarInstructorSection />
        <WebinarTestimonialsSection />
        <WebinarFaqSection price={webinar.price} />
        <WebinarCta webinarId={webinar._id} price={webinar.price} />
      </div>
    </main>
  );
};

export default WebinarPage;
