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
  Globe, 
  Lightbulb,
  Zap,
  Award,
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
    
    whoIAmItemsRef.current.forEach((el, index) => {
      if (!el) return;
      
      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
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

  const whoIAmFlashcards = [
    {
      title: "Academic Excellence",
      content: "Computer Science and Engineering graduate with CGPA of 3.88/4.00, passionate about learning and implementing innovative methods.",
      icon: Trophy,
      highlight: "3.88/4.00 CGPA",
      color: "text-yellow-600"
    },
    {
      title: "Research Pioneer",
      content: "Focused on resource provisioning and forecasting in cloud environments, applying innovative methods to solve real-world problems.",
      icon: Lightbulb,
      highlight: "Cloud Computing",
      color: "text-blue-600"
    },
    {
      title: "Tech Specialist",
      content: "Specialized in machine learning, software development, and cloud computing with a strong foundation in both theoretical concepts and practical skills.",
      icon: Zap,
      highlight: "ML & AI Enthusiast",
      color: "text-purple-600"
    },
    {
      title: "Innovation Driver",
      content: "Driven to create unique products that make a difference while expanding knowledge in machine learning and cloud computing.",
      icon: Rocket,
      highlight: "Product Creator",
      color: "text-green-600"
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
      className="py-24 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science Engineer • Research Enthusiast • Innovation Driver
          </p>
        </div>
        
        {/* Who I Am Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {whoIAmFlashcards.map((card, index) => (
              <Card
                key={index}
                ref={(el) => addToWhoIAmRefs(el, index)}
                className={`border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  index <= activeWhoIAmIndex 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${card.color}`}>
                    <card.icon className={`w-8 h-8 ${card.color}`} />
                  </div>
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {card.highlight}
                  </Badge>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">{card.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.content}</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education and Research Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education Card */}
          <Card ref={addToRefs} className="border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="p-4 bg-secondary/10 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-primary font-medium flex items-center gap-2 mt-1">
                          <BookOpen className="w-4 h-4" />
                          {edu.institution}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {edu.year}
                      </Badge>
                    </div>
                    <div className="mt-3 space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Card */}
          <Card ref={addToRefs} className="border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Research Interests
                </h3>
              </div>
              <div className="space-y-4">
                {researchInterests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-600/10 rounded-lg border border-blue-600/10 hover:border-blue-600/20 transition-all duration-300">
                    <Target className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{interest}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Research Vision</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    My research focuses on optimizing resource provisioning in cloud environments and applying AI techniques to solve complex educational and linguistic problems, with a special interest in Bangla language processing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <Card ref={addToRefs} className="border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Technical Skills
                </h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks I specialize in
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className={`p-6 rounded-xl border border-primary/10 ${category.color} shadow-md hover:shadow-lg transition-all duration-300`}>
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center ${category.iconColor}`}>
                      <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{category.category}</h4>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10 hover:border-primary/20 transition-all duration-300">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium text-foreground">{skill}</span>
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

export default About;