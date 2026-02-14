import { Separator } from "@radix-ui/react-separator";
import { Leaf, Target } from "lucide-react";
import Image from "next/image";

const AboutFounder = () => {
  return (
    <section className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-12 md:mt-36 lg:gap-30 xl:max-w-none xl:flex-row xl:justify-center">
      <div className="flex flex-col gap-10">
        <p className="text-center text-4xl capitalize md:text-7xl xl:text-left">
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
          with a modern, practical understanding of today&apos;s challenges.
        </p>
        <Separator className="h-px w-full bg-gray-300" />
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
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
      <div className="relative h-[300px] w-[300px] shrink-0 rounded-full sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
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
