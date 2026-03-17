import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Lightbulb,
  BookOpenCheck,
  Telescope
} from 'lucide-react';

const AboutFlashcards = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const whoIAmItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeWhoIAmIndex, setActiveWhoIAmIndex] = useState<number>(-1);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    whoIAmItemsRef.current.forEach((el, index) => {
      if (!el) return;

      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setActiveWhoIAmIndex(prevIndex =>
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
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const addToWhoIAmRefs = (el: HTMLDivElement | null, index: number) => {
    whoIAmItemsRef.current[index] = el;
  };

  const whoIAmFlashcards = [
    {
      title: "Academic Background",
      content:
        "B.Sc. in Computer Science & Engineering from Islamic University of Technology (IUT), graduating with a CGPA of 3.89/4.00. Built a strong foundation across algorithms, systems, and applied machine learning.",
      icon: GraduationCap,
      highlight: "IUT · CGPA 3.89/4.00",
      color: "text-yellow-500"
    },
    {
      title: "Research Focus",
      content:
        "Specialising in lightweight hybrid deep learning models for cloud workload forecasting and anomaly detection. My work targets sustainable, resource-efficient AI solutions for large-scale cloud environments.",
      icon: Lightbulb,
      highlight: "Lightweight DL · Cloud AI",
      color: "text-blue-500"
    },
    {
      title: "Teaching Identity",
      content:
        "Currently serving as a Lecturer in the Department of CSE at United International University. Previously at Eastern University. Committed to building strong conceptual foundations in students and nurturing the next generation of researchers.",
      icon: BookOpenCheck,
      highlight: "Lecturer · UIU",
      color: "text-purple-500"
    },
    {
      title: "Academic Vision",
      content:
        "Academia is not just a career choice — it is a long-term commitment. My goal is to grow as a researcher and educator, contribute meaningfully to the scientific community, and eventually lead independent research at a recognised institution.",
      icon: Telescope,
      highlight: "Research · Teaching · Growth",
      color: "text-green-500"
    }
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-4 relative"
    >
      <div className="w-[80%] max-w-none mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Educator · Researcher · ML Specialist
          </p>
        </div>

        {/* Flashcards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {whoIAmFlashcards.map((card, index) => (
            <div
              key={index}
              ref={(el) => addToWhoIAmRefs(el, index)}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
                index <= activeWhoIAmIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 mb-5 rounded-lg bg-card/80 border border-border/50 flex items-center justify-center ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>

              {/* Badge */}
              <span className="inline-flex items-center px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 mb-4">
                {card.highlight}
              </span>

              {/* Title */}
              <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h4>

              {/* Content */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutFlashcards;