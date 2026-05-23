import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

const ProjectsPage = () => (
  <>
    <PageHeader
      eyebrow="Projects"
      title="Projects"
      subtitle="A mixed bag of research prototypes, teaching tools, and shipped products built across web, mobile, desktop, and ML."
    />
    <Portfolio />
    <Testimonials />
    <CTABanner
      title="Looking for the source?"
      text="Most of my work lives openly on GitHub — feel free to fork, file issues, or send pull requests."
      to="/contact"
      label="Say hello"
    />
  </>
);

export default ProjectsPage;
