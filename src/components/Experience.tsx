import { useEffect, useRef } from 'react';
import { Briefcase, FlaskConical } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  department: string;
  period: string;
  type: 'academic' | 'industry';
  current: boolean;
  description: string;
  responsibilities: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    id: 0, role: "Lecturer", company: "United International University",
    department: "Department of Computer Science & Engineering",
    period: "February 2026 – Present", type: "academic", current: true,
    description: "Currently serving as a Lecturer, delivering undergraduate CSE courses while pursuing active research in lightweight deep learning and cloud computing.",
    responsibilities: [
      "Conduct lectures, tutorials, and lab sessions for core CSE courses",
      "Design course materials, assignments, and assessments aligned with learning outcomes",
      "Supervise and mentor undergraduate student projects and research work",
      "Pursue research in lightweight deep learning models for cloud workload forecasting",
      "Participate in curriculum development and departmental academic activities"
    ],
    tags: ["Teaching", "Research", "Mentorship", "Machine Learning", "Cloud Computing"]
  },
  {
    id: 1, role: "Lecturer", company: "Eastern University",
    department: "Department of Computer Science & Engineering",
    period: "October 2025 – February 2026", type: "academic", current: false,
    description: "Began academic career as a Lecturer immediately after graduating from IUT. Delivered undergraduate courses and contributed to research and student mentorship.",
    responsibilities: [
      "Taught core undergraduate CSE courses including labs and tutorials",
      "Designed and evaluated course assessments and learning materials",
      "Mentored students on academic projects and coursework",
      "Continued research work on cloud resource provisioning and ML-based forecasting"
    ],
    tags: ["Teaching", "Curriculum Design", "Research", "Mentorship"]
  },
  {
    id: 2, role: "AI Engineering Intern", company: "Kernel Technologies Limited",
    department: "",
    period: "June 2024 – September 2024", type: "industry", current: false,
    description: "4-month industry internship focused on building an AI-powered viva system for medical students using Retrieval Augmented Generation (RAG).",
    responsibilities: [
      "Implemented RAG pipelines to generate context-relevant questions from medical textbooks",
      "Built a feedback system evaluating student answers against key concepts",
      "Optimised the system to handle multiple medical specialties and textbook formats",
      "Collaborated with medical subject matter experts to validate content accuracy"
    ],
    tags: ["RAG", "NLP", "Python", "PyTorch", "FastAPI"]
  }
];

const ExperienceCard = ({ exp, cardIndex }: { exp: Experience; cardIndex: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, cardIndex * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [cardIndex]);

  return (
    <div
      ref={cardRef}
      className="subtle-card group p-5 md:p-7 shimmer"
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease' }}
    >
      {/* Current badge */}
      {exp.current && (
        <div className="mb-3 md:mb-0 md:absolute md:top-6 md:right-6 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-medium"
            style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10b981' }}></span>
            Current
          </span>
        </div>
      )}

      <div className="flex items-start gap-4 md:gap-5">
        {/* Number badge */}
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl font-mono font-bold text-base shrink-0"
          style={{ background: 'color-mix(in srgb, var(--teal) 15%, transparent)', color: 'var(--teal)', border: '1px solid color-mix(in srgb, var(--teal) 30%, transparent)' }}>
          {String(cardIndex + 1).padStart(2, '0')}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-display font-semibold text-base md:text-lg mb-0.5 group-hover:text-primary transition-colors duration-300"
            style={{ color: 'hsl(var(--foreground))' }}>
            {exp.role}
          </h4>
          <p className="font-body font-medium text-sm md:text-base mb-0.5" style={{ color: 'var(--teal)' }}>
            {exp.company}
          </p>
          {exp.department && (
            <p className="font-body text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{exp.department}</p>
          )}
          <p className="font-mono text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>{exp.period}</p>

          <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={{ color: 'hsl(var(--foreground) / 0.7)' }}>
            {exp.description}
          </p>

          <h5 className="font-mono text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--teal)' }}>
            Key Responsibilities
          </h5>
          <ul className="space-y-2 mb-5 pl-0">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--teal)', opacity: 0.6 }}></span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, i) => (
              <span key={i} className="teal-badge">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionLabel = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="icon-box"><Icon size={16} /></div>
    <h3 className="font-display font-semibold text-lg" style={{ color: 'hsl(var(--foreground))' }}>{label}</h3>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--border-color), transparent)' }}></div>
  </div>
);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const academic = experiences.filter(e => e.type === 'academic');
  const industry = experiences.filter(e => e.type === 'industry');

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 px-4 relative animate-on-scroll">
      <div className="w-full md:w-[82%] max-w-none mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <span className="section-chip">Career</span>
          </div>
          <h2 className="section-title mb-3">Experience</h2>
          <p className="section-subtitle">Academic career and industry exposure</p>
        </div>

        {/* Academic */}
        <div className="mb-10 md:mb-14">
          <SectionLabel icon={FlaskConical} label="Academic" />
          <div className="space-y-5">
            {academic.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} cardIndex={i} />
            ))}
          </div>
        </div>

        {/* Industry */}
        <div>
          <SectionLabel icon={Briefcase} label="Industry" />
          <div className="space-y-5">
            {industry.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} cardIndex={academic.length + i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
