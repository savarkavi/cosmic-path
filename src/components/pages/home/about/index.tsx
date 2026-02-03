import SectionTitle from "@/components/shared/section-title";
import AboutUs from "./about-us";

const AboutSection = () => {
  const subtitle =
    "Our purpose is to illuminate paths, nurture inner balance, and help you align with clarity, wisdom, and meaningful transformation.";

  return (
    <section className="relative min-h-screen pt-20">
      <div className="flex justify-center">
        <SectionTitle title="Our purpose" subtitle={subtitle} />
      </div>
      <AboutUs />
    </section>
  );
};

export default AboutSection;
