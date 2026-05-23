import { BookOpen, Users, Presentation } from "lucide-react";

const Teaching = () => {
  const courses = [
    { code: "CSE 1111", title: "Structured Programming", level: "Undergraduate", sem: "Spring 2026" },
    { code: "CSE 2215", title: "Data Structures", level: "Undergraduate", sem: "Spring 2026" },
    { code: "CSE 3811", title: "Artificial Intelligence", level: "Undergraduate", sem: "Spring 2026" },
    { code: "CSE 4495", title: "Selected Topics: Efficient Deep Learning", level: "Senior elective", sem: "Fall 2026 (planned)" },
    { code: "CSE 2233", title: "Theory of Computation", level: "Undergraduate", sem: "Fall 2025 · EU" },
    { code: "CSE 3711", title: "Computer Networks Lab", level: "Undergraduate", sem: "Fall 2025 · EU" },
  ];

  const supervisions = [
    {
      title: "Lightweight transformer architectures for Bangla NER",
      students: "3 undergraduate thesis students",
      status: "Ongoing · 2026",
    },
    {
      title: "Energy-aware scheduling in serverless cloud workloads",
      students: "2 undergraduate thesis students",
      status: "Ongoing · 2026",
    },
    {
      title: "Topic modeling on Bangla long-form journalism",
      students: "1 capstone team (4 students)",
      status: "Completed · 2025",
    },
  ];

  const talks = [
    { title: "Why your model is too big — and what to do about it", venue: "UIU CSE Tech Talk", year: "2026" },
    { title: "RAG beyond chatbots: structured evaluation in education", venue: "Kernel AI Brown Bag", year: "2024" },
    { title: "Bangla NLP: where the public datasets fail us", venue: "IUT Research Day", year: "2024" },
  ];

  return (
    <>
      <section className="py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={20} className="text-primary" />
            <h2 className="font-handwriting font-bold text-4xl text-foreground">
              Courses taught
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((c, i) => (
              <div key={i} className="p-5 border border-border rounded-lg">
                <p className="font-mono text-xs text-primary mb-1">{c.code}</p>
                <h3 className="font-handwriting font-bold text-xl text-foreground">{c.title}</h3>
                <p className="font-serif text-sm text-muted-foreground mt-1">
                  {c.level} · {c.sem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users size={20} className="text-primary" />
            <h2 className="font-handwriting font-bold text-4xl text-foreground">
              Student supervision
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {supervisions.map((s, i) => (
              <div key={i} className="p-5 border border-border rounded-lg">
                <h3 className="font-handwriting font-bold text-xl text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="font-serif text-sm text-muted-foreground">
                  {s.students} · {s.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Presentation size={20} className="text-primary" />
            <h2 className="font-handwriting font-bold text-4xl text-foreground">
              Talks & invited lectures
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {talks.map((t, i) => (
              <div key={i} className="p-5 border border-border rounded-lg">
                <h3 className="font-handwriting font-bold text-xl text-foreground mb-1">
                  {t.title}
                </h3>
                <p className="font-serif text-sm text-muted-foreground">
                  {t.venue} · {t.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teaching;
