import Image from "next/image";

const BundleBanner = () => {
  return (
    <div className="relative mt-12 h-[350px] w-full rounded-xl bg-black md:h-[500px]">
      <Image
        src="/shooting-star.png"
        alt="shooting star image"
        fill
        className="rounded-xl object-cover object-bottom opacity-85"
      />
      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between p-5 md:p-8">
        <div>
          <div className="bg-primary w-fit rounded-full px-6 py-1 font-semibold text-white">
            Limited Bundle
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-2xl text-white md:text-5xl">
              Become a Certified Astrologer
            </p>
            <p className="max-w-[600px] text-base font-semibold text-gray-400 md:text-2xl">
              Get access to premium courses of all levels, 100+ hrs of
              mentorship, and official certification upon completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleBanner;
