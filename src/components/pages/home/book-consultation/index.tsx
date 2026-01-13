import SectionTitle from "@/components/shared/section-title";
import BookConsultation from "./book-consultation";

const BookConsultationSection = () => {
  return (
    <section className="min-h-screen">
      <div className="flex justify-center">
        <SectionTitle title="Book Consultation" />
      </div>
      <BookConsultation />
    </section>
  );
};

export default BookConsultationSection;
