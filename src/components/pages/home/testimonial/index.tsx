import SectionTitle from "@/components/shared/section-title";
import { testimonialsData } from "@/lib/constants";
import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  return (
    <section className="pt-12">
      <div className="flex flex-col items-center justify-center gap-8">
        <SectionTitle title="Testimonials" />
        <p className="text-center text-2xl">
          See what our customers have to say about our services
        </p>
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
