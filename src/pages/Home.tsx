import Hero from "@/components/Hero";
import AboutFlashcards from "@/components/AboutFlashcards";
import Stats from "@/components/Stats";
import CTABanner from "@/components/CTABanner";

const Home = () => (
  <>
    <Hero />
    <Stats />
    <AboutFlashcards />
    <CTABanner
      title="Curious about the research?"
      text="From lightweight Bangla language models to energy-aware serverless inference — read the work that is actively shaping my year."
      to="/research"
      label="Explore research"
    />
  </>
);

export default Home;
