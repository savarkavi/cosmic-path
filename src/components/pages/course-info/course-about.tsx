import { Compass, Map, Star } from "lucide-react";
import { Doc } from "../../../../convex/_generated/dataModel";

interface CourseAboutProps {
  course: Doc<"courses">;
}
const CourseAbout = ({ course }: CourseAboutProps) => {
  return (
    <div className="border-primary mx-auto mt-16 max-w-6xl border-t-3 pt-12">
      <div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              About this course
            </h2>
            <div className="text-justify leading-relaxed whitespace-pre-line text-slate-700">
              <p>{course.about}</p>
            </div>
          </div>
          <div className="bg-accent rounded-xl p-6">
            <h4 className="mb-4 text-xs font-bold tracking-wider uppercase">
              The Outcomes
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Compass className="text-primary h-6 w-6 shrink-0" />
                <p className="text-sm text-slate-600">
                  Confidently interpret planets, signs, and houses to read any
                  chart with accuracy.
                </p>
              </li>
              <li className="flex gap-3">
                <Map className="text-primary h-6 w-6 shrink-0" />
                <p className="text-sm text-slate-600">
                  Equip yourself with knowledge to become a skilled astrologer.
                </p>
              </li>
              <li className="flex gap-3">
                <Star className="text-primary h-6 w-6 shrink-0" />
                <p className="text-sm text-slate-600">
                  Transition from enthusiast to practitioner with the advanced
                  study.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAbout;
