import { useEffect, useRef } from 'react';
import { Brain, Target, Telescope } from 'lucide-react';

const ResearchInterest = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const researchInterests = [
    {
      topic: "Cloud Resource Provisioning Optimisation",
      note: "Core research area — published Q1 work"
    },
    {
      topic: "Lightweight & Sustainable Architecture Development",
      note: "Core research area — published Q1 work"
    },
    {
      topic: "Proactive Anomaly Detection in Cloud Systems",
      note: "Active — conference paper accepted (CCCN 2026)"
    },
    {
      topic: "Retrieval-Augmented Generation (RAG) Systems",
      note: "Exploratory interest"
    },
    {
      topic: "Bangla Language Processing",
      note: "Exploratory interest"
    },
  ];

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-20 px-4 relative animate-on-scroll"
    >
      <div ref={cardRef} className="animate-on-scroll">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Research Interests
          </h2>
          <p className="text-muted-foreground text-base max-w-xs mx-auto">
            Focus areas and ongoing directions
          </p>
        </div>

        {/* Interests List */}
        <div className="space-y-3 mb-4">
          {researchInterests.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Target className="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.topic}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Research Vision */}
        <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0">
              <Telescope className="w-3.5 h-3.5 text-primary" />
            </div>
            <h4 className="text-sm font-semibold text-primary">Research Vision</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            My near-term goal is to deepen my work on sustainable, resource-efficient AI
            for cloud environments — building on my published research in lightweight
            hybrid architectures. In parallel, I am expanding into RAG systems and
            Bangla language processing, where I see meaningful open problems.
            Long-term, I aim to establish an independent research line and contribute
            to the academic community through publications, collaboration, and
            eventually graduate supervision.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ResearchInterest;