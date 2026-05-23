import { Award } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      year: "2025",
      title: "Dean's Honor List",
      org: "Islamic University of Technology",
      text: "Recognized for academic excellence in the final year of B.Sc. in CSE.",
    },
    {
      year: "2024",
      title: "OIC Scholarship",
      org: "Organization of Islamic Cooperation",
      text: "Full undergraduate scholarship for outstanding international academic performance.",
    },
    {
      year: "2023",
      title: "Best Undergraduate Project — CSE Fest",
      org: "IUT",
      text: "Awarded for the Libra anonymous study platform in the departmental project showcase.",
    },
    {
      year: "2022",
      title: "Finalist — National Hackathon",
      org: "BASIS SoftExpo",
      text: "Led a 4-member team to the top 10 in a 600+ team competition.",
    },
    {
      year: "2020",
      title: "Top 1% in HSC",
      org: "Dhaka Education Board",
      text: "Ranked in the top 1% nationally in Higher Secondary Certificate exams (Science).",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          Awards & Honors
        </h2>
        <div className="flex flex-col gap-5">
          {awards.map((a, i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-lg flex flex-col md:flex-row md:items-start gap-4"
            >
              <div className="w-10 h-10 border border-border rounded-md flex items-center justify-center text-primary shrink-0">
                <Award size={18} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                  <h3 className="font-handwriting font-bold text-2xl text-foreground">
                    {a.title}
                  </h3>
                  <span className="font-handwriting text-sm text-primary">{a.year}</span>
                </div>
                <p className="font-serif text-sm italic text-muted-foreground mb-2">
                  {a.org}
                </p>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  {a.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
