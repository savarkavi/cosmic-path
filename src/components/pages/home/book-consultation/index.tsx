import SectionTitle from "@/components/shared/section-title";
import BookConsultation from "./book-consultation";

const BookConsultationSection = () => {
  const subtitle =
    "Connect one-on-one with experienced guides to receive personalized insights and practical direction for your life’s questions.";

  return (
    <section className="min-h-screen pt-30">
      <div className="flex justify-center">
        <SectionTitle title="Book Consultation" subtitle={subtitle} />
      </div>
      <BookConsultation />
    </section>
  );
};

export default BookConsultationSection;
