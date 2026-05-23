const Values = () => {
  const values = [
    {
      title: "Rigor over hype",
      text: "Honest baselines, reproducible code, and clear writing matter more than the trend of the week.",
    },
    {
      title: "Efficient by design",
      text: "Models should respect the devices, energy budgets, and bandwidth of the people who actually use them.",
    },
    {
      title: "Teaching is research",
      text: "Explaining an idea to a first-year student is the truest test of whether I understand it myself.",
    },
    {
      title: "Local matters",
      text: "Bangla and other low-resource languages deserve first-class tools, not afterthoughts.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          What I care about
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 border border-border rounded-lg">
              <h3 className="font-handwriting font-bold text-2xl text-foreground mb-2">
                {v.title}
              </h3>
              <p className="font-serif text-base text-muted-foreground leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
