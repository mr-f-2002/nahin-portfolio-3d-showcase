import { useEffect, useRef } from 'react';
import {
  GraduationCap,
  Lightbulb,
  BookOpenCheck,
  Telescope
} from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    const el = aboutRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const items = [
    {
      title: "Academic Background",
      icon: GraduationCap,
      highlight: "IUT · CGPA 3.89/4.00",
      text:
        "B.Sc. in Computer Science & Engineering from Islamic University of Technology. Built strong foundations in algorithms, systems, and applied machine learning."
    },
    {
      title: "Research Focus",
      icon: Lightbulb,
      highlight: "Lightweight DL · Cloud AI",
      text:
        "Focused on efficient hybrid deep learning models for cloud workload forecasting and anomaly detection in large-scale systems."
    },
    {
      title: "Teaching Identity",
      icon: BookOpenCheck,
      highlight: "Lecturer · UIU",
      text:
        "Currently a Lecturer in CSE at United International University. Focused on conceptual clarity and research-driven teaching."
    },
    {
      title: "Academic Vision",
      icon: Telescope,
      highlight: "Research · Teaching · Growth",
      text:
        "Long-term commitment to academia through research contribution, teaching excellence, and independent AI systems research."
    }
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-6 md:px-10 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            About Me
          </h2>

          <p className="font-handwriting text-xl text-muted-foreground">
            Educator · Researcher · Machine Learning
          </p>
        </div>

        {/* GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">

          {/* CROSS LINES (kept minimal) */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-border -translate-x-1/2" />
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2" />

          {items.map((item, index) => (
            <div key={index} className="relative">

              {/* HEADER ROW */}
              <div className="flex items-center gap-3 mb-4">

                <div className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-primary">
                  <item.icon size={16} />
                </div>

                <span className="font-handwriting text-base text-muted-foreground">
                  {item.highlight}
                </span>

              </div>

              {/* TITLE (FIXED: bold handwriting) */}
              <h3 className="font-handwriting font-bold text-3xl text-foreground mb-3">
                {item.title}
              </h3>

              {/* DIVIDER */}
              <div className="w-10 h-px bg-primary mb-4" />

              {/* TEXT (consistent size) */}
              <p className="font-serif text-base leading-relaxed text-muted-foreground max-w-md">
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;
