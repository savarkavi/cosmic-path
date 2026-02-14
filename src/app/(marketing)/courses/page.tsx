import BundleBanner from "@/components/pages/courses/bundle-banner";
import CoursesContainer from "@/components/pages/courses/courses-container";
import Header from "@/components/pages/courses/header";

const CoursesPage = () => {
  return (
    <div className="mx-auto w-full max-w-340 px-4 pt-28 md:pt-46">
      <Header />
      <BundleBanner />
      <CoursesContainer />
    </div>
  );
};

export default CoursesPage;
