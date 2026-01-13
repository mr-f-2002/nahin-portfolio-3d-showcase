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
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Academic Background
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="p-4 sm:p-6 bg-secondary/10 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-xl font-semibold text-foreground leading-tight">{edu.degree}</h4>
                      <p className="text-sm sm:text-base text-primary font-medium flex items-center gap-2 mt-1 sm:mt-2">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span className="break-words">{edu.institution}</span>
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm px-2 sm:px-3 py-1 w-fit shrink-0">
                      {edu.year}
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
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
