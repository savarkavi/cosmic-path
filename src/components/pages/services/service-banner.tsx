import { Button } from "@/components/ui/button";
import Image from "next/image";

const ServiceBanner = () => {
  return (
    <div className="relative mt-12 h-[380px] w-full rounded-xl bg-black md:h-[500px]">
      <Image
        src="/service-banner-img.jpg"
        alt="banner image"
        fill
        className="rounded-xl object-cover object-bottom opacity-50"
      />
      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between p-5 md:p-8">
        <div>
          <div className="bg-primary w-fit rounded-full px-6 py-1 font-semibold text-white">
            Special Offer
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-2xl text-white md:text-5xl">
              Book Your Personalized Consultation
            </p>
            <p className="max-w-[600px] text-base font-semibold text-gray-300 md:text-2xl">
              Get clarity on career, relationships, marriage, health, and life
              purpose through accurate Vedic insights from experienced
              astrologers.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-xl text-gray-400 line-through">₹ 30/Min</p>
            <p className="text-2xl text-white md:text-4xl">₹ 15/Min</p>
          </div>
          <Button className="rounded-full bg-white px-8 py-4 text-lg md:py-6">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
