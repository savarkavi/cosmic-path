import Image from "next/image";

type TestimonyType = {
  name: string;
  avatar: string;
  quote: string;
  date: string;
  stars: number;
  type: string;
};

interface TestimonialCardProps {
  data: TestimonyType;
}

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <div className="h-full w-full max-w-[320px] rounded-lg border border-[#d9d3c8] bg-white px-7 py-4 text-black shadow-lg">
      <p className="text-primary font-serif text-4xl leading-none font-bold">
        &quot;
      </p>

      <p className="mt-9 min-h-[120px] text-[15px] leading-6 font-medium">
        {data.quote}
      </p>

      <div className="mt-8 border-t border-[#ded8cf] pt-5">
        <div className="flex items-center gap-3">
          <div className="bg-primary relative flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
            <Image
              src={data.avatar}
              alt="Testimonial avatar"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold">{data.name}</p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.06em] text-black/75">
              {data.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
