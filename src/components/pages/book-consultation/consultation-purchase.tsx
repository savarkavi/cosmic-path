import { Button } from "@/components/ui/button";

const ConsultationPurchase = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-slate-900">₹1,500</span>
        <span className="text-lg text-slate-500 line-through">₹2,500</span>
        <span className="text-lg text-slate-600">40% off</span>
      </div>
      <div className="mt-5">
        <Button className="bg-foreground w-full rounded-full px-12 py-6 text-white">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ConsultationPurchase;
