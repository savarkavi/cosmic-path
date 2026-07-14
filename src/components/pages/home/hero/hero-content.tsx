import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { playfair } from "@/app/layout";

const HeroContent = () => {
  return (
    <div className="z-10 w-full px-8 2xl:px-0">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:items-start">
        <div className="flex flex-col gap-12">
          <p
            className={`${playfair.className} max-w-2xl scale-y-120 text-center text-5xl leading-12 sm:text-6xl lg:text-left lg:leading-14`}
          >
            Discover the Power of{" "}
            <span className="text-accent-foreground font-semibold italic">
              Vedic Astrology
            </span>
          </p>
          <p className="mx-auto max-w-xl text-center leading-tight font-light capitalize sm:text-xl lg:text-left lg:text-xl">
            Explore professional{" "}
            <span className="font-bold">
              astrology courses, one-on-one consultations, Vastu guidance,
              personalized remedies
            </span>
            , and more with the renowned astrologer
            <span className="text-primary font-semibold italic">
              Yashkaran Sharma
            </span>{" "}
            —helping you understand life&apos;s patterns through authentic Vedic
            wisdom.
          </p>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Link href="/courses">
            <Button
              size="lg"
              className="bg-foreground flex cursor-pointer items-center gap-2 rounded-full px-12 py-6 text-white"
            >
              <span>Explore Courses</span>
              <BookOpen />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              className="border-muted-foreground flex cursor-pointer items-center gap-2 rounded-full border bg-transparent py-6"
            >
              <span>Book Consultation</span>
              <Calendar />
            </Button>
          </Link>
        </div>
        <div className="border-primary mt-6 border-l pl-4">
          <p className="text-accent-foreground max-w-md font-serif text-lg leading-relaxed font-semibold italic">
            &quot;A chart doesn&apos;t predict your fate. It shows you where
            your leverage is.&quot;
          </p>
          <p className="text-muted-foreground mt-2 text-[10px] tracking-[0.22em] uppercase">
            Yashkaran Sharma, Founder, Cosmic Path
          </p>
        </div>
        <Separator className="my-2 w-full bg-gray-300 2xl:my-6" />
      </div>
    </div>
  );
};

export default HeroContent;
