import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-10 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            Education
          </h2>

          <p className="font-handwriting text-xl text-muted-foreground">
            Academic journey and qualifications
          </p>
        </div>

        {/* ===== PRIMARY DEGREE ===== */}
        <div className="p-6 md:p-8 mb-10">

          {/* TOP ROW */}
          <div className="flex items-center gap-3 mb-5">

            <div className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-primary">
              <GraduationCap size={16} />
            </div>

            <span className="font-handwriting text-sm text-muted-foreground">
              2021 – 2025
            </span>

          </div>

          {/* DEGREE TITLE */}
          <h3 className="font-handwriting font-bold text-3xl text-foreground mb-2">
            B.Sc. in Computer Science & Engineering
          </h3>

          <p className="font-serif text-base text-muted-foreground italic mb-4">
            Islamic University of Technology (IUT)
          </p>

          {/* DETAILS */}
          <div className="flex flex-wrap gap-3">

            <span className="font-handwriting text-sm px-3 py-1 border border-border text-muted-foreground">
              CGPA: 3.89 / 4.00
            </span>

            <span className="font-serif text-sm text-muted-foreground">
              Research: Lightweight ML · Cloud Forecasting
            </span>

          </div>
        </div>

        {/* ===== SECONDARY EDUCATION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* HSC */}
          <div className="p-6">

            <div className="flex items-center gap-3 mb-4">

              <div className="text-primary">
                <Award size={16} />
              </div>

              <span className="font-handwriting text-sm text-muted-foreground">
                2019 – 2020
              </span>

            </div>

            <h4 className="font-handwriting font-bold text-2xl text-foreground mb-1">
              Higher Secondary Certificate
            </h4>

            <p className="font-serif text-base text-muted-foreground italic mb-3">
              Gurudayal Govt. College
            </p>

            <span className="font-handwriting text-sm px-3 py-1 border border-border text-muted-foreground">
              GPA: 5.00 / 5.00
            </span>

          </div>

          {/* SSC */}
          <div className="p-6">

            <div className="flex items-center gap-3 mb-4">

              <div className="text-primary">
                <Award size={16} />
              </div>

              <span className="font-handwriting text-sm text-muted-foreground">
                2014 – 2019
              </span>

            </div>

            <h4 className="font-handwriting font-bold text-2xl text-foreground mb-1">
              Secondary School Certificate
            </h4>

            <p className="font-serif text-base text-muted-foreground italic mb-3">
              Kishoreganj Govt. Boys' High School
            </p>

            <span className="font-handwriting text-sm px-3 py-1 border border-border text-muted-foreground">
              GPA: 5.00 / 5.00
            </span>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
