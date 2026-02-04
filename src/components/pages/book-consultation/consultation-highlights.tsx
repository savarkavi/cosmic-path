import { consultationHighlights } from "@/lib/constants";

const ConsultationHighlights = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-slate-900">
        Consultation Areas
      </h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        {consultationHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 text-slate-700"
            >
              <Icon className="text-primary h-5 w-5" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConsultationHighlights;
