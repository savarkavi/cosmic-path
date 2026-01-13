import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="w-full">
      <div className="relative h-[700px] w-[700px]">
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
