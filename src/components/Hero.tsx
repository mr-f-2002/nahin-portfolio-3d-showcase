import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, GraduationCap, Building2 } from 'lucide-react';

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
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  const highlights = [
    { icon: Building2, label: "Lecturer at UIU" },
    { icon: GraduationCap, label: "IUT Graduate, 2025" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 md:pb-16 px-5 md:px-4 overflow-hidden animate-on-scroll"
    >
      {/* Subtle background blobs */}
      <div className="hidden md:block absolute -right-20 top-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="hidden md:block absolute -left-20 bottom-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl z-0"></div>

      <div className="w-full md:w-[80%] max-w-none mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">

          {/* ── Text content ── */}
          <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Lecturer &amp; Researcher · CSE
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
              <span className="block mb-2 text-2xl md:text-3xl font-normal text-muted-foreground">
                Hi, I'm
              </span>
              <span className="text-primary relative inline-block">
                Nahin F. Siddiqui
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
              </span>
            </h1>

            <h2 className="text-base md:text-xl mb-6 text-muted-foreground mt-4 leading-relaxed">
              Lecturer, Dept. of CSE · United International University
            </h2>

            <p className="mb-8 text-sm md:text-lg max-w-lg mx-auto md:mx-0 text-foreground/80 leading-relaxed">
              Computer Science graduate of Islamic University of Technology, now
              contributing to academia as a full-time lecturer and researcher.
              My work focuses on lightweight deep learning and cloud computing —
              with a long-term commitment to research and teaching.
            </p>

            {/* Highlight badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-8 md:mb-10 items-center md:items-start justify-center md:justify-start">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 text-sm text-foreground/80"
                >
                  <item.icon size={14} className="text-primary shrink-0" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full">
              <Button className="rounded-full px-6 w-full sm:w-auto" asChild>
                <a href="#publications">
                  View Publications <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>

              <Button variant="outline" className="rounded-full px-6 w-full sm:w-auto" asChild>
                <a href="#contact">Contact Me</a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-6 w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                asChild
              >
                <a href="/assets/cv.pdf" download>
                  <Download size={15} className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center mb-6 md:mb-0">
            <div className="relative">
              <div className="w-[200px] h-[200px] md:w-80 md:h-80 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 relative overflow-hidden flex items-center justify-center hover:border-primary/30 transition-all duration-300">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10 animate-spin opacity-70"
                  style={{ animationDuration: '10s' }}
                ></div>

                {!imageLoaded && (
                  <div className="absolute inset-0 bg-muted animate-pulse rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                )}

                <img
                  src="/assets/nahin.png"
                  alt="Nahin F. Siddiqui"
                  className={`w-full h-full object-cover object-center rounded-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/avatar.png'; }}
                />
              </div>

              {/* Decorative floating circles — hidden on mobile */}
              <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse z-0"></div>
              <div className="hidden md:block absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-float z-0"></div>
              <div
                className="hidden md:block absolute top-1/2 -right-6 w-12 h-12 bg-secondary rounded-full opacity-30 animate-float z-0"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
