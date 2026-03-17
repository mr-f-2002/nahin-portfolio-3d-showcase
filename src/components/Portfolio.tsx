import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Code2,
  ShoppingCart,
  Heart,
  Pill,
  PaintBucket,
  BookOpen,
  Calendar,
  FlaskConical,
  Zap,
  Star
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
  isResearch?: boolean;
}

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);
  const projectItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Libra",
      description: "An anonymous blogging platform with embedded study tools for students — built to support collaborative and distraction-free academic engagement.",
      technologies: ["Java", "JavaFX", "FXML", "MySQL"],
      image: "https://i.postimg.cc/qMrDWbLc/libra.png",
      link: "https://github.com/mr-f-2002/libraRepos.git",
      icon: BookOpen,
      category: "Desktop App",
      isResearch: false
    },
    {
      id: 2,
      title: "ShopSmart",
      description: "A full-stack e-commerce platform with location-based store filtering, product search, and a complete order management system.",
      technologies: ["JavaScript", "Node.js", "Express", "MySQL"],
      image: "https://i.postimg.cc/gjFtzNPW/shop-smart.png",
      link: "https://github.com/mr-f-2002/Shop-Smart",
      icon: ShoppingCart,
      category: "Web App",
      isResearch: false
    },
    {
      id: 3,
      title: "Crop Recommender",
      description: "An ML-based crop recommendation system that predicts the most suitable crop given soil and environmental conditions.",
      technologies: ["Python", "Scikit-Learn", "HTML", "CSS", "JavaScript"],
      image: "https://i.postimg.cc/NF6J5mgr/crop-recom.png",
      link: "https://github.com/mr-f-2002/Crop-Recommender.git",
      icon: FlaskConical,
      category: "Machine Learning",
      isResearch: true
    },
    {
      id: 4,
      title: "Fitify",
      description: "A health-tracking mobile app with personalised fitness recommendations and progress monitoring.",
      technologies: ["React Native", "Firebase"],
      image: "https://i.postimg.cc/Y9myBTZR/fitify.png",
      link: "https://github.com/mr-f-2002/Fitify.git",
      icon: Heart,
      category: "Mobile App",
      isResearch: false
    },
    {
      id: 5,
      title: "Med Planner",
      description: "A mobile app for managing medicine schedules with reminder notifications and intake tracking.",
      technologies: ["Kotlin", "Android"],
      image: "https://i.postimg.cc/pLG0h2tk/med-planner.png",
      link: "https://github.com/mr-f-2002/Med-Planner",
      icon: Pill,
      category: "Mobile App",
      isResearch: false
    },
    {
      id: 6,
      title: "PoorCAD",
      description: "A lightweight drawing application with multiple shape tools and freehand pen support, built with C++ and SFML.",
      technologies: ["C++", "SFML"],
      image: "https://i.postimg.cc/W4yfKsWt/poor-cad.png",
      link: "https://github.com/mr-f-2002/Poor-Cad",
      icon: PaintBucket,
      category: "Desktop App",
      isResearch: false
    },
    {
      id: 7,
      title: "Daily Dashboard",
      description: "A Python desktop dashboard for tracking daily todos, work progress, and reminders with a clean GUI.",
      technologies: ["Python", "Tkinter"],
      image: "https://i.postimg.cc/1zXjJ8KL/daily-dash.png",
      link: "https://github.com/mr-f-2002/event-planner-dashboard.git",
      icon: Calendar,
      category: "Desktop App",
      isResearch: false
    },
    {
      id: 8,
      title: "Bangla Document Topic Modeler",
      description: "An NLP model that identifies latent topics in Bangla-language articles using BARTopic.",
      technologies: ["Python", "BARTopic", "NLP"],
      image: "https://i.postimg.cc/Kj6qYQSb/topic-modeler.png",
      icon: FlaskConical,
      category: "Machine Learning",
      isResearch: true
    }
  ];

  const initialProjectCount = 3;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) observer.observe(portfolioRef.current);
    projectItemsRef.current.forEach((el) => { if (el) observer.observe(el); });

    return () => {
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
      projectItemsRef.current.forEach((el) => { if (el) observer.unobserve(el); });
    };
  }, [displayedProjects.length]);

  const addToProjectRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !projectItemsRef.current[index]) {
      projectItemsRef.current[index] = el;
      el.classList.add('opacity-0', 'translate-y-8');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }
  };

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="py-20 px-4 relative"
    >
      <div className="w-[80%] max-w-none mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected work across research, web, mobile, and systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => addToProjectRefs(el, index)}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex flex-col overflow-hidden hover:border-primary/30 hover:bg-card/80 transition-all duration-300 transform"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-secondary/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge — top left */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-full border border-border/50">
                    {project.category}
                  </span>
                  {project.isResearch && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium rounded-full border border-primary/30">
                      <FlaskConical className="w-3 h-3" />
                      Research
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <project.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
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
                      className="text-xs px-2 py-0.5 border-primary/20 text-muted-foreground"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  {project.link ? (
                    <Button
                      variant="outline"
                      asChild
                      className="w-full h-9 text-sm border-border/50 text-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        View on GitHub
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      className="w-full h-9 text-sm border-border/50 text-muted-foreground"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      No Public Repo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        <div className="flex justify-center mt-10">
          {!showAll && projects.length > initialProjectCount && (
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="h-10 px-6 text-sm border-border/50 text-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
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
              className="h-10 px-6 text-sm border-border/50 text-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
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