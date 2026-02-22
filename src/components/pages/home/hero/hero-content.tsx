import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { playfair } from "@/app/layout";

const HeroContent = () => {
  return (
    <div className="z-10 w-full px-8 2xl:px-0">
      <div className="flex h-full w-full flex-col justify-center gap-4">
        <div className="bg-accent border-primary mb-6 flex w-fit items-center justify-center gap-2 rounded-full border px-3 py-1">
          <div className="relative">
            <div className="bg-primary h-2 w-2 rounded-full" />
            <div className="bg-primary absolute top-0 left-0 h-2 w-2 animate-ping rounded-full" />
          </div>
          <p className="text-accent-foreground text-[12px] font-semibold uppercase">
            New Palmistry course now available
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <p
            className={`${playfair.className} scale-y-120 text-5xl leading-12 font-semibold sm:text-6xl lg:text-7xl lg:leading-14`}
          >
            Master the
            <br /> <span className="text-accent-foreground">Language</span> of
            the Stars
          </p>
          <p className="max-w-xl leading-tight font-light sm:text-xl lg:text-2xl">
            Professional{" "}
            <span className="text-primary font-semibold italic">
              Vedic Astrology
            </span>{" "}
            certification for the modern seeker. Bring order to chaos and
            illuminate lives with ancient starlit wisdom.
          </p>
        </div>
        <div className="mt-6 flex items-center gap-6">
          <Link href="/courses">
            <Button
              size="lg"
              className="bg-foreground flex cursor-pointer items-center gap-2 rounded-full px-12 py-6 text-white"
            >
              <span>Explore Courses</span>
              <BookOpen />
            </Button>
          </Link>
          <Link href="/consultation">
            <Button
              size="lg"
              className="border-muted-foreground flex cursor-pointer items-center gap-2 rounded-full border bg-transparent py-6"
            >
              <span>Book Consultation</span>
              <Calendar />
            </Button>
          </Link>
        </div>
        <Separator className="my-2 w-full bg-gray-300 2xl:my-6" />
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <Image
              src="/testimonial-avatar-1.jpg"
              alt="Student"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border-2 border-white bg-blue-50 object-cover shadow-sm"
            />
            <Image
              src="/testimonial-avatar-2.jpg"
              alt="Student"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <Image
              src="/testimonial-avatar-3.jpg"
              alt="Student"
              width={48}
              height={48}
              className="z-10 h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <div className="z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#e8edf5] text-sm font-medium text-slate-800 shadow-sm">
              2k+
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1 text-[#d97706]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-medium text-[#2d5c8f]">
              Trusted by 2,000+ Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
