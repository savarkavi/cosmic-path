import Image from "next/image";
import { Separator } from "../ui/separator";
import { Clock, Users2 } from "lucide-react";
import { Button } from "../ui/button";

type course = {
  title: string;
  img: string;
  desc: string;
  price: string;
  length: string;
};

interface CourseCardProps {
  course: course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-accent h-full w-full rounded-md shadow-lg">
      <div className="relative h-[300px] w-full rounded-t-md">
        <Image
          src={course.img}
          alt="course banner image"
          fill
          className="rounded-t-md object-cover"
        />
        <div className="from-accent absolute bottom-0 left-0 h-24 w-full bg-linear-to-t" />
      </div>
      <div className="mt-4 flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <p className="line-clamp-1 text-2xl uppercase">{course.title}</p>
          <p className="bg-primary rounded-full px-4 py-1 text-white">{`₹${course.price}`}</p>
        </div>
        <p className="text-muted-foreground line-clamp-2">{course.desc}</p>
        <Separator className="my-4 w-full" />
        <div className="text-muted-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users2 size={16} />
            <p>1-on-1 sessions</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <p>{course.length}</p>
          </div>
        </div>
        <Button className="bg-foreground mt-4 cursor-pointer text-white">
          Enroll now
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
