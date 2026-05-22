restyle this section to have smaller project image and more minimal design:

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Code2, ShoppingCart, Heart, Pill, PaintBucket, BookOpen, Calendar, FlaskConical, Zap, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  category: string;
  isResearch?: boolean;
}

const projects: Project[] = [
  { id: 1, title: "Librfda", description: "An anonymous blogging platform with embedded study tools for students — built to support collaborative and distraction-free academic engagement.", technologies: ["Java", "JavaFX", "FXML", "MySQL"], image: "https://i.postimg.cc/qMrDWbLc/libra.png", link: "https://github.com/mr-f-2002/libraRepos.git", icon: BookOpen, category: "Desktop App" },
  { id: 2, title: "ShopSmart", description: "A full-stack e-commerce platform with location-based store filtering, product search, and a complete order management system.", technologies: ["JavaScript", "Node.js", "Express", "MySQL"], image: "https://i.postimg.cc/gjFtzNPW/shop-smart.png", link: "https://github.com/mr-f-2002/Shop-Smart", icon: ShoppingCart, category: "Web App" },
  { id: 3, title: "Crop Recommender", description: "An ML-based crop recommendation system that predicts the most suitable crop given soil and environmental conditions.", technologies: ["Python", "Scikit-Learn", "HTML", "CSS", "JavaScript"], image: "https://i.postimg.cc/NF6J5mgr/crop-recom.png", link: "https://github.com/mr-f-2002/Crop-Recommender.git", icon: FlaskConical, category: "Machine Learning", isResearch: true },
  { id: 4, title: "Fitify", description: "A health-tracking mobile app with personalised fitness recommendations and progress monitoring.", technologies: ["React Native", "Firebase"], image: "https://i.postimg.cc/Y9myBTZR/fitify.png", link: "https://github.com/mr-f-2002/Fitify.git", icon: Heart, category: "Mobile App" },
  { id: 5, title: "Med Planner", description: "A mobile app for managing medicine schedules with reminder notifications and intake tracking.", technologies: ["Kotlin", "Android"], image: "https://i.postimg.cc/pLG0h2tk/med-planner.png", link: "https://github.com/mr-f-2002/Med-Planner", icon: Pill, category: "Mobile App" },
  { id: 6, title: "PoorCAD", description: "A lightweight drawing application with multiple shape tools and freehand pen support, built with C++ and SFML.", technologies: ["C++", "SFML"], image: "https://i.postimg.cc/W4yfKsWt/poor-cad.png", link: "https://github.com/mr-f-2002/Poor-Cad", icon: PaintBucket, category: "Desktop App" },
  { id: 7, title: "Daily Dashboard", description: "A Python desktop dashboard for tracking daily todos, work progress, and reminders with a clean GUI.", technologies: ["Python", "Tkinter"], image: "https://i.postimg.cc/1zXjJ8KL/daily-dash.png", link: "https://github.com/mr-f-2002/event-planner-dashboard.git", icon: Calendar, category: "Desktop App" },
  { id: 8, title: "Bangla Document Topic Modeler", description: "An NLP model that identifies latent topics in Bangla-language articles using BARTopic.", technologies: ["Python", "BARTopic", "NLP"], image: "https://i.postimg.cc/Kj6qYQSb/topic-modeler.png", icon: FlaskConical, category: "Machine Learning", isResearch: true },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 3;
  const displayed = showAll ? projects : projects.slice(0, INITIAL);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
            }, 80 * i);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach(c => observer.observe(c));
    return () => cards.forEach(c => observer.unobserve(c));
  }, [displayed.length]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 md:py-24 px-4 relative animate-on-scroll">
      <div className="w-full md:w-[82%] max-w-none mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <span className="section-chip">Portfolio</span>
          </div>
          <h2 className="section-title mb-3">Projects</h2>
          <p className="section-subtitle">Selected work across research, web, mobile, and systems</p>
        </div>

        {/* Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  {displayed.map((project) => (
    <div
      key={project.id}
      className="project-card group flex overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition:
          'opacity 0.5s ease, transform 0.35s ease, border-color 0.3s ease',
        background: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor =
          'color-mix(in srgb, var(--teal) 15%, var(--border-color))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'hsl(var(--border))';
      }}
    >
      {/* LEFT: Small Thumbnail */}
      <div className="relative w-32 sm:w-36 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Tiny research badge */}
        {project.isResearch && (
          <div className="absolute top-2 right-2">
            <span
              className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium"
              style={{
                background: 'hsl(var(--background) / 0.92)',
                color: 'var(--teal)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              <FlaskConical size={10} />
            </span>
          </div>
        )}
      </div>

      {/* RIGHT: Content */}
      <div className="flex flex-col flex-1 p-4 min-w-0">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
              style={{
                background: 'hsl(var(--muted) / 0.15)',
                color: 'var(--teal)',
              }}
            >
              <project.icon size={13} />
            </div>

            <div className="min-w-0">
              <h3
                className="font-semibold text-sm truncate"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                {project.title}
              </h3>

              <span
                className="text-[11px] uppercase tracking-wide"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-5 mb-3 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 rounded-md"
              style={{
                background: 'hsl(var(--muted) / 0.12)',
                color: 'var(--text-secondary)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between">
          {project.link ? (
            <button
              onClick={() =>
                window.open(project.link, '_blank', 'noopener,noreferrer')
              }
              className="flex items-center gap-2 text-sm font-medium transition-all"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              <Code2 size={13} />
              View Project
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          ) : (
            <span
              className="text-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              No Public Repo
            </span>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Show more / less */}
        <div className="flex justify-center mt-8 md:mt-12 px-4">
          {!showAll && projects.length > INITIAL && (
            <button onClick={() => setShowAll(true)} className="btn-outline w-full sm:w-auto gap-2">
              <Zap size={15} /> See All Projects <ChevronDown size={15} />
            </button>
          )}
          {showAll && (
            <button onClick={() => setShowAll(false)} className="btn-outline w-full sm:w-auto gap-2">
              <Star size={15} /> Show Less <ChevronUp size={15} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
