import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="hidden w-full xl:block">
      <div className="relative xl:h-[550px] xl:w-[550px] 2xl:h-[700px] 2xl:w-[700px]">
        <Image
          src="/guru-cropped.png"
          alt="hero-image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroImage;
