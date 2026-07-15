import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BookConsultation = () => {
  return (
    <div className="relative isolate flex min-h-[680px] items-center justify-center overflow-hidden bg-[#181817] px-6 py-24 text-white">
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[820px] w-[820px] translate-x-[46%] -translate-y-1/2 opacity-[0.08] md:h-[980px] md:w-[980px]"
        aria-hidden="true"
      >
        <Image
          src="/astrology-wheel.png"
          alt=""
          fill
          className="object-contain"
          sizes="980px"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <div className="mb-7 flex items-center gap-3">
          <span className="bg-primary h-px w-6" />
          <p className="text-primary font-mono text-[11px] tracking-[0.28em] uppercase">
            Ready when you are
          </p>
        </div>

        <h2 className="max-w-xl text-4xl leading-[1.05] font-medium text-balance text-white md:text-6xl">
          Your chart won&apos;t change.{" "}
          <span className="text-primary font-serif italic">
            How soon you understand it - will.
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-base leading-7 text-white/72 md:text-lg">
          Book a one-on-one consultation with Yashkaran Sharma and leave with a
          clear, honest read on what&apos;s ahead - and what to actually do
          about it.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="h-13 w-full max-w-56 rounded-none bg-[#8c3928] px-8 text-sm font-bold text-white hover:bg-[#9b422f]"
          >
            <Link href="/book-consultation">Book a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-13 w-full max-w-48 rounded-none border-white/30 bg-transparent px-8 text-sm font-bold text-white hover:border-primary hover:bg-white/5 hover:text-white"
          >
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
