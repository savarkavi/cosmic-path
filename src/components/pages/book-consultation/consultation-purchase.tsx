import { Button } from "@/components/ui/button";
import Link from "next/link";

const ConsultationPurchase = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-bold text-slate-900 md:text-4xl">
          ₹1,500
        </span>
        <span className="text-lg text-slate-500 line-through">₹2,500</span>
        <span className="text-lg text-slate-600">40% off</span>
      </div>
      <div className="mt-5">
        <Link href="/consultation/booking-details">
          <Button className="bg-foreground w-full cursor-pointer rounded-full px-8 py-4 text-white md:px-12 md:py-6">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ConsultationPurchase;
