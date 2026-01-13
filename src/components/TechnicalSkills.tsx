import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Brain, Zap } from 'lucide-react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "Kotlin"],
      icon: Code,
      color: "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
      iconColor: "text-blue-600"
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "RAG"],
      icon: Brain,
      color: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
      iconColor: "text-purple-600"
    },
    {
      category: "Web & Mobile Development",
      skills: ["React", "Node.js", "Express", "React Native", "HTML/CSS"],
      icon: Globe,
      color: "bg-gradient-to-br from-green-600/20 to-green-800/20",
      iconColor: "text-green-600"
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "Firebase"],
      icon: Database,
      color: "bg-gradient-to-br from-orange-600/20 to-orange-800/20",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto max-w-[80%] px-4 sm:px-8 lg:px-12">
        <Card ref={cardRef} className="border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Technical Skills
                </h3>
              </div>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                Technologies and frameworks I specialize in
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className={`p-8 rounded-xl border border-primary/10 ${category.color} shadow-md hover:shadow-lg transition-all duration-300`}>
                  <div className="text-center mb-6">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center ${category.iconColor}`}>
                      <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{category.category}</h4>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-primary/20 transition-all duration-300">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-base font-medium text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechnicalSkills;
