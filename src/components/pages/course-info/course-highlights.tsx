import {
  MonitorPlay,
  Sparkles,
  FileText,
  Trophy,
  Smartphone,
} from "lucide-react";
import { Doc } from "../../../../convex/_generated/dataModel";

interface CourseHighlightsProps {
  course: Doc<"courses">;
}

const CourseHighlights = ({ course }: CourseHighlightsProps) => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-slate-900">
        Course highlights
      </h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 text-slate-700">
          <MonitorPlay className="text-primary h-5 w-5" />
          <span>{`${course.duration} worth of Live content`}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-700">
          <Sparkles className="text-primary h-5 w-5" />
          <span>Taught by Experts</span>
        </div>
        <div className="flex items-center gap-3 text-slate-700">
          <FileText className="text-primary h-5 w-5" />
          <span>Extensive planetary guides</span>
        </div>
        <div className="flex items-center gap-3 text-slate-700">
          <Trophy className="text-primary h-5 w-5" />
          <span>Accredited certification</span>
        </div>
        <div className="flex items-center gap-3 text-slate-700">
          <Smartphone className="text-primary h-5 w-5" />
          <span>Personalized doubt sessions</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;
