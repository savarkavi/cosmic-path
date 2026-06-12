import { webinarDetails } from "./webinar-data";
import WebinarSectionHeading from "./webinar-section-heading";

const WebinarDetailsSection = () => {
  return (
    <section className="mx-auto w-full max-w-300 px-4 py-16 md:py-24">
      <WebinarSectionHeading label="Webinar Details" title="When & Where" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {webinarDetails.map((detail) => {
          const Icon = detail.icon;

          return (
            <article
              key={detail.title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-7 text-center transition-colors hover:border-[#c9a84c]/25"
              data-reveal
            >
              <Icon className="mx-auto mb-4 size-8 text-[#c9a84c]" />
              <h3 className="text-lg font-semibold text-white">
                {detail.title}
              </h3>
              <p className="mt-2 text-sm text-[#bdb7ce]">
                {detail.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WebinarDetailsSection;
