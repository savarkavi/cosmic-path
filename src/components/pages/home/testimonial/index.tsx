import SectionTitle from "@/components/shared/section-title";
import { testimonialsData } from "@/lib/constants";
import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  const title = (
    <>
      Clients came seeking answers. They left with{" "}
      <span className="text-accent-foreground italic">clarity</span>.
    </>
  );
  const subtitle =
    "Real experiences and heartfelt stories from those who have found clarity, confidence, and transformation through Yashkaran Sharma's guidance.";

  return (
    <section className="mx-auto max-w-300 px-8 py-28">
      <SectionTitle
        badge="In their own words"
        title={title}
        subtitle={subtitle}
      />
      <div className="mx-auto mt-20 grid max-w-300 grid-cols-1 items-center justify-items-center gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
        {testimonialsData.map((data, i) => (
          <TestimonialCard key={i} data={data} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
