import { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, Star, Award } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-8 md:py-12 px-4 relative animate-on-scroll">
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <span className="section-chip">Academic Journey</span>
          </div>
          <h2 className="section-title mb-2">Education</h2>
          <p className="section-subtitle">Qualifications and achievements</p>
        </div>

        {/* BSc — Primary Card */}
        <div className="teal-card shimmer group p-6 mb-4">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="icon-box">
              <GraduationCap size={18} />
            </div>
            <span className="teal-badge">2021 – 2025</span>
          </div>

          <h4 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors duration-300"
            style={{ color: 'hsl(var(--foreground))' }}>
            B.Sc. in Computer Science &amp; Engineering
          </h4>
          <p className="font-body text-sm font-medium flex items-center gap-1.5 mb-4" style={{ color: 'var(--teal)' }}>
            <BookOpen size={13} className="shrink-0" />
            Islamic University of Technology (IUT)
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
              <Star size={13} style={{ color: 'var(--teal)' }} className="shrink-0" />
              <span>CGPA: <span className="font-semibold" style={{ color: 'hsl(var(--foreground))' }}>3.89 / 4.00</span></span>
            </div>
            <div className="flex items-start gap-2 font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
              <Star size={13} style={{ color: 'var(--teal)' }} className="shrink-0 mt-0.5" />
              <span>Research in lightweight hybrid architectures for cloud resource forecasting</span>
            </div>
          </div>
        </div>

        {/* HSC & SSC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              degree: "Higher Secondary Certificate (HSC)",
              school: "Gurudayal Govt. College",
              period: "2019 – 2020",
              gpa: "5.00 / 5.00"
            },
            {
              degree: "Secondary School Certificate (SSC)",
              school: "Kishoreganj Govt. Boys' High School",
              period: "2014 – 2019",
              gpa: "5.00 / 5.00"
            }
          ].map((item, i) => (
            <div key={i} className="teal-card group p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="icon-box w-8 h-8">
                  <Award size={15} />
                </div>
                <span className="teal-badge text-xs">{item.period}</span>
              </div>
              <h4 className="font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors"
                style={{ color: 'hsl(var(--foreground))' }}>
                {item.degree}
              </h4>
              <p className="font-body text-xs font-medium flex items-center gap-1.5 mb-3" style={{ color: 'var(--teal)' }}>
                <BookOpen size={11} className="shrink-0" />
                {item.school}
              </p>
              <div className="flex items-center gap-2 font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                <Star size={11} style={{ color: 'var(--teal)' }} className="shrink-0" />
                <span>GPA: <span className="font-semibold" style={{ color: 'hsl(var(--foreground))' }}>{item.gpa}</span></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
