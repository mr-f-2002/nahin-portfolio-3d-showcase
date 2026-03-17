import { useEffect, useRef } from 'react';
import { Code, Database, Globe, Brain } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const TechnicalSkills = () => {
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

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      iconColor: "text-blue-500",
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
      iconColor: "text-purple-500",
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
      iconColor: "text-green-500",
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
      iconColor: "text-orange-500",
      skills: [
        { name: "MySQL", primary: false },
        { name: "MongoDB", primary: false },
        { name: "Git", primary: true },
        { name: "Docker", primary: false },
      ]
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 relative animate-on-scroll"
    >
      <div className="w-[80%] max-w-none mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 animate-on-scroll"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0 ${category.iconColor}`}>
                  <category.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.category}
                </h4>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={`text-xs px-2.5 py-1 border transition-colors duration-300 ${
                      skill.primary
                        ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
                        : 'bg-card/80 text-muted-foreground border-border/50 hover:border-primary/20 hover:text-foreground'
                    }`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block w-3 h-3 rounded-full bg-primary/40 border border-primary/40"></span>
            Actively used in research
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block w-3 h-3 rounded-full bg-border/80 border border-border"></span>
            General proficiency
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;