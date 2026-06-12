import WebinarSectionHeading from "./webinar-section-heading";
import { learningItems } from "./webinar-data";

const WebinarLearnSection = () => {
  return (
    <section
      id="learn"
      className="mx-auto w-full max-w-300 px-4 py-16 md:py-24"
    >
      <WebinarSectionHeading
        label="What You Will Discover"
        title="Everything Covered in This Webinar"
        description="In this exclusive live session. Discover our complete course curriculum, learn chart reading basics, and get your questions answered LIVE."
      />
      <div className="mx-auto mt-10 grid max-w-[80%] justify-items-center gap-5 md:grid-cols-2">
        {learningItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-white/[0.07] bg-white/4 p-7 transition-all hover:-translate-y-1 hover:border-[#c9a84c]/25 hover:bg-white/[0.07]"
              data-reveal
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#c9a84c]/10 text-[#c9a84c]">
                <Icon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#bdb7ce]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WebinarLearnSection;
