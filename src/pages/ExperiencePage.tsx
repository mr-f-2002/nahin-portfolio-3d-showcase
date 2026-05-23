import PageHeader from "@/components/PageHeader";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";

const ExperiencePage = () => (
  <>
    <PageHeader
      eyebrow="Experience"
      title="Experience & Education"
      subtitle="An academic path through teaching, applied research, and industry — with the awards and credentials picked up along the way."
    />
    <Experience />
    <section className="px-6 md:px-10 lg:px-16 py-6">
      <div className="max-w-7xl mx-auto">
        <Education />
      </div>
    </section>
    <Awards />
    <Certifications />
  </>
);

export default ExperiencePage;
