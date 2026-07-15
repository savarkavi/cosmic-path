import SectionTitle from "@/components/shared/section-title";
import CoursesCarousel from "./courses-carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedCoursesSection = () => {
  const badge = "Learn directly from him.";
  const title = (
    <>
      Structured <span className="text-accent-foreground italic">courses</span>,
      taught by the person you&apos;d actually want to learn from
    </>
  );
  const subtitle =
    "Discover thoughtfully crafted courses that deepen your spiritual understanding and empower personal growth at your own pace.";

  return (
    <section className="mx-auto flex min-h-screen max-w-340 flex-col items-center px-8 pt-30">
      <SectionTitle title={title} subtitle={subtitle} badge={badge} />
      <CoursesCarousel />
      <Button
        variant="outline"
        className="border-primary text-foreground mt-16 cursor-pointer rounded-full px-10 py-6"
      >
        <Link href="/courses" className="w-fit">
          <div className="flex items-center gap-2">
            Explore All Courses
            <ArrowRight />
          </div>
        </Link>
      </Button>
    </section>
  );
};

export default FeaturedCoursesSection;
