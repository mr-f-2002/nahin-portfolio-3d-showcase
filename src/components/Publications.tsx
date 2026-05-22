import { useEffect, useRef } from 'react';
import { ExternalLink, Clock, CheckCircle } from "lucide-react";

const Publications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    itemRefs.current.forEach(el => el && observer.observe(el));
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      itemRefs.current.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  const publications = [
    {
      authors: "N. F. Siddiqui, Z. S. Hoque, M. E. Haque, A. R. M. Kamal, A. Azad, S. A. Alyami, and M. A. Hossain",
      title: "SpectraNet: A lightweight hybrid time–frequency deep learning framework for sustainable cloud workload forecasting",
      journal: "Journal of Cloud Computing",
      volume: "vol. 14, no. 1, art. no. 75",
      year: "2025",
      doi: "10.1186/s13677-025-00815-z",
      doiUrl: "https://doi.org/10.1186/s13677-025-00815-z",
      metrics: "Q1, IF: 4.3",
      status: "Published"
    },
    {
      authors: "N. F. Siddiqui, Z. S. Hoque, M. E. Haque, and M. A. Hossain",
      title: "SpectraDetect: A lightweight hybrid framework for proactive anomaly prediction in large-scale cloud computing",
      journal: "International Conference on Cloud Computing and Networking (CCCN 2026)",
      location: "Jeju, South Korea",
      year: "2026",
      status: "Published"
    }
  ];

  return (
    <section id="publications" ref={sectionRef} className="py-16 md:py-24 px-4 relative animate-on-scroll">
      <div className="w-full md:w-[82%] max-w-none mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <span className="section-chip">Research Output</span>
          </div>
          <h2 className="section-title mb-3">Publications</h2>
          <p className="section-subtitle">Contribution to lightweight and sustainable computing</p>
        </div>

        {/* List */}
        <div className="space-y-5">
          {publications.map((pub, index) => (
            <div
              key={index}
              ref={el => { itemRefs.current[index] = el; }}
              className="subtle-card animate-on-scroll group p-5 sm:p-7 md:p-8"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 md:gap-6">

                {/* Index number — desktop */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl shrink-0 font-mono font-bold text-lg"
                  style={{ background: 'color-mix(in srgb, var(--teal) 12%, transparent)', color: 'var(--teal)', border: '1px solid color-mix(in srgb, var(--teal) 25%, transparent)' }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0">

                  {/* Status badge — mobile: top, desktop: top-right */}
                  <div className="mb-3 sm:mb-0 sm:float-right sm:ml-4">
                    {pub.status === "published" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-medium"
                        style={{ background: 'var(--teal)', color: 'hsl(var(--primary-foreground))' }}>
                        <CheckCircle size={11} />
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-medium"
                        style={{ color: 'var(--teal)', border: '1px solid color-mix(in srgb, var(--teal) 50%, transparent)', background: 'color-mix(in srgb, var(--teal) 8%, transparent)' }}>
                        <Clock size={11} />
                        Accepted
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-sm sm:text-base md:text-lg leading-snug mb-3 transition-colors duration-300 group-hover:text-primary break-words pr-0 sm:pr-28"
                    style={{ color: 'hsl(var(--foreground))' }}>
                    "{pub.title}"
                  </h3>

                  {/* Authors */}
                  <p className="font-mono text-xs leading-relaxed mb-2 break-words" style={{ color: 'var(--text-secondary)' }}>
                    {pub.authors}
                  </p>

                  {/* Journal info */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-sm mb-3">
                    <span className="font-body font-medium italic" style={{ color: 'hsl(var(--foreground) / 0.8)' }}>
                      {pub.journal}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {pub.volume && <><span className="hidden sm:inline opacity-40">·</span><span>{pub.volume}</span></>}
                      {pub.location && <><span className="hidden sm:inline opacity-40">·</span><span>{pub.location}</span></>}
                      <span className="hidden sm:inline opacity-40">·</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>

                  {/* Metrics & DOI */}
                  {pub.status === "published" && (
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3">
                      {pub.metrics && (
                        <span className="teal-badge w-fit">{pub.metrics}</span>
                      )}
                      {pub.doiUrl && (
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs hover:underline break-all transition-colors duration-200"
                          style={{ color: 'var(--teal)' }}
                        >
                          <ExternalLink size={12} className="shrink-0" />
                          DOI: {pub.doi}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;
