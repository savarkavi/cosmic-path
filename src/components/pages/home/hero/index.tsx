import HeroImage from "@/components/pages/home/hero/hero-image";
import HeroContent from "./hero-content";
import HeroServices from "./hero-services";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col gap-12 pt-30 xl:gap-0 xl:pt-14">
      <div className="mx-auto flex min-h-screen w-full max-w-300 flex-col items-center justify-between gap-12 lg:flex-row 2xl:gap-20">
        <HeroContent />
        <HeroImage />
      </div>
      <HeroServices />
    </section>
  );
};

export default HeroSection;
