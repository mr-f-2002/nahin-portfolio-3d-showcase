import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutFlashcards from "@/components/AboutFlashcards";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ResearchInterest from "@/components/ResearchInterest";
import TechnicalSkills from "@/components/TechnicalSkills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ThreeDBackground from "@/components/ThreeDBackground";
import { setupScrollAnimation } from "@/utils/scrollObserver";

const Index = () => {
  useEffect(() => {
    // Setup scroll animation when component mounts
    const cleanup = setupScrollAnimation();
    
    // Add CSS to hide scrollbar
    const style = document.createElement('style');
    style.textContent = `
      body::-webkit-scrollbar {
        display: none;
      }
      body {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function to remove observers and style
    return () => {
      cleanup();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Background with reduced opacity for subtlety */}
      <div className="opacity-60">
        <ThreeDBackground />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutFlashcards />
        <Publications />
        <Experience />
        <Education />
        <ResearchInterest />
        <TechnicalSkills />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
