import { Button } from "@/components/ui/button";
import { calculateDiscountedPrice, formatINR } from "@/lib/utils";
import { Doc } from "../../../../convex/_generated/dataModel";
import AddToCartButton from "@/components/cart/add-to-cart-button";

interface CoursePurchaseProps {
  course: Doc<"courses">;
}

const CoursePurchase = ({ course }: CoursePurchaseProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-slate-900">{`₹${formatINR(calculateDiscountedPrice(course.price, course.discount))}`}</span>
        <span className="text-lg text-slate-500 line-through">
          ₹{formatINR(course.price)}
        </span>
        <span className="text-lg text-slate-600">${course.discount}% off</span>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <AddToCartButton course={course} />
        <Button className="bg-foreground rounded-full py-6 text-white">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default CoursePurchase;
