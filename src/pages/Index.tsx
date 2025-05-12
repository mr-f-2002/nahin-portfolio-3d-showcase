
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ThreeDBackground from "@/components/ThreeDBackground";
import { setupScrollAnimation } from "@/utils/scrollObserver";

const Index = () => {
  useEffect(() => {
    // Setup scroll animation when component mounts
    const cleanup = setupScrollAnimation();
    
    // Cleanup function to remove observers
    return cleanup;
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
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
