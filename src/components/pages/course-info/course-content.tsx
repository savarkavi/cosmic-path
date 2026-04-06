import { BookOpen, CheckCircle2, ChevronRight } from "lucide-react";
import { Doc } from "../../../../convex/_generated/dataModel";

interface CourseContentProps {
  course: Doc<"courses">;
}

const CourseContent = ({ course }: CourseContentProps) => {
  if (!course.courseContent || course.courseContent.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d49f3c]/10">
          <BookOpen className="h-5 w-5 text-[#d49f3c]" />
        </div>
        <h3
          className="font-playfair text-2xl font-semibold text-[#1a1512]"
        >
          Course Curriculum
        </h3>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#e5ddd0]/60 bg-white shadow-sm">
        {course.courseContent.map((item, index) => (
          <div
            key={index}
            className={`group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-[#faf8f5] ${
              index !== course.courseContent!.length - 1
                ? "border-b border-[#e5ddd0]/40"
                : ""
            }`}
          >
            {/* Module number */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d49f3c]/10 text-xs font-bold text-[#d49f3c]">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="flex flex-1 items-center justify-between">
              <span className="text-[15px] font-medium leading-snug text-[#2a2520]">
                {item}
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-[#c5bfb8] transition-colors group-hover:text-[#d49f3c]" />
            </div>

            {/* Checkmark */}
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500/60" />
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-[#a5a09a]">
        {course.courseContent.length} modules • Comprehensive curriculum
      </p>
    </div>
  );
};

export default CourseContent;
