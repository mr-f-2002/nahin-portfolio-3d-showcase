const Tools = () => {
  const groups = [
    {
      title: "Languages",
      items: ["Python", "C++", "Java", "JavaScript / TypeScript", "Kotlin", "SQL"],
    },
    {
      title: "ML & Research",
      items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "BERTopic", "Weights & Biases"],
    },
    {
      title: "Systems & Cloud",
      items: ["Docker", "Linux", "AWS Lambda", "Firebase", "Nginx", "Redis"],
    },
    {
      title: "Daily drivers",
      items: ["Neovim", "VS Code", "Obsidian", "Zotero", "Notion", "Git"],
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          Tools I reach for
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <div key={i} className="p-6 border border-border rounded-lg">
              <h3 className="font-handwriting font-bold text-xl text-foreground mb-4">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it, j) => (
                  <span
                    key={j}
                    className="font-mono text-xs px-3 py-1.5 border border-border text-muted-foreground rounded"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
