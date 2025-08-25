import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, ChevronUp, Code2, Smartphone, ShoppingCart, Heart, Pill, PaintBucket, BookOpen, Calendar } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  icon: React.ComponentType<any>;
  category: string;
};

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Libra",
      description: "An anonymous blogging platform with embedded study tools for students.",
      technologies: ["Java", "FXML", "JavaFX", "MySQL"],
      image: "https://i.postimg.cc/qMrDWbLc/libra.png",
      link: "https://github.com/mr-f-2002/libraRepos.git",
      icon: BookOpen,
      category: "Desktop App"
    },
    {
      id: 2,
      title: "Crop Recommender",
      description: "An intelligent ML based crop recommendation system to predict most suitable crop based on environmental conditions.",
      technologies: ["Python", "ML", "HTML", "CSS", "JavaScript"],
      image: "https://i.postimg.cc/NF6J5mgr/crop-recom.png",
      link: "https://github.com/mr-f-2002/Crop-Recommender.git",
      icon: Code2,
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "ShopSmart",
      description: "An e-commerce website with location-based filtering and search functionality.",
      technologies: ["JavaScript", "ExpressJS", "NodeJS", "MySQL"],
      image: "https://i.postimg.cc/gjFtzNPW/shop-smart.png",
      link: "https://github.com/mr-f-2002/Shop-Smart",
      icon: ShoppingCart,
      category: "Web App"
    },
    {
      id: 4,
      title: "Fitify",
      description: "A health-tracking mobile app with personalized fitness recommendations.",
      technologies: ["React Native", "Firebase"],
      image: "https://i.postimg.cc/Y9myBTZR/fitify.png",
      link: "https://github.com/mr-f-2002/Fitify.git",
      icon: Heart,
      category: "Mobile App"
    },
    {
      id: 5,
      title: "Med Planner",
      description: "A mobile app for tracking medicine schedules and reminders.",
      technologies: ["Kotlin", "Android"],
      image: "https://i.postimg.cc/pLG0h2tk/med-planner.png",
      link: "https://github.com/mr-f-2002/Med-Planner",
      icon: Pill,
      category: "Mobile App"
    },
    {
      id: 6,
      title: "PoorCAD",
      description: "A simple drawing app with multiple shapes and pen tools for creative design.",
      technologies: ["C++", "SFML"],
      image: "https://i.postimg.cc/W4yfKsWt/poor-cad.png",
      link: "https://github.com/mr-f-2002/Poor-Cad",
      icon: PaintBucket,
      category: "Desktop App"
    },
    {
      id: 7,
      title: "Bangla Document Topic Modeler",
      description: "A machine learning model to identify topics from Bangla articles using advanced NLP.",
      technologies: ["Python", "BARTopic", "ML", "NLP"],
      image: "https://i.postimg.cc/Kj6qYQSb/topic-modeler.png",
      icon: BookOpen,
      category: "Machine Learning"
    },
    {
      id: 8,
      title: "Daily Dashboard",
      description: "A Python-based dashboard that tracks todos, work progress and daily reminders.",
      technologies: ["Python", "Tkinter", "GUI"],
      image: "https://i.postimg.cc/1zXjJ8KL/daily-dash.png",
      link: "https://github.com/mr-f-2002/event-planner-dashboard.git",
      icon: Calendar,
      category: "Desktop App"
    }
  ];

  const initialProjectCount = 3;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectCount);

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
  }, [showAll]); // Added showAll dependency to refresh animations when more projects are shown

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="py-20 px-4 animate-on-scroll"
    >
      <div className="container mx-auto max-w-7xl px-2">
        <h2 className="section-heading">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className={`animate-on-scroll animate-delay-${(index % 4 + 1) * 100}`}
            >
              <Card className="group h-full flex flex-col card-hover overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Image Section - More compact */}
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <project.icon size={18} className="text-primary" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-foreground">{project.category}</span>
                  </div>
                </div>
                
                {/* Content Section - More compact */}
                <div className="flex-1 flex flex-col p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <project.icon size={20} className="text-primary flex-shrink-0" />
                        <CardTitle className="text-lg font-bold leading-tight">{project.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-2 py-1 font-medium">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-auto">
                    {project.link ? (
                      <Button variant="outline" asChild className="w-full group/btn">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project 
                          <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          {!showAll && projects.length > initialProjectCount && (
            <Button 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 text-primary border-primary hover:bg-primary/10"
            >
              See All Projects <ChevronDown size={16} />
            </Button>
          )}
          
          {showAll && projects.length > initialProjectCount && (
            <Button 
              variant="outline" 
              onClick={() => setShowAll(false)}
              className="flex items-center gap-2 text-primary border-primary hover:bg-primary/10"
            >
              Show Less <ChevronUp size={16} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
