import PageHeader from "@/components/PageHeader";
import Publications from "@/components/Publications";
import ResearchInterest from "@/components/ResearchInterest";
import OngoingResearch from "@/components/OngoingResearch";
import Collaborators from "@/components/Collaborators";
import CTABanner from "@/components/CTABanner";

const Research = () => (
  <>
    <PageHeader
      eyebrow="Research"
      title="Research"
      subtitle="Efficient deep learning, low-resource NLP, and the systems that run them. Publications, ongoing projects, and the people I work with."
    />
    <ResearchInterest />
    <Publications />
    <OngoingResearch />
    <Collaborators />
    <CTABanner
      title="Have a research idea?"
      text="If you are a student or fellow researcher with a problem in efficient ML, Bangla NLP, or cloud systems, I would love to hear it."
      to="/contact"
      label="Reach out"
    />
  </>
);

export default Research;
