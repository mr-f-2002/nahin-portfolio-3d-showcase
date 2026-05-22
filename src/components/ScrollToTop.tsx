import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`
        fixed bottom-8 right-8 z-50 transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <button
        onClick={scrollToTop}
        className="
          w-10 h-10
          border border-border
          bg-background
          flex items-center justify-center
          text-muted-foreground
          hover:text-primary
          hover:border-primary
          transition-colors duration-300
        "
      >
        <ArrowUp size={16} />
        <span className="sr-only">Scroll to top</span>
      </button>
    </div>
  );
};

export default ScrollToTop;
