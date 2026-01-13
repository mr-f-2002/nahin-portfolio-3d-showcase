import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Rocket } from 'lucide-react';

const ResearchInterest = () => {
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

  const researchInterests = [
    "Cloud Resource Provisioning Optimization",
    "Lightweight & Sustainable Architecture Development",
    "Proactive Anomaly Prediction in Large-Scale Cloud Systems",
    "Natural Language Processing in Education",
    "Retrieval-Augmented Generation (RAG) Systems",
  ];

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto max-w-[90%] xl:max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Areas of focus and ongoing research directions
          </p>
        </div>

        <Card ref={cardRef} className="border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 max-w-4xl mx-auto">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Current Focus Areas
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-6">
              {researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-600/10 rounded-lg border border-blue-600/10 hover:border-blue-600/20 transition-all duration-300"
                >
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-sm sm:text-base font-medium text-foreground">{interest}</span>
                </div>
              ))}

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
                  <h4 className="text-lg sm:text-xl font-semibold text-primary">Research Vision</h4>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  As a lecturer and researcher, my work focuses on optimizing resource provisioning in cloud environments and leveraging AI/ML techniques 
                  to address complex problems in education and computational linguistics. I have a special interest in developing AI solutions for Bangla 
                  language processing and contributing to the advancement of applied machine learning in academia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchInterest;
