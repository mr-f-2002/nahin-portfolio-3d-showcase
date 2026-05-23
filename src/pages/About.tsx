import PageHeader from "@/components/PageHeader";
import Biography from "@/components/Biography";
import Values from "@/components/Values";
import AboutFlashcards from "@/components/AboutFlashcards";
import CTABanner from "@/components/CTABanner";

const About = () => (
  <>
    <PageHeader
      eyebrow="About"
      title="The person behind the work"
      subtitle="A lecturer and researcher trying to build smaller, kinder, more useful machine intelligence — and to teach it well along the way."
    />
    <AboutFlashcards />
    <Biography />
    <Values />
    <CTABanner
      title="Want to work together?"
      text="I am open to research collaborations, undergraduate supervision, and occasional consulting."
      to="/contact"
      label="Get in touch"
    />
  </>
);

export default About;
