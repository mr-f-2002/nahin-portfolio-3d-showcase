import { Briefcase, FlaskConical } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Lecturer",
      company: "United International University",
      department: "Department of Computer Science & Engineering",
      period: "Feb 2026 – Present",
      type: "academic",
      current: true,
      description:
        "Delivering undergraduate CSE courses while conducting research in lightweight deep learning and cloud computing.",
      responsibilities: [
        "Teaching core CSE courses and labs",
        "Designing academic materials and assessments",
        "Supervising student research projects",
        "Research in efficient deep learning systems",
        "Departmental academic contributions"
      ]
    },
    {
      role: "Lecturer",
      company: "Eastern University",
      department: "Department of Computer Science & Engineering",
      period: "Oct 2025 – Feb 2026",
      type: "academic",
      current: false,
      description:
        "Started academic career immediately after graduation, focusing on undergraduate teaching and research exposure.",
      responsibilities: [
        "Conducted lectures and lab sessions",
        "Prepared coursework and evaluations",
        "Mentored undergraduate students",
        "Research in cloud and ML systems"
      ]
    },
    {
      role: "AI Engineering Intern",
      company: "Kernel Technologies Limited",
      department: "",
      period: "Jun 2024 – Sep 2024",
      type: "industry",
      current: false,
      description:
        "Worked on an AI-powered viva system using Retrieval-Augmented Generation (RAG) for medical education.",
      responsibilities: [
        "Built RAG pipelines for question generation",
        "Developed answer evaluation system",
        "Optimized multi-domain medical QA system",
        "Collaborated with domain experts"
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-10 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            Experience
          </h2>

          <p className="font-handwriting text-xl text-muted-foreground">
            Academic journey and professional growth
          </p>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 md:p-8"
            >

              {/* TOP ROW: ICON + META */}
              <div className="flex items-center gap-3 mb-5">

                <div className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-primary">
                  {exp.type === "academic" ? (
                    <FlaskConical size={16} />
                  ) : (
                    <Briefcase size={16} />
                  )}
                </div>

                <span className="font-handwriting text-sm text-muted-foreground">
                  {exp.period}
                </span>

                {exp.current && (
                  <span className="font-handwriting text-sm px-3 py-1 border border-primary text-foreground">
                    Current
                  </span>
                )}

              </div>

              {/* TWO COLUMN LAYOUT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div>
                  <h3 className="font-handwriting font-bold text-3xl text-foreground mb-2">
                    {exp.role}
                  </h3>

                  <p className="font-serif text-base text-muted-foreground mb-1">
                    {exp.company}
                  </p>

                  {exp.department && (
                    <p className="font-serif text-sm italic text-muted-foreground mb-4">
                      {exp.department}
                    </p>
                  )}

                  <p className="font-serif text-base text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div>
                  <p className="font-handwriting text-lg text-muted-foreground mb-4">
                    Responsibilities
                  </p>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex gap-3 font-serif text-base text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
