
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
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
      image: "/public/assets/libra.png",
      link: "https://github.com/mr-f-2002/libraRepos.git"
    },
    {
      id: 2,
      title: "Crop Recommender",
      description: "An intelligent ML based crop recommendation system to predict most suitable crop based on environmental conditions like soil nutrients, temperature, humidity, pH, and rainfall",
      technologies: ["Jupyter Notebook", "HTML", "CSS", "Python", "JavaScript"],
      image: "/public/assets/crop_recom.png",
      link: "https://github.com/mr-f-2002/Crop-Recommender.git"
    },
    {
      id: 3,
      title: "ShopSmart",
      description: "An e-commerce website with location-based filtering and search.",
      technologies: ["JavaScript", "ExpressJS", "NodeJS", "MySQL"],
      image: "/public/assets/shop_smart.png",
      link: "https://github.com/mr-f-2002/Shop-Smart"
    },
    {
      id: 4,
      title: "Fitify",
      description: "A health-tracking mobile app with personalized fitness recommendations.",
      technologies: ["React-native", "Firebase"],
      image: "/public/assets/libra.png",
      link: "https://github.com/mr-f-2002/Fitify.git"
    },
    {
      id: 5,
      title: "Med Planner",
      description: "A mobile app for tracking medicine schedules.",
      technologies: ["Kotlin"],
      image: "/public/assets/med_planner.png",
      link: "https://github.com/mr-f-2002/Med-Planner"
    },
    {
      id: 6,
      title: "PoorCAD",
      description: "A simple drawing app with multiple shapes and pen tools.",
      technologies: ["C++", "SFML"],
      image: "public/assets/poor_cad.png",
      link: "https://github.com/mr-f-2002/Poor-Cad"
    },
    {
      id: 7,
      title: "Bangla Document Topic Modeler",
      description: "A machine learning model to identify topics from Bangla articles.",
      technologies: ["Python", "BARTopic", "ML"],
      image: "public/assets/topic_modeler.png"
    },
    {
      id: 8,
      title: "Daily Dashboard",
      description: "A python based simple daily dashboard that keeps track of todo, daily work progress and reminders",
      technologies: ["Python", "Tkinter"],
      image: "public/assets/daily_dash.png",
      link: "https://github.com/mr-f-2002/event-planner-dashboard.git"
    },
    
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
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className={`animate-on-scroll animate-delay-${(index % 4 + 1) * 100}`}
            >
              <Card className="h-full flex flex-col card-hover overflow-hidden">
                <div className="h-40 bg-secondary flex items-center justify-center">
                  <div className="w-full h-full bg-secondary relative overflow-hidden p-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4 pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  {project.link ? (
                    <Button variant="outline" asChild className="w-full text-sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight size={14} className="ml-1" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="w-full text-sm">
                      Coming Soon
                    </Button>
                  )}
                </CardFooter>
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
