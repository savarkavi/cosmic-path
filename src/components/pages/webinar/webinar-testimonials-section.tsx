import { Star } from "lucide-react";
import { testimonials } from "./webinar-data";
import WebinarSectionHeading from "./webinar-section-heading";

const WebinarTestimonialsSection = () => {
  return (
    <section className="mx-auto w-full max-w-300 px-4 py-16 md:py-24">
      <WebinarSectionHeading label="Testimonials" title="What Students Say" />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-2xl border border-white/[0.07] bg-white/4 p-7 transition-transform hover:-translate-y-1"
            data-reveal
          >
            <div className="mb-4 flex gap-1 text-[#c9a84c]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="leading-7 text-[#bdb7ce]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-[#7b5ea7] to-[#c9a84c] text-sm font-bold text-white">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-[#bdb7ce]">{testimonial.location}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WebinarTestimonialsSection;
