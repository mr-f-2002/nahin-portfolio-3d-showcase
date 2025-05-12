
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const portfolioRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Libra (libtaRepos)",
      description: "An anonymous blogging platform with embedded study tools for students.",
      technologies: ["Java", "FXML", "JavaFX", "MySQL"],
      image: "placeholder",
      link: "https://github.com/mr-f-2002/libraRepos.git"
    },
    {
      id: 2,
      title: "ShopSmart (Shop-Smart)",
      description: "An e-commerce website with location-based filtering and search.",
      technologies: ["JavaScript", "ExpressJS", "NodeJS", "MySQL"],
      image: "placeholder",
      link: "https://github.com/mr-f-2002/Shop-Smart"
    },
    {
      id: 3,
      title: "PoorCAD (Poor-Cad)",
      description: "A simple drawing app with multiple shapes and pen tools.",
      technologies: ["C++", "SFML"],
      image: "placeholder",
      link: "https://github.com/mr-f-2002/Poor-Cad"
    },
    {
      id: 4,
      title: "Med Planner (Med-Planner)",
      description: "A mobile app for tracking medicine schedules.",
      technologies: ["Kotlin"],
      image: "placeholder",
      link: "https://github.com/mr-f-2002/Med-Planner"
    },
    {
      id: 5,
      title: "Bangla Document Topic Modeler",
      description: "A machine learning model to identify topics from Bangla articles.",
      technologies: ["Python", "BARTopic", "ML"],
      image: "placeholder"
    },
    {
      id: 6,
      title: "Fitify",
      description: "A health-tracking mobile app with personalized fitness recommendations.",
      technologies: ["React-native", "Firebase"],
      image: "placeholder",
      link: "https://github.com/mr-f-2002/Fitify.git"
    },
    {
      id: 7,
      title: "Event Planner",
      description: "A python based simple daily dashboard that keeps track of todo, daily work progress and reminders",
      technologies: ["Python", "Tkinter"],
      image: "placeholder",
      link: "https://github.com/mr-f-2002/event-planner-dashboard.git"
    },
    {
      id: 8,
      title: "Crop Recommender",
      description: "An intelligent crop recommendation system tailored for small-scale farmers. Leveraging machine learning, it predicts the most suitable crop based on environmental conditions like soil nutrients, temperature, humidity, pH, and rainfall",
      technologies: ["Jupyter Notebook", "HTML", "CSS", "Python", "JavaScript"],
      image: "placeholder",
      link: "https://github.com/mr-f-2002/Crop-Recommender.git"
    }
  ];
  
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
    
    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
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
  
  const filters = [
    "all", 
    "web", 
    "mobile", 
    "ml", 
    "desktop"
  ];
  
  const getFilteredProjects = () => {
    if (activeFilter === "all") return projects;
    
    return projects.filter(project => {
      const tech = project.technologies.map(t => t.toLowerCase());
      
      switch (activeFilter) {
        case "web":
          return tech.some(t => ["javascript", "react", "html", "css", "nodejs", "expressjs"].includes(t));
        case "mobile":
          return tech.some(t => ["kotlin", "react-native", "firebase"].includes(t));
        case "ml":
          return tech.some(t => ["python", "bartopic", "ml"].includes(t));
        case "desktop":
          return tech.some(t => ["java", "javafx", "c++", "sfml"].includes(t));
        default:
          return true;
      }
    });
  };
  
  return (
    <section 
      id="portfolio" 
      ref={portfolioRef}
      className="py-20 px-4 animate-on-scroll"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">My Projects</h2>
        
        <div ref={addToRefs} className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll animate-delay-100">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="capitalize"
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredProjects().map((project, index) => (
            <div 
              key={project.id} 
              ref={addToRefs}
              className={`animate-on-scroll animate-delay-${(index % 3 + 1) * 100}`}
            >
              <Card className="h-full flex flex-col card-hover overflow-hidden">
                <div className="h-48 bg-secondary flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <div className="text-6xl text-primary font-bold opacity-30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  {project.link ? (
                    <Button variant="outline" asChild className="w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
