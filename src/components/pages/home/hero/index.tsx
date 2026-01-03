import HeroImage from "@/components/pages/home/hero/hero-image";
import HeroContent from "./hero-content";

const HeroSection = () => {
  return (
    <section className="flex h-dvh bg-radial-[at_0%_0%] from-[#FFEFBA] to-[#ffffff]">
      <div className="mx-auto flex max-w-[1600px] items-center">
        <HeroImage />
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
