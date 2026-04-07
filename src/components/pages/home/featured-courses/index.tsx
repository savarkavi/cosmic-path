import SectionTitle from "@/components/shared/section-title";
import CoursesCarousel from "./courses-carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedCoursesSection = () => {
  const subtitle =
    "Discover thoughtfully crafted courses that deepen your spiritual understanding and empower personal growth at your own pace.";

  return (
    <section className="mx-auto flex min-h-screen max-w-[1360px] flex-col items-center px-8 pt-30">
      <div className="relative flex justify-center">
        <SectionTitle title="Our Courses" subtitle={subtitle} />
      </div>
      <CoursesCarousel />
      <Button
        variant="outline"
        className="border-primary text-foreground mt-16 cursor-pointer rounded-full px-10 py-6"
      >
        <Link href="/courses">
          <div className="flex items-center gap-2">
            Explore More Courses
            <ArrowRight />
          </div>
        </Link>
      </Button>
    </section>
  );
};

export default FeaturedCoursesSection;
