import { useState } from "react";
import { ArrowRight, Code2 } from "lucide-react";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Libra",
      description:
        "An anonymous blogging platform with embedded study tools for students — built to support collaborative and distraction-free academic engagement.",
      technologies: ["Java", "JavaFX", "FXML", "MySQL"],
      link: "https://github.com/mr-f-2002/libraRepos.git",
      category: "Desktop App"
    },
    {
      id: 2,
      title: "ShopSmart",
      description:
        "A full-stack e-commerce platform with location-based store filtering, product search, and order management system.",
      technologies: ["JavaScript", "Node.js", "Express", "MySQL"],
      link: "https://github.com/mr-f-2002/Shop-Smart",
      category: "Web App"
    },
    {
      id: 3,
      title: "Crop Recommender",
      description:
        "ML-based system that predicts the most suitable crop based on soil and environmental conditions.",
      technologies: ["Python", "Scikit-Learn"],
      link: "https://github.com/mr-f-2002/Crop-Recommender.git",
      category: "Machine Learning",
      isResearch: true
    },
    {
      id: 4,
      title: "Fitify",
      description:
        "Health tracking mobile app with personalised fitness recommendations and progress monitoring.",
      technologies: ["React Native", "Firebase"],
      link: "https://github.com/mr-f-2002/Fitify.git",
      category: "Mobile App"
    },
    {
      id: 5,
      title: "Med Planner",
      description:
        "Medicine schedule manager with reminders and intake tracking system.",
      technologies: ["Kotlin", "Android"],
      link: "https://github.com/mr-f-2002/Med-Planner",
      category: "Mobile App"
    },
    {
      id: 6,
      title: "PoorCAD",
      description:
        "Lightweight drawing tool with shapes and freehand sketching using C++ and SFML.",
      technologies: ["C++", "SFML"],
      link: "https://github.com/mr-f-2002/Poor-Cad",
      category: "Desktop App"
    },
    {
      id: 7,
      title: "Daily Dashboard",
      description:
        "Desktop productivity dashboard for todos, tracking, and reminders.",
      technologies: ["Python", "Tkinter"],
      link: "https://github.com/mr-f-2002/event-planner-dashboard.git",
      category: "Desktop App"
    },
    {
      id: 8,
      title: "Bangla Topic Modeler",
      description:
        "NLP system for extracting latent topics from Bangla articles using BARTopic.",
      technologies: ["Python", "NLP"],
      category: "Machine Learning",
      isResearch: true
    }
  ];

  const INITIAL = 4;
  const displayed = showAll ? projects : projects.slice(0, INITIAL);

  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-10 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            Projects
          </h2>

          <p className="font-handwriting text-xl text-muted-foreground">
            Selected work across research, systems & applications
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-8">

          {displayed.map((project) => (
            <div
              key={project.id}
              className="p-6 md:p-8"
            >

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="md:col-span-2">

                  {/* META */}
                  <p className="font-handwriting text-sm text-muted-foreground mb-2">
                    {project.category}
                    {project.isResearch && " · Research"}
                  </p>

                  {/* TITLE */}
                  <h3 className="font-handwriting font-bold text-3xl text-foreground mb-3">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="font-serif text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col justify-between">

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="font-handwriting text-sm px-3 py-1 border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* LINK */}
                  {project.link ? (
                    <button
                      onClick={() =>
                        window.open(project.link, "_blank", "noopener,noreferrer")
                      }
                      className="font-handwriting text-sm px-4 py-2 border border-primary text-foreground flex items-center gap-2"
                    >
                      <Code2 size={14} />
                      View Project
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <span className="font-handwriting text-sm text-muted-foreground">
                      No public repo
                    </span>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* TOGGLE */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-handwriting text-sm px-6 py-3 border border-border text-muted-foreground"
          >
            {showAll ? "Show Less" : "See All Projects"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
