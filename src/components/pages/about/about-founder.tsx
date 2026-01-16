import { Separator } from "@radix-ui/react-separator";
import { Leaf, Target } from "lucide-react";
import Image from "next/image";

const AboutFounder = () => {
  return (
    <section className="mt-36 flex justify-center gap-30">
      <div className="flex flex-col gap-10">
        <p className="text-7xl capitalize">
          Meet the{" "}
          <span className="text-accent-foreground italic">founder</span>
        </p>
        <p className="text-muted-foreground text-xl font-semibold">
          With a deep passion for astrology and spiritual sciences, Yash Karan
          Sharma founded this platform with a simple yet powerful vision — to
          help people gain clarity, confidence, and direction in life through
          authentic astrological guidance.
          <br />
          <br /> With over 15+ years of experience in Vedic astrology,
          numerology, and planetary remedies, he has guided thousands of
          individuals across the globe in matters of career, relationships,
          health, and personal growth. His approach combines traditional wisdom
          with a modern, practical understanding of today’s challenges.
        </p>
        <Separator className="h-px w-full bg-gray-300" />
        <div className="flex w-full items-center justify-between gap-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Leaf className="text-green-500" />
              <p className="text-xl font-semibold">Philosophy</p>
            </div>
            <p className="text-muted-foreground">
              Empowerment through awareness, not fear through predictions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Target className="text-red-500" />
              <p className="text-xl font-semibold">Mission</p>
            </div>
            <p className="text-muted-foreground">
              Deliver honest, practical, and spiritually grounded guidance to
              every seeker.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-[600px] shrink-0 rounded-full">
        <Image
          src="/testimonial-avatar-2.jpg"
          alt="founder image"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutFounder;
