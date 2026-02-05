import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";
import HeroServices from "./hero-services";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="z-10 h-dvh w-full">
      <div className="flex h-full w-full flex-col justify-center gap-8">
        {/* <div className="bg-accent-foreground w-fit rounded-full px-8 py-2 text-white capitalize">
          <p>Vedic mastery course now available</p>
        </div> */}
        <div className="flex flex-col gap-8">
          <p className="font-italiana flex flex-col text-8xl">
            <span className="flex items-center gap-2">
              <span>Expert</span>
              <span className="text-accent-foreground">Astrology</span>
            </span>
            <span>Guidance &</span>
            <span className="text-primary">Beyond</span>
          </p>
          <p className="text-muted-foreground text-3xl font-light">
            Follow the path of the <span className="text-black">cosmos</span>.
            Bring order to your chaos and{" "}
            <span className="text-black">illuminate</span> the lives of those
            around you through ancient{" "}
            <span className="text-black">starlit wisdom</span>.
          </p>
        </div>
        <div className="flex items-center gap-6">
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
        <Separator className="my-8 w-full bg-gray-300" />
        <HeroServices />
      </div>
    </div>
  );
};

export default HeroContent;
