import Image from "next/image";
import ConsultationHighlights from "./consultation-highlights";
import ConsultationPurchase from "./consultation-purchase";

const ConsultationDetails = () => {
  return (
    <div className="mx-auto mt-0 flex max-w-340 flex-col items-center gap-14 md:mt-40 lg:flex-row lg:justify-center">
      <div className="relative h-80 w-full shrink-0 rounded-lg shadow-xl sm:h-120 lg:h-170 lg:w-130">
        <Image
          src="/book-consultation-img.jpg"
          alt="consultation banner"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex w-full max-w-2xl flex-col justify-center gap-12 lg:max-w-150">
        <div className="flex flex-col gap-4">
          <h1 className="text-accent-foreground text-3xl md:text-6xl">
            Book Consultation - Unlock Clarity In Every Area Of Life
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Feeling stuck about love, career or money? Get the most scientific
            analysis of your horoscope with Cosmic Path – See Beyond.
          </p>
        </div>
        <ConsultationHighlights />
        <ConsultationPurchase />
      </div>
    </div>
  );
};

export default ConsultationDetails;
