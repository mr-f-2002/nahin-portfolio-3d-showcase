const OngoingResearch = () => {
  const projects = [
    {
      title: "Sub-100M parameter Bangla language models",
      status: "Active · 2026 –",
      text: "Designing distilled transformer variants for Bangla that run on commodity GPUs and edge devices without sacrificing downstream accuracy.",
      tags: ["NLP", "Bangla", "Model Compression"],
    },
    {
      title: "Energy-aware scheduling for serverless ML inference",
      status: "Active · 2025 –",
      text: "Investigating cold-start mitigation and carbon-aware placement policies for short-lived inference workloads.",
      tags: ["Cloud", "Serverless", "Green Computing"],
    },
    {
      title: "Retrieval-Augmented evaluation for medical education",
      status: "Wrapping up · 2024 –",
      text: "Building structured RAG pipelines that generate and grade clinical viva questions, extending earlier industry work.",
      tags: ["RAG", "LLM", "Healthcare"],
    },
    {
      title: "Topic dynamics in Bangla long-form journalism",
      status: "Manuscript in prep · 2025",
      text: "Studying how Bangla newspaper topic distributions evolve over a decade using BERTopic and temporal modelling.",
      tags: ["NLP", "Topic Modelling"],
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          Ongoing research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-6 border border-border rounded-lg">
              <p className="font-handwriting text-sm text-primary mb-1">{p.status}</p>
              <h3 className="font-handwriting font-bold text-2xl text-foreground mb-3">
                {p.title}
              </h3>
              <p className="font-serif text-base text-muted-foreground leading-relaxed mb-4">
                {p.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <span
                    key={j}
                    className="font-handwriting text-xs px-2.5 py-1 border border-border text-muted-foreground rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default OngoingResearch;
