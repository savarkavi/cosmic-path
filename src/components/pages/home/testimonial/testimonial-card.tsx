import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type TestimonyType = {
  name: string;
  avatar: string;
  quote: string;
  date: string;
  stars: number;
};

interface TestimonialCardProps {
  data: TestimonyType;
}

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <div className="bg-background relative h-full w-full max-w-[450px] overflow-clip rounded-lg border border-gray-200 p-4 shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="bg-primary absolute top-0 left-0 flex h-30 w-30 -translate-1/2 items-center justify-center rounded-full text-white">
        <FaQuoteLeft className="absolute top-[65%] left-[60%] size-4 sm:top-[60%]" />
      </div>
      <div className="ml-20 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src={data.avatar}
              alt="user profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-accent-foreground cursor-default text-2xl font-bold">
            {data.name}
          </p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: data.stars }, (_, i) => (
            <FaStar key={i} className="fill-amber-400" />
          ))}
        </div>
        <p className="text-muted-foreground cursor-default">{data.quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
