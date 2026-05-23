import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import OfficeHours from "@/components/OfficeHours";
import FAQ from "@/components/FAQ";

const ContactPage = () => (
  <>
    <PageHeader
      eyebrow="Contact"
      title="Let's talk"
      subtitle="For collaborations, supervision, talks, or just a thoughtful question — email is the surest way to reach me."
    />
    <Contact />
    <OfficeHours />
    <FAQ />
  </>
);

export default ContactPage;
