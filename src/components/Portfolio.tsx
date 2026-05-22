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
  { id: 1, title: "Libra", description: "An anonymous blogging platform with embedded study tools for students — built to support collaborative and distraction-free academic engagement.", technologies: ["Java", "JavaFX", "FXML", "MySQL"], image: "https://i.postimg.cc/qMrDWbLc/libra.png", link: "https://github.com/mr-f-2002/libraRepos.git", icon: BookOpen, category: "Desktop App" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {displayed.map((project) => (
            <div
              key={project.id}
              className="project-card group flex flex-col overflow-hidden rounded-xl"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                background: 'hsl(var(--card) / 0.6)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'color-mix(in srgb, var(--teal) 40%, var(--border-color))';
                el.style.boxShadow = '0 8px 40px var(--teal-glow)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border-color)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden" style={{ background: 'hsl(var(--muted) / 0.2)' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(15,20,25,0.5), transparent)' }} />

                {/* Badges — top left */}
                <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full font-mono text-xs"
                    style={{ background: 'hsl(var(--background) / 0.85)', color: 'hsl(var(--foreground))', border: '1px solid var(--border-color)', backdropFilter: 'blur(8px)' }}>
                    {project.category}
                  </span>
                  {project.isResearch && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-xs"
                      style={{ background: 'color-mix(in srgb, var(--teal) 20%, transparent)', color: 'var(--teal)', border: '1px solid color-mix(in srgb, var(--teal) 35%, transparent)', backdropFilter: 'blur(8px)' }}>
                      <FlaskConical size={11} /> Research
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="icon-box w-7 h-7">
                    <project.icon size={14} />
                  </div>
                  <h3 className="font-display font-semibold text-sm group-hover:text-primary transition-colors duration-300"
                    style={{ color: 'hsl(var(--foreground))' }}>
                    {project.title}
                  </h3>
                </div>

                <p className="font-body text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="teal-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="muted-badge">+{project.technologies.length - 4}</span>
                  )}
                </div>

                {/* Action */}
                <div className="mt-auto">
                  {project.link ? (
                    <button
                      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                      className="btn-outline w-full text-sm justify-center"
                      style={{ padding: '9px 16px' }}
                    >
                      <Code2 size={14} />
                      View on GitHub
                      <ArrowRight size={13} className="ml-auto transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <button disabled className="w-full flex items-center justify-center gap-2 font-body text-sm py-2.5 rounded-lg"
                      style={{ background: 'hsl(var(--muted) / 0.3)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', cursor: 'not-allowed' }}>
                      <Calendar size={14} /> No Public Repo
                    </button>
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
