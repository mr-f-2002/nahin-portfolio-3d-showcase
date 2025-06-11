
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-4 overflow-hidden animate-on-scroll"
    >
      {/* Decorative background elements */}
      <div className="absolute -right-20 top-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              Computer Science Engineer
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              <span className="block mb-3">Hi, I'm</span>
              <span className="text-primary relative">
                Nahin F Siddiqui
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Computer Science Engineer & ML Enthusiast
            </h2>
            
            <p className="mb-10 text-lg max-w-lg">
              A passionate CSE graduate with a focus on academic excellence, 
              machine learning, and software development. Building innovative 
              solutions through code and research.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-6" asChild>
                <a href="#portfolio">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" className="rounded-full px-6" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Background circle */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-primary/20 relative overflow-hidden flex items-center justify-center">
                {/* Animated gradient overlay on background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10 animate-spin opacity-70"
                  style={{ animationDuration: '10s' }}
                ></div>
                
                {/* Image container with loading optimization */}
                <div className="w-72 h-72 md:w-80 md:h-80 relative">
                  {/* Loading placeholder */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-muted animate-pulse rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  <img
                    src="mr-f-2002/nahin-portfolio-3d-showcase/public/assets/med_planner.png"
                    alt="Nahin F Siddiqui"
                    className={`w-full h-full object-cover object-center rounded-full transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="eager"
                    fetchPriority="high"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => console.log('Image failed to load')}
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-float"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
