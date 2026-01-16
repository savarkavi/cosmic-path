import AboutCosmicPath from "@/components/pages/about/about-cosmic-path";
import AboutFounder from "@/components/pages/about/about-founder";
import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto w-full max-w-340 pt-36">
      <div className="flex w-full items-center justify-center gap-16">
        <div className="relative h-[750px] w-[600px] shrink-0 rounded-2xl">
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

export default About;
