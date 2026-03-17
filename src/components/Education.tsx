import { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Star, Award } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 relative animate-on-scroll"
    >
      <div ref={cardRef} className="animate-on-scroll">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Education
          </h2>
          <p className="text-muted-foreground text-base max-w-xs mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        {/* BSc — Primary Card */}
        <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 mb-4">
          {/* Degree badge */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 text-xs px-2.5 py-1 shrink-0"
            >
              2021 – 2025
            </Badge>
          </div>

          <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
            B.Sc. in Computer Science &amp; Engineering
          </h4>
          <p className="text-sm text-primary/80 font-medium flex items-center gap-1.5 mb-4">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            Islamic University of Technology (IUT)
          </p>

          {/* Achievements */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
              <span>CGPA: <span className="text-foreground font-medium">3.89 / 4.00</span></span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Star className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
              <span>Research in lightweight hybrid architectures for cloud resource forecasting</span>
            </div>
          </div>
        </div>

        {/* HSC & SSC — Secondary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* HSC */}
          <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 text-xs px-2.5 py-1 shrink-0"
              >
                2019 – 2020
              </Badge>
            </div>
            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
              Higher Secondary Certificate (HSC)
            </h4>
            <p className="text-xs text-primary/80 font-medium flex items-center gap-1.5 mb-3">
              <BookOpen className="w-3 h-3 shrink-0" />
              Gurudayal Govt. College
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Star className="w-3 h-3 text-yellow-500 shrink-0" />
              <span>GPA: <span className="text-foreground font-medium">5.00 / 5.00</span></span>
            </div>
          </div>

          {/* SSC */}
          <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 text-xs px-2.5 py-1 shrink-0"
              >
                2014 – 2019
              </Badge>
            </div>
            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
              Secondary School Certificate (SSC)
            </h4>
            <p className="text-xs text-primary/80 font-medium flex items-center gap-1.5 mb-3">
              <BookOpen className="w-3 h-3 shrink-0" />
              Kishoreganj Govt. Boys' High School
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Star className="w-3 h-3 text-yellow-500 shrink-0" />
              <span>GPA: <span className="text-foreground font-medium">5.00 / 5.00</span></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;