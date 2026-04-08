import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/constants";
import { formatINR } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const ConsultationServicesGrid = () => {
  return (
    <section className="flex flex-col gap-12">
      {/* Section header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <div
            className="h-px w-12"
            style={{ background: "oklch(76.856% 0.16472 70.113)" }}
          />
          <span
            className="text-sm font-medium tracking-[0.2em] uppercase"
            style={{ color: "oklch(76.856% 0.16472 70.113)" }}
          >
            Our Services
          </span>
          <div
            className="h-px w-12"
            style={{ background: "oklch(76.856% 0.16472 70.113)" }}
          />
        </div>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl lg:text-5xl">
          Choose Your{" "}
          <span
            className="italic"
            style={{ color: "oklch(76.856% 0.16472 70.113)" }}
          >
            Consultation
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-slate-500">
          Explore our diverse range of spiritual and astrological services.
          Select the one that resonates with your needs and begin your journey.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Link
            key={service.slug}
            href={`/book-consultation`}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/5"
          >
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={service.img}
                alt={service.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* Price tag */}
              <div className="absolute bottom-3 left-3 flex items-baseline gap-1 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                <span className="text-xs font-medium text-slate-500">₹</span>
                <span
                  className="text-lg font-bold"
                  style={{ color: "oklch(76.856% 0.16472 70.113)" }}
                >
                  {formatINR(service.price)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-xl font-semibold text-slate-900 capitalize transition-colors group-hover:text-amber-700">
                {service.label}
              </h3>
              <p className="line-clamp-2 flex-1 text-[15px] leading-relaxed text-slate-500">
                {service.desc}
              </p>

              {/* Bottom action area */}
              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-amber-100">
                    <Image
                      src="/owner-photo.jpeg"
                      alt="Yashkaran Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Consultant
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      Yashkaran Sharma
                    </span>
                  </div>
                </div>

                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "oklch(76.856% 0.16472 70.113 / 0.1)",
                  }}
                >
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ color: "oklch(76.856% 0.16472 70.113)" }}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ConsultationServicesGrid;
