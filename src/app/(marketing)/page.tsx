import AboutSection from "@/components/pages/home/about";
import FeaturedCoursesSection from "@/components/pages/home/featured-courses";
import HeroSection from "@/components/pages/home/hero";
import TestimonialSection from "@/components/pages/home/testimonial";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCoursesSection />
      <AboutSection />
      <TestimonialSection />
      <div className="h-screen"></div>
    </div>
  );
}
