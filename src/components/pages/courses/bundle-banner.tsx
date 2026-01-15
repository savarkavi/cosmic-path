import { Button } from "@/components/ui/button";
import Image from "next/image";

const BundleBanner = () => {
  return (
    <div className="relative mt-12 h-[500px] w-full rounded-xl bg-black">
      <Image
        src="/shooting-star.png"
        alt="shooting star image"
        fill
        className="rounded-xl object-cover object-bottom opacity-85"
      />
      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between p-8">
        <div>
          <div className="bg-primary w-fit rounded-full px-6 py-1 font-semibold text-white">
            Limited Bundle
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-5xl text-white">Become a Certified Astrologer</p>
            <p className="max-w-[600px] text-2xl font-semibold text-gray-400">
              Get access to premium courses of all levels, 100+ hrs of
              mentorship, and official certification upon completion.
            </p>
          </div>
        </div>
        <div className="flex items-end gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-xl text-gray-400 line-through">₹ 18,000</p>
            <p className="text-4xl text-white">₹ 15,000</p>
          </div>
          <Button className="rounded-full bg-white px-8 py-6 text-lg">
            Get full acess
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BundleBanner;
