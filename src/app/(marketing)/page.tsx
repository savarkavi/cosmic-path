import FeaturedCoursesSection from "@/components/pages/home/featured-courses";
import HeroSection from "@/components/pages/home/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCoursesSection />
    </div>
  );
}
