import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Heart, 
  Pill, 
  PaintBucket, 
  BookOpen, 
  Calendar,
  Star,
  Rocket,
  Zap,
  Github
} from 'lucide-react';

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
      className="py-24 px-6 bg-gradient-to-br from-background via-secondary/20 to-background animate-on-scroll"
    >
      <div className="container mx-auto max-w-8xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-accent animate-bounce" />
            </div>
          </div>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            Innovative solutions • Creative implementations • Real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className={`animate-on-scroll animate-delay-${(index % 4 + 1) * 100}`}
            >
              <Card className="group h-full flex flex-col card-hover overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-primary/20 rounded-3xl">
                {/* Image Section - Square with overlay effects */}
                <div className="aspect-square bg-gradient-to-br from-secondary/50 to-secondary/30 flex items-center justify-center relative overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge - Always Visible */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground border-none font-bold text-xs px-3 py-1">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Project Icon - Hover Effect */}
                  <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <project.icon size={20} className="text-primary" />
                  </div>
                  
                  {/* View Project Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight size={24} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section - Enhanced */}
                <div className="flex-1 flex flex-col p-8">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                        <project.icon size={20} className="text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-bold leading-tight bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  
                  {/* Technologies - Enhanced */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                      <Code2 size={16} />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs px-3 py-2 font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs px-3 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Button - Enhanced */}
                  <div className="mt-auto">
                    {project.link ? (
                      <Button variant="outline" asChild className="w-full group/btn h-12 text-base font-semibold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                          <span>Explore Project</span>
                          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled className="w-full h-12 text-base font-semibold">
                        <Calendar size={18} className="mr-2" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          {!showAll && projects.length > initialProjectCount && (
            <Button 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="flex items-center gap-3 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-14 px-8 text-lg font-semibold rounded-2xl"
            >
              <Zap size={20} />
              See All Projects 
              <ChevronDown size={20} />
            </Button>
          )}
          
          {showAll && projects.length > initialProjectCount && (
            <Button 
              variant="outline" 
              onClick={() => setShowAll(false)}
              className="flex items-center gap-3 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-14 px-8 text-lg font-semibold rounded-2xl"
            >
              <Star size={20} />
              Show Less 
              <ChevronUp size={20} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
