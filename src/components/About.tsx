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
      achievements: ["CGPA: 3.88/4.00", "Research in Resource Provisioning and Forecasting in Cloud"]
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
      content: "Computer Science and Engineering graduate with CGPA of 3.88/4.00, passionate about learning and implementing innovative methods."
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
        
        {/* New grid-based layout for better space utilization */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Who I Am - Takes up full width on large screens */}
          <div ref={addToRefs} className="lg:col-span-12 animate-on-scroll animate-delay-100">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">Who I Am</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whoIAmFlashcards.map((card, index) => (
                  <div
                    key={index}
                    ref={(el) => addToWhoIAmRefs(el, index)}
                    className={`transform transition-all duration-700 ${
                      index <= activeWhoIAmIndex 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="bg-card/60 p-4 rounded-lg border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30 h-full">
                      <div className="flex items-center mb-3">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          index <= activeWhoIAmIndex ? 'bg-primary' : 'bg-muted'
                        }`}></div>
                        <h4 className="text-lg font-semibold text-primary">{card.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education and Research side by side on large screens */}
          <div ref={addToRefs} className="lg:col-span-6 animate-on-scroll animate-delay-200">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer h-full">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">Education</h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300">
                    <div className="mb-2">
                      <p className="text-primary font-semibold text-sm">{edu.year}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                      <ul className="list-disc list-inside text-xs space-y-1">
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
          
          <div ref={addToRefs} className="lg:col-span-6 animate-on-scroll animate-delay-250">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer h-full">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">Research Interests</h3>
              <div className="space-y-4">
                <ul className="space-y-3">
                  {researchInterests.map((interest, index) => (
                    <li key={index} className="flex items-start p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300">
                      <span className="text-primary text-lg mr-2">•</span>
                      <span className="font-medium text-sm">{interest}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-3 text-primary">Research Focus</h4>
                  <p className="text-sm">
                    My research primarily focuses on optimizing resource provisioning in cloud environments
                    and applying AI techniques to solve complex educational and linguistic problems,
                    with a special interest in Bangla language processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills - Full width */}
          <div ref={addToRefs} className="lg:col-span-12 animate-on-scroll animate-delay-300">
            <div className="p-6 bg-card rounded-lg shadow-md modern-card shimmer">
              <h3 className="section-subheading border-b border-primary/20 pb-3 mb-6">My Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
