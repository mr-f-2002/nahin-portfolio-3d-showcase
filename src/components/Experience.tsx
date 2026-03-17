import { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
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

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) observer.observe(experienceRef.current);
    elementsRef.current.forEach((el) => { if (el) observer.observe(el); });

    return () => {
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      elementsRef.current.forEach((el) => { if (el) observer.unobserve(el); });
      elementsRef.current = [];
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    elementsRef.current[index] = el;
  };

  const experiences: Experience[] = [
    {
      id: 0,
      role: "Lecturer",
      company: "United International University",
      department: "Department of Computer Science & Engineering",
      period: "February 2026 – Present",
      type: "academic",
      current: true,
      description:
        "Currently serving as a Lecturer, delivering undergraduate CSE courses while pursuing active research in lightweight deep learning and cloud computing.",
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
      id: 1,
      role: "Lecturer",
      company: "Eastern University",
      department: "Department of Computer Science & Engineering",
      period: "October 2025 – February 2026",
      type: "academic",
      current: false,
      description:
        "Began academic career as a Lecturer immediately after graduating from IUT. Delivered undergraduate courses and contributed to research and student mentorship.",
      responsibilities: [
        "Taught core undergraduate CSE courses including labs and tutorials",
        "Designed and evaluated course assessments and learning materials",
        "Mentored students on academic projects and coursework",
        "Continued research work on cloud resource provisioning and ML-based forecasting"
      ],
      tags: ["Teaching", "Curriculum Design", "Research", "Mentorship"]
    },
    {
      id: 2,
      role: "AI Engineering Intern",
      company: "Kernel Technologies Limited",
      department: "",
      period: "June 2024 – September 2024",
      type: "industry",
      current: false,
      description:
        "4-month industry internship focused on building an AI-powered viva system for medical students using Retrieval Augmented Generation (RAG).",
      responsibilities: [
        "Implemented RAG pipelines to generate context-relevant questions from medical textbooks",
        "Built a feedback system evaluating student answers against key concepts",
        "Optimised the system to handle multiple medical specialties and textbook formats",
        "Collaborated with medical subject matter experts to validate content accuracy"
      ],
      tags: ["RAG", "NLP", "Python", "PyTorch", "FastAPI"]
    }
  ];

  const academicExperiences = experiences.filter(e => e.type === 'academic');
  const industryExperiences = experiences.filter(e => e.type === 'industry');

  const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => (
    <div
      ref={(el) => addToRefs(el, index)}
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 opacity-0 translate-y-8"
    >
      {/* Current badge */}
      {exp.current && (
        <div className="mb-3 sm:absolute sm:top-6 sm:right-6 sm:mb-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-full border border-green-500/20">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Current
          </span>
        </div>
      )}

      <div className="flex items-start gap-4 md:gap-6">
        {/* Index number */}
        <div className="hidden md:flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary font-bold text-lg shrink-0">
          {index + 1}
        </div>

        <div className="flex-1 min-w-0">
          {/* Role & Company */}
          <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {exp.role}
          </h4>
          <p className="text-base font-medium text-foreground/80">
            {exp.company}
          </p>
          {exp.department && (
            <p className="text-sm text-muted-foreground mb-1">{exp.department}</p>
          )}
          <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Responsibilities */}
          <h5 className="text-sm font-medium text-primary mb-2">Key Responsibilities</h5>
          <ul className="space-y-1.5 mb-5">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 bg-primary/50 rounded-full shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs px-2.5 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 px-4 relative"
    >
      <div className="w-[80%] max-w-none mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic career and industry exposure
          </p>
        </div>

        {/* Academic Experience */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Academic</h3>
          </div>
          <div className="space-y-6">
            {academicExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Industry Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Industry</h3>
          </div>
          <div className="space-y-6">
            {industryExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={academicExperiences.length + index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;