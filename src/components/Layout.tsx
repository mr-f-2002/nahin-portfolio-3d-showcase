import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ThreeDBackground from "@/components/ThreeDBackground";
import { setupScrollAnimation } from "@/utils/scrollObserver";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const cleanup = setupScrollAnimation();
    const style = document.createElement("style");
    style.textContent = `
      body::-webkit-scrollbar { display: none; }
      body { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => {
      cleanup();
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="opacity-60">
        <ThreeDBackground />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-[72px]">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Layout;
