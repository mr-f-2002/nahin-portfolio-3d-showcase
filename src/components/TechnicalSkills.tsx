import { Code, Database, Globe, Brain } from "lucide-react";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "Kotlin"]
    },
    {
      category: "Machine Learning & AI",
      icon: Brain,
      skills: ["PyTorch", "TensorFlow", "Pandas / NumPy", "RAG"]
    },
    {
      category: "Web & Mobile",
      icon: Globe,
      skills: ["React", "Node.js", "React Native", "HTML / CSS"]
    },
    {
      category: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Git", "Docker"]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-10 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            Technical Skills
          </h2>

          <p className="font-handwriting text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="p-6"
            >

              {/* HEADER */}
              <div className="mb-5">

                <div className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-primary mb-3">
                  <cat.icon size={16} />
                </div>

                <h3 className="font-handwriting font-bold text-xl text-foreground">
                  {cat.category}
                </h3>

              </div>

              {/* SKILLS */}
              <ul className="space-y-2">
                {cat.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-serif text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
