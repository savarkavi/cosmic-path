import Image from "next/image";
import HeroImage from "@/components/pages/home/hero/hero-image";
import HeroContent from "./hero-content";
import HeroBottomStrip from "./hero-bottom-strip";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-between gap-12 overflow-hidden pt-30 xl:gap-0 xl:pt-24">
      <Image
        src="/zodiac-wheel.png"
        alt=""
        width={320}
        height={320}
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] left-0 h-50 w-50 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-30 xl:top-[15%] xl:h-80 xl:w-80"
      />
      <Image
        src="/zodiac-wheel.png"
        alt=""
        width={320}
        height={320}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[3%] bottom-[15%] h-50 w-50 translate-x-1/2 translate-y-1/2 rounded-full object-cover opacity-30 xl:-right-[1%] xl:h-80 xl:w-80"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-1 flex-col items-center justify-between lg:flex-row 2xl:gap-8">
        <HeroImage />
        <HeroContent />
      </div>
      <div className="relative z-10">
        <HeroBottomStrip />
      </div>
    </section>
  );
};

export default HeroSection;
