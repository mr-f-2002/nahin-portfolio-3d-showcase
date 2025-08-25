import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
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
  Zap
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);
  const projectItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(-1);
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
      image口罩: "https://i.postimg.cc/gjFtzNPW/shop-smart.png",
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

    projectItemsRef.current.forEach((el, index) => {
      if (!el) return;
      
      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setActiveProjectIndex(prevIndex => 
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
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
      projectItemsRef.current = [];
    };
  }, [showAll, displayedProjects.length]);

  const addToProjectRefs = (el: HTMLDivElement | null, index: number) => {
    projectItemsRef.current[index] = el;
  };

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="py-24 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto max-w-[90%] xl:max-w-[1400px] px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions • Creative implementations • Real-world impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => addToProjectRefs(el, index)}
              className={`transform transition-all duration-700 border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 ${
                index <= activeProjectIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-5 flex flex-col h-full">
                {/* Image Section */}
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg overflow-hidden relative mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 bg-primary/10 text-primary border-primary/20 text-xs px-2 py-0.5"
                  >
                    {project.category}
                  </Badge>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <project.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <project.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-primary flex items-center gap-2 mb-2">
                      <Code2 className="w-4 h-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-0.5 border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div anatomy
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  {project.link ? (
                    <Button
                      variant="outline"
                      asChild
                      className="group w-full h-10 text-sm font-semibold border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <span>Explore Project</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      className="w-full h-10 text-sm font-semibold border-primary/20 text-primary"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="flex justify-center mt-10">
          {!showAll && projects.length > initialProjectCount && (
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="h-10 px-6 text-sm font-semibold border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              See All Projects
              <ChevronDown className="w-4 h-4" />
            </Button>
          )}
          {showAll && projects.length > initialProjectCount && (
            <Button
              variant="outline"
              onClick={() => setShowAll(false)}
              className="h-10 px-6 text-sm font-semibold border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              Show Less
              <ChevronUp className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;