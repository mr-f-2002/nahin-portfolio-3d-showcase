import PageHeader from "@/components/PageHeader";
import TechnicalSkills from "@/components/TechnicalSkills";
import Tools from "@/components/Tools";
import Workflow from "@/components/Workflow";

const SkillsPage = () => (
  <>
    <PageHeader
      eyebrow="Skills"
      title="Skills & toolkit"
      subtitle="The languages, frameworks, and habits I use to take an idea from a blank notebook to something that runs in production — or at least in a paper."
    />
    <TechnicalSkills />
    <Tools />
    <Workflow />
  </>
);

export default SkillsPage;
