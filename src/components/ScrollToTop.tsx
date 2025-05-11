
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full shadow-lg hover:shadow-primary/20 hover:scale-110 transition-all duration-300 bg-primary text-primary-foreground"
      >
        <ArrowUp size={18} />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  );
};

export default ScrollToTop;
