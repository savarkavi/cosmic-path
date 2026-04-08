import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Video } from "lucide-react";

const ConsultationCTA = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-16 text-center md:px-12 md:py-20">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(76.856% 0.16472 70.113), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(76.856% 0.16472 70.113), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Consultation methods */}
        <div className="flex items-center gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <Phone className="h-5 w-5 text-amber-400" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <MessageCircle className="h-5 w-5 text-amber-400" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <Video className="h-5 w-5 text-amber-400" />
          </div>
        </div>

        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to Begin Your{" "}
            <span
              className="italic"
              style={{ color: "oklch(76.856% 0.16472 70.113)" }}
            >
              Cosmic Journey
            </span>
            ?
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Choose any service above and connect with our expert astrologer via
            call, chat, or video. Your personalized consultation awaits.
          </p>
        </div>

        <Link href="/book-consultation">
          <Button
            className="cursor-pointer rounded-full px-10 py-6 text-base font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25"
            style={{
              background:
                "linear-gradient(135deg, oklch(76.856% 0.16472 70.113), oklch(82% 0.16 80))",
            }}
          >
            Book Your Consultation Now
          </Button>
        </Link>

        <p className="text-sm text-slate-500">
          ✨ Starting from ₹2,100 · Personalized sessions · Expert guidance
        </p>
      </div>
    </section>
  );
};

export default ConsultationCTA;
