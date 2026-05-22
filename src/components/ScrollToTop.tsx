import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <div
      className="fixed bottom-7 right-7 z-50 transition-all duration-500"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, var(--teal), var(--teal-deep))',
          color: 'hsl(var(--primary-foreground))',
          boxShadow: '0 4px 20px var(--teal-glow)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.1) translateY(-2px)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px var(--teal-glow)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1) translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px var(--teal-glow)';
        }}
      >
        <ArrowUp size={17} />
      </button>
    </div>
  );
};

export default ScrollToTop;
