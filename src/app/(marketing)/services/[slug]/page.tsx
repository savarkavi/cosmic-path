import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import { formatINR } from "@/lib/utils";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="mx-auto mt-0 mb-20 flex w-full max-w-300 flex-col items-center gap-14 px-4 pt-28 md:mt-20 md:pt-32 lg:flex-row lg:justify-center lg:px-8 xl:px-0">
      <div className="relative h-80 w-full shrink-0 rounded-lg shadow-xl sm:h-120 lg:h-[600px] lg:w-[500px]">
        <Image
          src={service.img}
          alt={service.label}
          fill
          className="rounded-lg object-cover"
        />
        <div className="from-accent absolute bottom-0 left-0 h-32 w-full rounded-b-lg bg-linear-to-t opacity-40" />
      </div>
      <div className="flex w-full max-w-2xl flex-col justify-center gap-8 lg:max-w-[600px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-accent-foreground text-4xl capitalize md:text-5xl lg:text-6xl">
            {service.label}
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            {service.desc}
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-6 shadow-sm md:p-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">
            Why choose our {service.label}?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                <CheckCircle2 size={24} />
              </span>
              <span className="text-lg leading-relaxed text-gray-700">
                Expert guidance from seasoned professionals with years of
                experience.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                <CheckCircle2 size={24} />
              </span>
              <span className="text-lg leading-relaxed text-gray-700">
                Personalized solutions tailored specifically to your unique
                situation.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                <CheckCircle2 size={24} />
              </span>
              <span className="text-lg leading-relaxed text-gray-700">
                A holistic approach combining traditional wisdom with modern
                insights.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={`/consultation/booking-details?service=${service.slug}`}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full cursor-pointer rounded-full px-8 py-6 text-lg shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:w-auto"
            >
              Book Now
            </Button>
          </Link>
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-lg font-bold text-gray-800">
              Fee:{" "}
              <span className="text-primary">₹{formatINR(service.price)}</span>
            </p>
            <p className="text-sm text-gray-500">
              Secure your spot today. Limited availability!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return servicesData
    .filter((service) => service.slug)
    .map((service) => ({
      slug: service.slug,
    }));
}

export default ServicePage;
