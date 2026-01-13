import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Star } from 'lucide-react';

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

  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2021 - 2025",
      achievements: ["CGPA: 3.89/4.00", "Research in lightweight hybrid architectures for cloud resource forecasting."]
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Gurudayal Govt. College",
      year: "2019 - 2020",
      achievements: ["GPA: 5.00/5.00"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kishoreganj Govt. Boys' High School",
      year: "2014 - 2018",
      achievements: ["GPA: 5.00/5.00"]
    }
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto max-w-[90%] xl:max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        <Card ref={cardRef} className="border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 max-w-4xl mx-auto">
          <CardContent className="p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Academic Background
              </h3>
            </div>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="p-6 bg-secondary/10 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-base text-primary font-medium flex items-center gap-2 mt-2">
                        <BookOpen className="w-5 h-5" />
                        {edu.institution}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-sm px-3 py-1">
                      {edu.year}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-3">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-base text-muted-foreground">
                        <Star className="w-5 h-5 text-yellow-500" />
                        {achievement}
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

export default Education;
