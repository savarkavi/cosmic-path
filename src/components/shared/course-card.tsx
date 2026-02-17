import Image from "next/image";
import { Separator } from "../ui/separator";
import { Clock, Users2 } from "lucide-react";
import { Button } from "../ui/button";
import { Doc } from "../../../convex/_generated/dataModel";
import Link from "next/link";
import { formatINR, calculateDiscountedPrice } from "@/lib/utils";

interface CourseCardProps {
  course: Doc<"courses">;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const discountedPrice = calculateDiscountedPrice(
    course.price,
    course.discount,
  );

  return (
    <div className="bg-background h-full w-full rounded-md shadow-lg">
      <Link href={`/courses/${course.slug}`} className="flex h-full flex-col">
        <div className="relative h-[200px] w-full shrink-0 rounded-t-md md:h-[300px]">
          <Image
            src={course.imageUrl ? course.imageUrl : "/placeholder.png"}
            alt="course banner image"
            fill
            className="rounded-t-md object-cover"
          />
          <div className="from-accent absolute bottom-0 left-0 h-24 w-full bg-linear-to-t" />
          <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
            <p className="bg-primary/90 rounded-full px-4 py-1 text-white shadow-xs backdrop-blur-sm">{`₹${formatINR(discountedPrice)}`}</p>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between gap-2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-lg uppercase md:text-2xl">{course.title}</p>
          </div>
          <p className="text-muted-foreground line-clamp-2">
            {course.description}
          </p>
          <Separator className="my-4 w-full" />
          <div className="text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users2 size={16} />
              <p>1-on-1 sessions</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <p>{course.duration}</p>
            </div>
          </div>
          <Button className="bg-foreground mt-2 cursor-pointer py-6 text-lg text-white">
            Enroll now
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
