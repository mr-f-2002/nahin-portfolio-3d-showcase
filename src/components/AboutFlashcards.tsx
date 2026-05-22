import { useRef, useState, useEffect } from 'react';
import { GraduationCap, Lightbulb, BookOpenCheck, Telescope } from 'lucide-react';

const AboutFlashcards = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) headingObserver.observe(sectionRef.current);

    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => setActiveIndex(prev => index > prev ? index : prev), index * 120);
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
    });

    return () => { if (sectionRef.current) headingObserver.unobserve(sectionRef.current); };
  }, []);

  const cards = [
    {
      title: "Academic Background",
      content: "B.Sc. in Computer Science & Engineering from Islamic University of Technology (IUT), graduating with a CGPA of 3.89/4.00. Built a strong foundation across algorithms, systems, and applied machine learning.",
      icon: GraduationCap,
      highlight: "IUT · CGPA 3.89/4.00",
    },
    {
      title: "Research Focus",
      content: "Specialising in lightweight hybrid deep learning models for cloud workload forecasting and anomaly detection. My work targets sustainable, resource-efficient AI solutions for large-scale cloud environments.",
      icon: Lightbulb,
      highlight: "Lightweight DL · Cloud AI",
    },
    {
      title: "Teaching Identity",
      content: "Currently serving as a Lecturer in the Department of CSE at United International University. Previously at Eastern University. Committed to building strong conceptual foundations in students and nurturing the next generation of researchers.",
      icon: BookOpenCheck,
      highlight: "Lecturer · UIU",
    },
    {
      title: "Academic Vision",
      content: "Academia is not just a career choice — it is a long-term commitment. My goal is to grow as a researcher and educator, contribute meaningfully to the scientific community, and eventually lead independent research at a recognised institution.",
      icon: Telescope,
      highlight: "Research · Teaching · Growth",
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 px-4 relative animate-on-scroll">
      <div className="w-full md:w-[82%] max-w-none mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <span className="section-chip">About Me</span>
          </div>
          <h2 className="section-title mb-3">Who I Am</h2>
          <p className="section-subtitle">Educator · Researcher · ML Specialist</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className="teal-card shimmer p-5 md:p-6"
              style={{
                opacity: index <= activeIndex ? 1 : 0,
                transform: index <= activeIndex ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, box-shadow 0.35s ease, border-color 0.35s ease`,
              }}
            >
              {/* Icon */}
              <div className="icon-box mb-4">
                <card.icon size={18} />
              </div>

              {/* Highlight badge */}
              <span className="teal-badge mb-4 inline-flex flex-wrap max-w-full break-words">
                {card.highlight}
              </span>

              {/* Title */}
              <h4 className="font-display font-semibold text-base mb-3 transition-colors duration-300"
                style={{ color: 'hsl(var(--foreground))' }}>
                {card.title}
              </h4>

              {/* Body */}
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
