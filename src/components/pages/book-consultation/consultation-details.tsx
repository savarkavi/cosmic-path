import Image from "next/image";
import ConsultationHighlights from "./consultation-highlights";
import ConsultationPurchase from "./consultation-purchase";

const ConsultationDetails = () => {
  return (
    <div className="mx-auto mt-40 flex max-w-340 justify-center gap-14">
      <div className="relative h-170 w-150 shrink-0 rounded-lg shadow-xl">
        <Image
          src="/book-consultation-img.jpg"
          alt="consultation banner"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex max-w-150 flex-col justify-center gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-accent-foreground text-6xl">
            Book Consultation - Unlock Clarity In Every Area Of Life
          </h1>
          <p className="text-xl text-gray-600">
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
