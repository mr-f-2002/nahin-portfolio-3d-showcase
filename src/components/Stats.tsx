const Stats = () => {
  const stats = [
    { value: "3+", label: "Years in research" },
    { value: "6", label: "Peer-reviewed works" },
    { value: "8+", label: "Projects shipped" },
    { value: "150+", label: "Students taught" },
  ];

  return (
    <section className="py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center p-6 border border-border rounded-lg">
            <p className="font-handwriting font-bold text-4xl text-primary mb-2">{s.value}</p>
            <p className="font-serif text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
