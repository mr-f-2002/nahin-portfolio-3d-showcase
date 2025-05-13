import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const whoIAmItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeWhoIAmIndex, setActiveWhoIAmIndex] = useState<number>(-1);
  
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
    
    // For the who I am items, we'll handle them separately for the sequential effect
    whoIAmItemsRef.current.forEach((el, index) => {
      if (!el) return;
      
      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add a small delay for sequential animation
              setTimeout(() => {
                setActiveWhoIAmIndex(prevIndex => 
                  index > prevIndex ? index : prevIndex
                );
              }, index * 150);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      itemObserver.observe(el);
      
      return () => {
        if (el) itemObserver.unobserve(el);
      };
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
  
  const addToWhoIAmRefs = (el: HTMLDivElement | null, index: number) => {
    whoIAmItemsRef.current[index] = el;
  };
  
  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2021 - 2025",
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

  const researchInterests = [
    "Cloud Computing Resource Optimization",
    "Natural Language Processing in Education",
    "Retrieval Augmented Generation",
    "Machine Learning for Healthcare",
    "Bangla Language Processing"
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
          {/* Who I Am - Now with sequential slide-in effect */}
          <div ref={addToRefs} className="w-full animate-on-scroll animate-delay-100">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">Who I Am</h3>

              <div className="flex flex-col space-y-8 relative">
                {/* Progress line */}
                <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-primary/30 z-0"></div>
                
                {whoIAmFlashcards.map((card, index) => (
                  <div
                    key={index}
                    ref={(el) => addToWhoIAmRefs(el, index)}
                    className={`relative pl-10 transform transition-all duration-700 ${
                      index <= activeWhoIAmIndex 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-[-50px]'
                    }`}
                  >
                    {/* Progress circle */}
                    <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      index <= activeWhoIAmIndex ? 'border-primary bg-primary/20' : 'border-muted bg-secondary'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        index <= activeWhoIAmIndex ? 'bg-primary' : 'bg-muted'
                      }`}></div>
                    </div>

                    <div className="bg-card/60 p-4 rounded-lg border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                      <h4 className="text-lg font-semibold text-primary mb-2">{card.title}</h4>
                      <p className="text-muted-foreground">{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
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
          
        {/* Research Interests - Moved from Experience section */}
        <div ref={addToRefs} className="w-full animate-on-scroll animate-delay-250">
          <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer">
            <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">Research Interests</h3>
            <div className="space-y-4">
              <ul className="space-y-4">
                {researchInterests.map((interest, index) => (
                  <li key={index} className="flex items-start p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300">
                    <span className="text-primary text-lg mr-2">•</span>
                    <span className="font-medium">{interest}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-4 text-primary">Research Focus</h4>
                <p>
                  My research primarily focuses on optimizing resource provisioning in cloud environments
                  and applying AI techniques to solve complex educational and linguistic problems,
                  with a special interest in Bangla language processing.
                </p>
              </div>
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
    </section>
  );
};

export default About;
