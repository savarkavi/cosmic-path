import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";
import HeroServices from "./hero-services";

const HeroContent = () => {
  return (
    <div className="z-10 h-dvh w-full">
      <div className="flex h-full w-full flex-col justify-center gap-8">
        <div className="bg-accent-foreground w-fit rounded-full px-8 py-2 text-white capitalize">
          <p>Vedic mastery course now available</p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-italiana flex flex-col text-8xl">
            <span className="flex items-center gap-2">
              <span>Expert</span>
              <span>Astrology</span>
            </span>
            <span>Guidance &</span>
            <span className="text-primary">Beyond</span>
          </p>
          <p className="text-muted-foreground max-w-[600px] text-2xl font-light">
            Follow the path of the cosmos. Bring order to your chaos and
            illuminate the lives of those around you through ancient starlit
            wisdom.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Button
            size="lg"
            className="bg-foreground flex cursor-pointer items-center gap-2 rounded-full px-12 py-6 text-white"
          >
            <span>Explore Courses</span>
            <BookOpen />
          </Button>
          <Button
            size="lg"
            className="border-muted-foreground flex cursor-pointer items-center gap-2 rounded-full border bg-transparent py-6"
          >
            <span>Book Consultation</span>
            <Calendar />
          </Button>
        </div>
        <div className="bg-muted-foreground my-8 h-px"></div>
        <HeroServices />
      </div>
    </div>
  );
};

export default HeroContent;
