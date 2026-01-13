import AboutSection from "@/components/pages/home/about";
import BookConsultationSection from "@/components/pages/home/book-consultation";
import FeaturedCoursesSection from "@/components/pages/home/featured-courses";
import HeroSection from "@/components/pages/home/hero";
import TestimonialSection from "@/components/pages/home/testimonial";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCoursesSection />
      <AboutSection />
      <BookConsultationSection />
      <TestimonialSection />
    </div>
  );
}
