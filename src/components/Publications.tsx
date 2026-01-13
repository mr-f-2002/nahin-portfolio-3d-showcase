import { FileText, ExternalLink, Clock } from "lucide-react";

const Publications = () => {
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
      status: "published"
    },
    {
      authors: "N. F. Siddiqui, Z. S. Hoque, M. E. Haque, and M. A. Hossain",
      title: "SpectraDetect: A lightweight hybrid framework for proactive anomaly prediction in large-scale cloud computing",
      journal: "International Conference on Cloud Computing and Networking (CCCN 2026)",
      location: "Jeju, South Korea",
      year: "2026",
      status: "under_review"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Publications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Peer-reviewed research contributions in cloud computing and machine learning
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {pub.status === "published" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Published
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full border border-amber-500/20">
                    <Clock className="w-3 h-3" />
                    Under Review
                  </span>
                )}
              </div>

              {/* Publication Number */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary font-bold text-lg shrink-0">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0 pr-20">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    "{pub.title}"
                  </h3>

                  {/* Authors */}
                  <p className="text-muted-foreground text-sm mb-3">
                    {pub.authors}
                  </p>

                  {/* Journal/Conference Info */}
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-medium text-foreground/80 italic">
                      {pub.journal}
                    </span>
                    {pub.volume && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{pub.volume}</span>
                      </>
                    )}
                    {pub.location && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{pub.location}</span>
                      </>
                    )}
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{pub.year}</span>
                  </div>

                  {/* Metrics & DOI */}
                  {pub.status === "published" && (
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                      {pub.metrics && (
                        <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {pub.metrics}
                        </span>
                      )}
                      {pub.doiUrl && (
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
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
