import WebinarPageContent from "@/components/pages/webinar/webinar-page";

const WebinarPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <WebinarPageContent slug={slug} />;
};

export default WebinarPage;
