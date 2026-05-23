import PageHeader from "@/components/PageHeader";
import Teaching from "@/components/Teaching";
import CTABanner from "@/components/CTABanner";

const TeachingPage = () => (
  <>
    <PageHeader
      eyebrow="Teaching"
      title="Teaching & mentorship"
      subtitle="Courses I teach, theses I supervise, and talks I have given — the part of the job that makes everything else worth doing."
    />
    <Teaching />
    <CTABanner
      title="Are you a current or prospective student?"
      text="If you are interested in undergraduate research or thesis supervision, send a brief note about your interests and recent work."
      to="/contact"
      label="Email me"
    />
  </>
);

export default TeachingPage;
