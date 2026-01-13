import SectionTitle from "@/components/shared/section-title";
import AboutUs from "./about-us";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen">
      <div className="flex justify-center">
        <SectionTitle title="Our purpose" />
      </div>
      <AboutUs />
    </section>
  );
};

export default AboutSection;
