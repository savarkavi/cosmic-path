import SectionTitle from "@/components/shared/section-title";
import { testimonialsData } from "@/lib/constants";
import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  const subtitle =
    "Real experiences and heartfelt stories from those who have found clarity, confidence, and transformation through our guidance.";

  return (
    <section>
      <div className="flex flex-col items-center gap-8 px-4 pt-30">
        <SectionTitle title="Testimonials" subtitle={subtitle} />
      </div>
      <div className="mx-auto mt-24 grid max-w-[1400px] grid-cols-1 items-center justify-items-center gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((data, i) => (
          <TestimonialCard key={i} data={data} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
