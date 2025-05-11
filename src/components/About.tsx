
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  
  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2018 - 2022",
      achievements: ["CGPA: 3.9/4.0", "Research in Resource Provisioning and Forecasting in Cloud"]
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
  
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "Kotlin"]
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "RAG"]
    },
    {
      category: "Web & Mobile Development",
      skills: ["React", "Node.js", "Express", "React Native", "HTML/CSS"]
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "Firebase"]
    }
  ];

  const whoIAmFlashcards = [
    {
      title: "Academic Excellence",
      content: "Computer Science and Engineering graduate with CGPA of 3.9/4.0, passionate about learning and implementing innovative methods."
    },
    {
      title: "Research Interests",
      content: "Focused on resource provisioning and forecasting in cloud environments, applying innovative methods to solve real-world problems."
    },
    {
      title: "Technical Focus",
      content: "Specialized in machine learning, software development, and cloud computing with a strong foundation in both theoretical concepts and practical skills."
    },
    {
      title: "Career Goals",
      content: "Driven to create unique products that make a difference while expanding knowledge in machine learning and cloud computing."
    }
  ];
  
  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 px-4 bg-secondary/30 animate-on-scroll"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">About Me</h2>
        
        {/* Updated layout - separate rows for Who I Am and Education/Skills */}
        <div className="flex flex-col gap-8 mb-16">
          {/* Who I Am - Now with flashcards */}
          <div ref={addToRefs} className="w-full animate-on-scroll animate-delay-100">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">Who I Am</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {whoIAmFlashcards.map((card, index) => (
                  <div 
                    key={index}
                    className="flashcard-container transform transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Card className="h-full bg-background/80 hover:bg-background cursor-pointer border-primary/10 hover:border-primary/30 transition-all">
                          <CardContent className="p-6 flex items-center justify-center text-center h-40">
                            <h4 className="font-bold text-primary">{card.title}</h4>
                          </CardContent>
                        </Card>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-4 bg-popover/95 backdrop-blur-sm text-popover-foreground">
                        <h4 className="text-lg font-semibold mb-2 text-primary">{card.title}</h4>
                        <p>{card.content}</p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Education - Now in its own row */}
          <div ref={addToRefs} className="w-full animate-on-scroll animate-delay-200">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">Education</h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300">
                    <div className="md:col-span-1">
                      <p className="text-primary font-semibold">{edu.year}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <ul className="list-disc list-inside text-sm pl-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills - Now in its own row */}
          <div ref={addToRefs} className="w-full animate-on-scroll animate-delay-300">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">My Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300">
                    <h4 className="font-bold text-lg mb-4 text-primary">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span key={idx} className="bg-background/50 px-3 py-1 rounded-full text-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
