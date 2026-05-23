const Workflow = () => {
  const steps = [
    {
      n: "01",
      title: "Read first, code later",
      text: "Every new project starts with a focused literature sweep and a one-page problem brief before any code is written.",
    },
    {
      n: "02",
      title: "Smallest honest baseline",
      text: "Build the dumbest possible model that solves the task end-to-end. It is almost always more competitive than expected.",
    },
    {
      n: "03",
      title: "Measure, then optimize",
      text: "Profile latency, memory, and energy on the target hardware before adding any clever architectural tricks.",
    },
    {
      n: "04",
      title: "Write it like a paper",
      text: "Notes, plots, and ablations land in a draft from day one. Writing forces clarity that code alone never does.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          How I work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-6 border border-border rounded-lg">
              <p className="font-mono text-sm text-primary mb-2">{s.n}</p>
              <h3 className="font-handwriting font-bold text-xl text-foreground mb-2">
                {s.title}
              </h3>
              <p className="font-serif text-base text-muted-foreground leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
