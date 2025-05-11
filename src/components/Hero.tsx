
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    const current = heroRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-4 animate-on-scroll"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
              <span className="block mb-2">Hi, I'm</span>
              <span className="text-primary">Nahin F Siddiqui</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
              Computer Science Engineer & ML Enthusiast
            </h2>
            
            <p className="mb-8 text-lg max-w-lg">
              A passionate CSE graduate with a focus on academic excellence, 
              machine learning, and software development. Building innovative 
              solutions through code and research.
            </p>
            
            <div className="flex space-x-4">
              <Button asChild>
                <a href="#portfolio">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              {/* This is where we would add Nahin's photo. Using a placeholder for now */}
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">NFS</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
