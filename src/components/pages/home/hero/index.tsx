import HeroImage from "@/components/pages/home/hero/hero-image";
import HeroContent from "./hero-content";

const HeroSection = () => {
  return (
    <section className="flex h-dvh bg-radial-[120%_100%_at_0%_0%] from-[#FFEFBA] from-30% to-[#ffffff]">
      <div className="mx-auto flex max-w-[1400px] items-center gap-12 pt-12">
        <HeroImage />
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
