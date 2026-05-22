import { useEffect, useRef } from 'react';
import { Code, Database, Globe, Brain } from 'lucide-react';

const TechnicalSkills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                (entry.target as HTMLElement).style.opacity = '1';
                (entry.target as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
            }
          });
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
    });

    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", primary: true },
        { name: "C++", primary: true },
        { name: "JavaScript", primary: false },
        { name: "Kotlin", primary: false },
      ]
    },
    {
      category: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "PyTorch", primary: true },
        { name: "TensorFlow", primary: true },
        { name: "Pandas / NumPy", primary: true },
        { name: "RAG", primary: true },
      ]
    },
    {
      category: "Web & Mobile",
      icon: Globe,
      skills: [
        { name: "React", primary: false },
        { name: "Node.js", primary: false },
        { name: "React Native", primary: false },
        { name: "HTML / CSS", primary: false },
      ]
    },
    {
      category: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", primary: false },
        { name: "MongoDB", primary: false },
        { name: "Git", primary: true },
        { name: "Docker", primary: false },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 px-4 relative animate-on-scroll">
      <div className="w-full md:w-[82%] max-w-none mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <span className="section-chip">Toolkit</span>
          </div>
          <h2 className="section-title mb-3">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className="teal-card shimmer group p-5 md:p-6"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: `opacity 0.5s ease, transform 0.5s ease, box-shadow 0.35s ease` }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-box">
                  <cat.icon size={17} />
                </div>
                <h4 className="font-display font-semibold text-sm group-hover:text-primary transition-colors duration-300"
                  style={{ color: 'hsl(var(--foreground))' }}>
                  {cat.category}
                </h4>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  skill.primary
                    ? <span key={idx} className="teal-badge">{skill.name}</span>
                    : <span key={idx} className="muted-badge">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: 'color-mix(in srgb, var(--teal) 50%, transparent)', border: '1px solid var(--teal)' }}></span>
            Actively used in research
          </div>
          <div className="flex items-center gap-2 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--muted) / 0.6)', border: '1px solid var(--border-color)' }}></span>
            General proficiency
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
