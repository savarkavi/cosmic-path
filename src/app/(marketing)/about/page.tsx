import AboutCosmicPath from "@/components/pages/about/about-cosmic-path";
import AboutFounder from "@/components/pages/about/about-founder";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-340 px-4 pt-28 md:pt-36">
      <div className="flex w-full flex-col items-center justify-center gap-10 xl:flex-row xl:gap-16">
        <div className="relative h-[400px] w-full shrink-0 rounded-2xl sm:h-[550px] lg:h-[750px] lg:w-[600px]">
          <Image
            src="/about-page-img.avif"
            alt="night sky image"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <AboutCosmicPath />
      </div>
      <AboutFounder />
    </div>
  );
};

export default AboutPage;
