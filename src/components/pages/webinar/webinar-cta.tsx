import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface WebinarCtaProps {
  price: number;
}

const WebinarCta = ({ price }: WebinarCtaProps) => {
  return (
    <section
      id="register"
      className="mx-auto w-full max-w-300 px-4 py-16 pb-24"
    >
      <div
        className="rounded-2xl border border-[#c9a84c]/20 bg-linear-to-br from-[#c9a84c]/12 to-[#7b5ea7]/12 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.28)] md:p-14"
        data-reveal
      >
        <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold text-white md:text-5xl">
          Ready to Begin Your Astrology Journey?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#bdb7ce]">
          Join the live webinar and understand the exact path to start learning
          astrology with confidence.
        </p>
        <Link
          href="#"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-linear-to-br from-[#e8d08f] to-[#b08930] px-8 py-4 text-base font-bold text-[#0a0818] shadow-[0_12px_35px_rgba(201,168,76,0.24)] transition-transform hover:-translate-y-1"
        >
          Register Now - Rs. {price}
          <ArrowRight className="size-5" />
        </Link>
        <p className="mt-5 ml-5 inline-flex items-center justify-center gap-2 text-sm text-[#bdb7ce]">
          <ShieldCheck className="size-4 text-[#c9a84c]" />
          Secure payment. Instant confirmation. Limited seats.
        </p>
      </div>
    </section>
  );
};

export default WebinarCta;
