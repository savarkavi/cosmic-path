import {
  Award,
  ChevronRight,
  MonitorPlay,
  SquareLibrary,
  Users,
} from "lucide-react";
import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="absolute top-4 left-1/2 z-20 h-fit w-[80%] max-w-[420px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white/90 shadow-xl backdrop-blur-md 2xl:top-auto 2xl:-right-2 2xl:-bottom-6 2xl:left-auto 2xl:translate-0">
      <div className="p-6 pb-4">
        <div className="mb-1 flex items-start justify-between">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#d97706] uppercase">
              Bestseller
            </span>
            <h3 className="mt-1 font-sans text-xl font-semibold text-gray-900">
              Vedic Astrology Basics
            </h3>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d97706]/10">
            <Award className="h-5 w-5 text-[#d97706]" />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3.5">
          <div className="flex items-center gap-3 text-gray-600">
            <MonitorPlay className="h-5 w-5 text-gray-400" />
            <span className="text-[15px]">3 weeks worth of Live content</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <SquareLibrary className="h-5 w-5 text-gray-400" />
            <span className="text-[15px]">Extensive planetary guides</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-[15px]">
              Live Q&A with Professional Astrologer
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/testimonial-avatar-2.jpg"
            alt="Dr. A. Sharma"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">
            Yahskaran Sharma
          </span>
        </div>
        <button className="flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-[#d97706]">
          Enroll Now
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
