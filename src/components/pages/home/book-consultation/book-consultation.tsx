import { Button } from "@/components/ui/button";
import { bookConsultationInfo } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const BookConsultation = () => {
  return (
    <div className="bg-accent relative mt-16 min-h-[650px] w-full overflow-hidden rounded-lg px-4 py-16">
      <div className="mx-auto flex max-w-[1360px] items-center">
        <div className="flex flex-col items-center gap-12 sm:items-start">
          <div className="flex max-w-[800px] flex-col gap-6">
            <p className="font-italiana text-accent-foreground text-3xl font-semibold uppercase lg:text-5xl">
              Gain clarity of your life through Expert Readings
            </p>
            <p className="text-muted-foreground max-w-xl text-xl lg:text-2xl">
              Connect with a top astrologer in minutes! Simply choose your
              problem type, select a convenient time, provide your birth
              details, and start your insightful consultation via call, chat, or
              detailed report.
            </p>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-12 sm:flex-row">
            {bookConsultationInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex w-[200px] flex-col items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 shadow-lg"
                >
                  <Icon
                    size={36}
                    className="text-accent fill-accent-foreground shrink-0"
                  />
                  <p className="text-muted-foreground text-lg font-semibold capitalize">
                    {info.label}
                  </p>
                </div>
              );
            })}
          </div>
          <Link href="/consultation">
            <Button size="lg" className="w-fit cursor-pointer text-white">
              Book Now
            </Button>
          </Link>
        </div>
        <div className="animation-duration-[20s] absolute top-1/2 right-0 hidden h-[1010px] w-[1000px] translate-x-1/2 -translate-y-1/2 animate-spin xl:block 2xl:h-[1210px] 2xl:w-[1200px]">
          <Image
            src="/astrology-wheel.png"
            alt="astrology wheel"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
