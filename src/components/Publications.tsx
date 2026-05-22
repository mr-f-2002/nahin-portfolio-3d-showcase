import { ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      authors:
        "N. F. Siddiqui, Z. S. Hoque, M. E. Haque, A. R. M. Kamal, A. Azad, S. A. Alyami, and M. A. Hossain",
      title:
        "SpectraNet: A lightweight hybrid time–frequency deep learning framework for sustainable cloud workload forecasting",
      journal: "Journal of Cloud Computing",
      volume: "vol. 14, no. 1, art. no. 75",
      year: "2025",
      doi: "10.1186/s13677-025-00815-z",
      doiUrl: "https://doi.org/10.1186/s13677-025-00815-z",
      metrics: "Q1 · IF 4.3",
      status: "published"
    },
    {
      authors:
        "N. F. Siddiqui, Z. S. Hoque, M. E. Haque, and M. A. Hossain",
      title:
        "SpectraDetect: A lightweight hybrid framework for proactive anomaly prediction in large-scale cloud computing",
      journal:
        "International Conference on Cloud Computing and Networking (CCCN 2026)",
      location: "Jeju, South Korea",
      year: "2026",
      status: "under_review"
    }
  ];

  return (
    <section
      id="publications"
      className="py-20 px-6 md:px-10 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            Publications
          </h2>

          <p className="font-handwriting text-xl text-muted-foreground">
            Contribution to lightweight and sustainable AI systems
          </p>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-10">

          {publications.map((pub, index) => (
            <div
              key={index}
              className="relative border-b border-border pb-8"
            >

              {/* INDEX */}
              <div className="absolute -left-10 top-0 font-handwriting text-2xl text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* TITLE */}
              <h3 className="font-handwriting font-bold text-3xl text-foreground mb-3 leading-snug">
                {pub.title}
              </h3>

              {/* AUTHORS */}
              <p className="font-serif text-base text-muted-foreground italic mb-4 max-w-3xl leading-relaxed">
                {pub.authors}
              </p>

              {/* JOURNAL INFO */}
              <p className="font-serif text-base text-muted-foreground mb-4">
                <span className="text-foreground italic">{pub.journal}</span>
                {pub.volume && <> · {pub.volume}</>}
                {pub.location && <> · {pub.location}</>}
                <> · {pub.year}</>
              </p>

              {/* METADATA / DOI / STATUS */}
              <div className="flex flex-wrap items-center gap-3">

                {pub.status === "published" ? (
                  pub.doiUrl && (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-handwriting text-sm text-primary flex items-center gap-2 border-b border-primary"
                    >
                      <ExternalLink size={14} />
                      DOI: {pub.doi}
                    </a>
                  )
                ) : (
                  <span
                    className={`font-handwriting text-sm px-3 py-1 border ${
                      pub.status === "under_review"
                        ? "border-border text-muted-foreground"
                        : "border-primary text-foreground"
                    }`}
                  >
                    {pub.status === "under_review"
                      ? "Under Review"
                      : "Accepted"}
                  </span>
                )}

                {pub.metrics && (
                  <span className="font-handwriting text-sm px-3 py-1 border border-border text-muted-foreground">
                    {pub.metrics}
                  </span>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Publications;
