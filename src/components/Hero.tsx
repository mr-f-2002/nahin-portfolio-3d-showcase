import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, GraduationCap, Building2 } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      },
      { threshold: 0.1 }
    );

    const el = heroRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const highlights = [
    { icon: Building2, label: "Lecturer at UIU" },
    { icon: GraduationCap, label: "IUT Graduate, 2025" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="animate-on-scroll min-h-screen flex items-center px-6 md:px-12 lg:px-16 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT (slightly larger now) */}
          <div>

            {/* intro */}
            <div className="flex items-center gap-2 font-handwriting text-base text-muted-foreground text-lg mb-5">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Lecturer & Researcher · CSE
            </div>

            {/* NAME */}
            <div className="mb-5">

              <span className="block font-handwriting text-lg text-muted-foreground mb-2">
                Hi, I'm
              </span>

              <h1 className="font-handwriting font-bold text-5xl md:text-7xl text-foreground leading-tight">
                Nahin F. Siddiqui
              </h1>

              <div className="w-24 h-[2px] bg-primary mt-4"></div>
            </div>

            {/* role */}
            <p className="font-handwriting text-xl text-muted-foreground mb-6">
              Lecturer, Dept. of CSE · United International University
            </p>

            {/* bio (slightly larger) */}
            <p className="font-serif text-lg leading-relaxed text-muted-foreground max-w-xl mb-8">
              Computer Science graduate of Islamic University of Technology, working in academia
              as a lecturer and researcher focusing on lightweight deep learning systems and
              efficient cloud computing models.
            </p>

            {/* highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-full font-handwriting text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.label}
                </span>
              ))}
            </div>

            {/* buttons */}
            <div className="flex flex-wrap gap-3">

              <a
                href="#publications"
                className="px-5 py-2.5 bg-primary text-primary-foreground font-handwriting text-base rounded-md flex items-center gap-2 hover:opacity-90 transition"
              >
                View Publications <ArrowRight size={14} />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 border border-border text-foreground font-handwriting text-base rounded-md hover:border-primary transition"
              >
                Contact
              </a>

              <a
                href="/assets/cv.pdf"
                download
                className="px-5 py-2.5 border border-border text-foreground font-handwriting text-base rounded-md flex items-center gap-2 hover:border-primary transition"
              >
                <Download size={14} />
                CV
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE (smaller + cleaner frame) */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* FRAME (no white fill anymore) */}
              <div className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[340px] aspect-[3/4] overflow-hidden rounded-lg border border-border bg-transparent relative">

                {!imageLoaded && (
                  <div className="w-full h-full bg-muted animate-pulse" />
                )}

                <img
                  src="/assets/nahin.png"
                  alt="Nahin F. Siddiqui"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/avatar.png';
                  }}
                />

                {/* TOP LEFT SMALL CIRCLE ACCENT */}
                <div className="absolute top-2 left-2 w-3 h-3 rounded-full border border-primary bg-background"></div>

              </div>

              {/* subtle corner accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r border-b border-primary rounded-br-md"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
