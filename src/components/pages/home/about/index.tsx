import SectionTitle from "@/components/shared/section-title";
import AboutUs from "./about-us";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen pt-28">
      <div className="flex justify-center">
        <SectionTitle title="About Us" />
      </div>
      <AboutUs />
    </section>
  );
};

export default AboutSection;
