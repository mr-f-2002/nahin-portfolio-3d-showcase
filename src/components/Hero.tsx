import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, GraduationCap, BookOpen, Building2 } from 'lucide-react';

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

  const highlights = [
    {
      icon: Building2,
      label: "Lecturer at UIU",
    },
    // {
    //   icon: BookOpen,
    //   label: "1 Q1 Journal Published",
    // },
    {
      icon: GraduationCap,
      label: "IUT Graduate, 2025",
    },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-4 overflow-hidden animate-on-scroll"
    >
      {/* Subtle background blobs — kept from original */}
      <div className="absolute -right-20 top-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>

      <div className="w-[80%] max-w-none mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">

          {/* ── Left: Text content ── */}
          <div className="md:col-span-3 order-2 md:order-1">

            {/* Role badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Lecturer &amp; Researcher · CSE
            </span>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
              <span className="block mb-2 text-2xl md:text-3xl font-normal text-muted-foreground">
                Hi, I'm
              </span>
              <span className="text-primary relative">
                Nahin F. Siddiqui
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg md:text-xl mb-6 text-muted-foreground mt-4">
              Lecturer, Dept. of CSE · United International University
            </h2>

            {/* Bio */}
            <p className="mb-8 text-base md:text-lg max-w-lg text-foreground/80 leading-relaxed">
              Computer Science graduate of Islamic University of Technology, now
              contributing to academia as a full-time lecturer and researcher.
              My work focuses on lightweight deep learning and cloud computing —
              with a long-term commitment to research and teaching.
            </p>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-3 mb-10">
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
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-6" asChild>
                <a href="#publications">
                  View Publications <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>

              <Button variant="outline" className="rounded-full px-6" asChild>
                <a href="#contact">Contact Me</a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-6 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                asChild
              >
                <a href="/assets/cv.pdf" download>
                  <Download size={15} className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 relative overflow-hidden flex items-center justify-center hover:border-primary/30 transition-all duration-300">
                {/* Spinning gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10 animate-spin opacity-70"
                  style={{ animationDuration: '10s' }}
                ></div>

                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-muted animate-pulse rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                )}

                <img
                  src="/assets/nahin.png"
                  alt="Nahin F. Siddiqui"
                  className={`w-full h-full object-cover object-center rounded-full transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/avatar.png';
                  }}
                />
              </div>

              {/* Decorative floating circles */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-float"></div>
              <div
                className="absolute top-1/2 -right-6 w-12 h-12 bg-secondary rounded-full opacity-30 animate-float"
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