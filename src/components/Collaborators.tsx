const Collaborators = () => {
  const people = [
    { name: "Dr. Md. Hasanul Kabir", role: "Professor · IUT", area: "Computer Vision · Pattern Recognition" },
    { name: "Dr. Abu Raihan M. Kamal", role: "Professor · IUT", area: "Data Science · Information Retrieval" },
    { name: "Dr. Sumon Ahmed", role: "Associate Professor · UIU", area: "Machine Learning · Bioinformatics" },
    { name: "Engr. Tanjila Farah", role: "Research Engineer · Kernel Technologies", area: "Applied NLP · LLM Systems" },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          Collaborators & mentors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {people.map((p, i) => (
            <div key={i} className="p-5 border border-border rounded-lg">
              <h3 className="font-handwriting font-bold text-xl text-foreground">{p.name}</h3>
              <p className="font-serif text-sm text-muted-foreground">{p.role}</p>
              <p className="font-serif text-sm italic text-muted-foreground mt-1">{p.area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
