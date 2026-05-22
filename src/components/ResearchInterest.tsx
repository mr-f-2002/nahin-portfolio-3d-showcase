import { Telescope } from "lucide-react";

const ResearchInterest = () => {
  const researchInterests = [
    {
      topic: "Cloud Resource Provisioning Optimisation",
      note: "Core research area — published Q1 work"
    },
    {
      topic: "Lightweight & Sustainable AI Architectures",
      note: "Core research area — published Q1 work"
    },
    {
      topic: "Proactive Anomaly Detection in Cloud Systems",
      note: "Active — conference paper accepted (CCCN 2026)"
    },
    {
      topic: "Retrieval-Augmented Generation (RAG) Systems",
      note: "Exploratory direction"
    },
    {
      topic: "Bangla Language Processing",
      note: "Exploratory direction"
    }
  ];

  return (
    <section
      id="research"
      className="py-20 px-6 md:px-10 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="font-handwriting text-xl text-muted-foreground mb-2">
            Academic direction
          </p>

          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            Research Interests
          </h2>

          <div className="w-16 h-px bg-border mx-auto" />
        </div>

        {/* INTEREST LIST */}
        <div>

          {researchInterests.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 px-6 py-2"
            >

              {/* DOT */}
              <div className="mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="font-handwriting font-bold text-xl text-foreground mb-1">
                  {item.topic}
                </h3>
              </div>

            </div>
          ))}

        </div>

        {/* VISION BLOCK */}
        <div className="p-6 md:p-8">

          <div className="flex items-center gap-3 mb-4">
            <Telescope size={18} className="text-primary" />

            <h4 className="font-handwriting font-bold text-2xl text-foreground">
              Research Vision
            </h4>
          </div>

          <p className="font-serif text-base text-muted-foreground leading-relaxed max-w-4xl">
            My near-term goal is to deepen my work on sustainable, resource-efficient AI
            for cloud environments — building on my published research in lightweight
            hybrid architectures. In parallel, I am expanding into retrieval-augmented
            generation systems and Bangla language processing, where I see meaningful
            open problems. Long-term, I aim to establish an independent research line and
            contribute to the academic community through publications, collaboration, and
            graduate supervision.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ResearchInterest;
