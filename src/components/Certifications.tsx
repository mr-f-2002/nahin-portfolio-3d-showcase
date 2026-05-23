import { BadgeCheck } from "lucide-react";

const Certifications = () => {
  const items = [
    { title: "Deep Learning Specialization", org: "DeepLearning.AI · Coursera", year: "2024" },
    { title: "Machine Learning with Python", org: "IBM", year: "2023" },
    { title: "TensorFlow Developer Professional", org: "Google", year: "2023" },
    { title: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", year: "2024" },
    { title: "Database Systems", org: "Stanford Online", year: "2022" },
    { title: "Effective Teaching Strategies", org: "UIU Faculty Dev. Program", year: "2026" },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((c, i) => (
            <div
              key={i}
              className="p-5 border border-border rounded-lg flex items-start gap-3"
            >
              <BadgeCheck size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-handwriting font-bold text-lg text-foreground">
                  {c.title}
                </h3>
                <p className="font-serif text-sm text-muted-foreground">
                  {c.org} · {c.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
