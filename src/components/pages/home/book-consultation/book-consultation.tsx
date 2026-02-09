import { Button } from "@/components/ui/button";
import { bookConsultationInfo } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const BookConsultation = () => {
  return (
    <div className="bg-accent relative mt-16 h-[650px] w-full overflow-hidden py-16">
      <div className="mx-auto flex max-w-[1360px] items-center">
        <div className="flex flex-col gap-12">
          <div className="flex max-w-[800px] flex-col gap-6">
            <p className="font-italiana text-accent-foreground text-5xl font-semibold uppercase">
              Gain clarity of your life through Expert Readings
            </p>
            <p className="text-muted-foreground text-2xl">
              Connect with a top astrologer in minutes! Simply choose your
              problem type, select a convenient time, provide your birth
              details, and start your insightful consultation via call, chat, or
              detailed report.
            </p>
          </div>
          <div className="flex items-center gap-12">
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
        <div className="animation-duration-[20s] absolute top-1/2 right-0 h-[1210px] w-[1200px] translate-x-1/2 -translate-y-1/2 animate-spin">
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
