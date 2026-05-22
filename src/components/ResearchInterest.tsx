import { useEffect, useRef } from 'react';
import { Target, Telescope } from 'lucide-react';

const ResearchInterest = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const researchInterests = [
    { topic: "Cloud Resource Provisioning Optimisation", note: "Core research area — published Q1 work" },
    { topic: "Lightweight & Sustainable Architecture Development", note: "Core research area — published Q1 work" },
    { topic: "Proactive Anomaly Detection in Cloud Systems", note: "Active — conference paper accepted (CCCN 2026)" },
    { topic: "Retrieval-Augmented Generation (RAG) Systems", note: "Exploratory interest" },
    { topic: "Bangla Language Processing", note: "Exploratory interest" },
  ];

  return (
    <section id="research" ref={sectionRef} className="py-8 md:py-12 px-4 relative animate-on-scroll">
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <span className="section-chip">Focus Areas</span>
          </div>
          <h2 className="section-title mb-2">Research Interests</h2>
          <p className="section-subtitle">Ongoing directions and open questions</p>
        </div>

        {/* Interests list */}
        <div className="space-y-3 mb-4">
          {researchInterests.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 p-4 rounded-xl transition-all duration-300"
              style={{
                background: 'hsl(var(--card) / 0.4)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'color-mix(in srgb, var(--teal) 35%, var(--border-color))';
                el.style.background = 'hsl(var(--card) / 0.8)';
                el.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border-color)';
                el.style.background = 'hsl(var(--card) / 0.4)';
                el.style.transform = 'translateX(0)';
              }}
            >
              <div className="icon-box w-7 h-7 mt-0.5 shrink-0">
                <Target size={13} />
              </div>
              <div>
                <p className="font-display font-medium text-sm transition-colors duration-300 group-hover:text-primary"
                  style={{ color: 'hsl(var(--foreground))' }}>
                  {item.topic}
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision card */}
        <div className="teal-card group p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="icon-box w-7 h-7">
              <Telescope size={14} />
            </div>
            <h4 className="font-display font-semibold text-sm" style={{ color: 'var(--teal)' }}>Research Vision</h4>
          </div>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
