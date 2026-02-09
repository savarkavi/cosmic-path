import SectionTitle from "@/components/shared/section-title";
import { testimonialsData } from "@/lib/constants";
import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  const subtitle =
    "Real experiences and heartfelt stories from those who have found clarity, confidence, and transformation through our guidance.";

  return (
    <section>
      <div className="flex flex-col items-center gap-8 pt-30">
        <SectionTitle title="Testimonials" subtitle={subtitle} />
      </div>
      <div className="mx-auto mt-24 flex max-w-[1400px] justify-between gap-12">
        {testimonialsData.map((data, i) => (
          <TestimonialCard key={i} data={data} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
