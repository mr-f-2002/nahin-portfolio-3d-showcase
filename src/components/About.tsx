import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Brain, 
  Target, 
  Star, 
  Trophy, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Lightbulb,
  Zap,
  Award,
  Flame,
  Rocket,
  ChevronRight
} from 'lucide-react';

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
      skills: ["Python", "Java", "C++", "JavaScript", "Kotlin"],
      icon: Code,
      color: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-500"
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "RAG"],
      icon: Brain,
      color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      category: "Web & Mobile Development",
      skills: ["React", "Node.js", "Express", "React Native", "HTML/CSS"],
      icon: Globe,
      color: "bg-gradient-to-br from-green-500/20 to-blue-500/20",
      iconColor: "text-green-500"
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "Firebase"],
      icon: Database,
      color: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
    }
  ];

  const whoIAmFlashcards = [
    {
      title: "Academic Excellence",
      content: "Computer Science and Engineering graduate with CGPA of 3.88/4.00, passionate about learning and implementing innovative methods.",
      icon: Trophy,
      highlight: "3.88/4.00 CGPA",
      color: "text-yellow-500"
    },
    {
      title: "Research Pioneer",
      content: "Focused on resource provisioning and forecasting in cloud environments, applying innovative methods to solve real-world problems.",
      icon: Lightbulb,
      highlight: "Cloud Computing",
      color: "text-blue-500"
    },
    {
      title: "Tech Specialist",
      content: "Specialized in machine learning, software development, and cloud computing with a strong foundation in both theoretical concepts and practical skills.",
      icon: Zap,
      highlight: "ML & AI Enthusiast",
      color: "text-purple-500"
    },
    {
      title: "Innovation Driver",
      content: "Driven to create unique products that make a difference while expanding knowledge in machine learning and cloud computing.",
      icon: Rocket,
      highlight: "Product Creator",
      color: "text-green-500"
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
      className="py-24 px-6 bg-gradient-to-br from-secondary/40 via-background to-secondary/30 animate-on-scroll"
    >
      <div className="container mx-auto max-w-8xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Flame className="w-6 h-6 text-primary" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Computer Science Engineer • Research Enthusiast • Innovation Driver
          </p>
        </div>
        
        {/* Hero Cards Layout */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
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
              <div className="relative group h-80 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:border-primary/40 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Indicator */}
                <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${
                  index <= activeWhoIAmIndex ? 'bg-primary animate-pulse' : 'bg-muted/50'
                } shadow-lg`}></div>
                
                {/* Icon Section */}
                <div className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ${card.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <card.icon className={`w-10 h-10 ${card.color}`} />
                  </div>
                  
                  {/* Highlight Badge */}
                  <Badge variant="secondary" className="mb-4 px-4 py-1 text-xs font-bold bg-primary/20 text-primary border-primary/30">
                    {card.highlight}
                  </Badge>
                  
                  <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                    {card.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.content}
                  </p>
                </div>
                
                {/* Arrow Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ChevronRight className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education and Research - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div ref={addToRefs} className="animate-on-scroll animate-delay-200">
            <div className="relative group bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm rounded-3xl border border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Header with Icon */}
              <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 p-8 border-b border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary font-bold">
                  <Award className="w-4 h-4 mr-2" />
                  Academic Excellence
                </Badge>
              </div>

              <div className="p-8 space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="group/item relative p-6 bg-gradient-to-r from-secondary/30 to-secondary/20 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                        {edu.year}
                      </Badge>
                    </div>
                    <div className="pr-20">
                      <h4 className="font-bold text-xl mb-2 text-foreground leading-tight">{edu.degree}</h4>
                      <p className="text-primary font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {edu.institution}
                      </p>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div ref={addToRefs} className="animate-on-scroll animate-delay-250">
            <div className="relative group bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm rounded-3xl border border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Header with Icon */}
              <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-blue-500/20 p-8 border-b border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Research
                  </h3>
                </div>
                <Badge variant="outline" className="border-blue-500/30 text-blue-500 font-bold">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Innovation Focus
                </Badge>
              </div>

              <div className="p-8 space-y-6">
                {researchInterests.map((interest, index) => (
                  <div key={index} className="group/item flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-semibold text-lg">{interest}</span>
                  </div>
                ))}
                
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl border border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-xl text-primary">Research Vision</h4>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    My research primarily focuses on optimizing resource provisioning in cloud environments
                    and applying AI techniques to solve complex educational and linguistic problems,
                    with a special interest in Bangla language processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills - Hero Section */}
        <div ref={addToRefs} className="animate-on-scroll animate-delay-300">
          <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm rounded-3xl border border-primary/20 shadow-2xl overflow-hidden">
            {/* Skills Header */}
            <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 p-12 text-center border-b border-primary/20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Technical Arsenal
                </h3>
                <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center">
                  <Code className="w-10 h-10 text-accent" />
                </div>
              </div>
              <p className="text-xl text-muted-foreground">
                Cutting-edge technologies and frameworks I master
              </p>
            </div>

            <div className="p-12 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className={`group relative ${category.color} p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl`}>
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                    <h4 className="font-bold text-2xl mb-2 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                      {category.category}
                    </h4>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="group/skill relative">
                        <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                          <span className="font-semibold text-sm text-foreground">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skill Level Indicator */}
                  {/* <div className="mt-6 text-center">
                    <Badge variant="secondary" className={`${category.iconColor} bg-white/10 border-white/20 font-bold`}>
                      Expert Level
                    </Badge>
                  </div> */}
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
