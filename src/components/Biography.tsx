const Biography = () => {
  const story = [
    {
      year: "2002",
      title: "Born in Dhaka",
      text: "Grew up curious about machines that think — disassembling radios long before writing code.",
    },
    {
      year: "2019",
      title: "Entered IUT",
      text: "Joined the Department of Computer Science & Engineering at Islamic University of Technology with a fascination for algorithms and intelligent systems.",
    },
    {
      year: "2022",
      title: "First Research Project",
      text: "Began undergraduate research on Bangla NLP and lightweight deep learning architectures with peers.",
    },
    {
      year: "2024",
      title: "AI Engineering Intern",
      text: "Built RAG-based educational systems for medical training at Kernel Technologies Limited.",
    },
    {
      year: "2025",
      title: "Graduated & Started Teaching",
      text: "Completed B.Sc. in CSE from IUT; began academic career as a lecturer at Eastern University.",
    },
    {
      year: "2026",
      title: "Lecturer at UIU",
      text: "Joined United International University to teach, mentor, and lead research in efficient ML systems.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-handwriting font-bold text-4xl text-foreground mb-4">
            A short biography
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            I am an early-career academic with a quiet obsession for making
            machine intelligence smaller, faster, and more useful in places
            where compute is scarce. My work sits at the intersection of
            deep learning, cloud systems, and natural language processing —
            with a particular interest in low-resource languages like Bangla.
            Outside the lab and the lecture hall, I read history, drink
            entirely too much tea, and try to be a patient teacher.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-8">
            {story.map((s, i) => (
              <div key={i} className="relative pl-12">
                <span className="absolute left-2 top-2 w-5 h-5 rounded-full border-2 border-primary bg-background" />
                <p className="font-handwriting text-sm text-primary mb-1">{s.year}</p>
                <h3 className="font-handwriting font-bold text-xl text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
