import AboutCosmicPath from "@/components/pages/about/about-cosmic-path";
import AboutFounder from "@/components/pages/about/about-founder";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-50">
      <div className="mx-auto w-full max-w-300 px-4 pb-24 md:pb-32">
        <div className="flex w-full flex-col items-center justify-center gap-10 xl:flex-row xl:gap-16">
          <div className="relative h-[400px] w-full shrink-0 rounded-2xl sm:h-[550px] lg:h-[700px] lg:w-[600px]">
            <Image
              src="/about-page-img.avif"
              alt="night sky image"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <AboutCosmicPath />
        </div>
      </div>
      <AboutFounder />
    </div>
  );
};

export default AboutPage;
