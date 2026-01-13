import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code2 } from 'lucide-react';

interface ResearchWork {
  id: number;
  title: string;
  journal: string;
  date: string;
  description: string;
  status: string;
  authors: string[];
  keywords: string[];
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      elementsRef.current = [];
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    elementsRef.current[index] = el;
  };

  const researchWorks: ResearchWork[] = [
    // {
    //   id: 1,
    //   title: "SpectraNet: A Lightweight Hybrid Time–Frequency Deep Learning Framework for Sustainable Cloud Workload Forecasting",
    //   journal: "Journal of Cloud Computing",
    //   date: "11 December, 2025",
    //   description: "Researching efficient resource allocation model for cloud computing environments using predictive analytics and machine learning techniques.",
    //   status: "Accepted",
    //   authors: ["Nahin F. Siddiqui, Zarif Safwan Hoque, Md. Ehsanul Haque, Abu Raihan Mostofa Kamal, A. K. M. Azad, Salem A. Alyami, Md Azam Hossain"],
    //   keywords: ["Cloud Computing, Sustainable Resource Management, CPU Workload Forecasting, Time-Frequency Analysis, Hybrid Deep Learning Models, Lightweight AI Models"]
    // }
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      role: "AI Engineering Intern",
      company: "Kernel Technologies Limited",
      period: "June 2024 - September 2024",
      description: "Developed an AI-powered viva system for medical students using Retrieval Augmented Generation (RAG) for textbook-based viva questions and feedback.",
      responsibilities: [
        "Implemented RAG models to generate context-relevant questions from medical textbooks",
        "Created a feedback system that evaluates student answers based on key concepts",
        "Optimized the system to handle various medical specialties and textbooks",
        "Collaborated with medical subject matter experts to ensure accurate content generation"
      ],
      technologies: ["AI", "RAG", "NLP", "Python", "PyTorch", "FastAPI"]
    },
    {
      id: 2,
      role: "Event Management Team Member",
      company: "ICPC Regional Programming Contest – University Chapter",
      period: "October 2023",
      description: "Assisted in organizing and managing the ICPC regional programming contest hosted at the university.",
      responsibilities: [
        "Coordinated logistics and participant management",
        "Worked with the tech team to ensure system readiness",
        "Contributed to event planning, scheduling, and execution"
      ],
      technologies: ["Teamwork", "Event Planning", "Leadership", "Communication"]
    },
    {
      id: 3,
      role: "Private Tutor (SSC Level)",
      company: "Self-employed",
      period: "March 2023 - August 2023",
      description: "Provided academic support to an SSC-level student in science subjects.",
      responsibilities: [
        "Explained complex topics in physics and mathematics in an understandable way",
        "Designed personalized lesson plans and mock tests",
        "Helped improve the student's academic performance significantly"
      ],
      technologies: ["Communication", "Mentorship", "Subject Mastery"]
    },
    {
      id: 4,
      role: "Private Tutor (HSC Level)",
      company: "Self-employed",
      period: "July 2023 - February 2024",
      description: "Tutored an HSC-level student in science disciplines for university admission preparation.",
      responsibilities: [
        "Taught advanced concepts in physics and mathematics",
        "Monitored progress and adapted teaching style based on performance",
        "Prepared custom study materials for efficiency and retention"
      ],
      technologies: ["Communication", "Curriculum Design", "Problem Solving"]
    }
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-24 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto max-w-[90%] xl:max-w-[1400px] px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Research & Work Experience
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining innovation, research, and practical expertise
          </p>
        </div>

        {/* Research Works Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Research Works
            </h3>
          </div>
          {/* <div className="space-y-6">
            {researchWorks.map((research, index) => (
              <Card
                key={research.id}
                ref={(el) => addToRefs(el, index)}
                className={`transform transition-all duration-700 border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 opacity-0 translate-y-8 group`}
              >
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {research.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{research.journal}</p>
                    </div>
                    <div className="text-right flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground">{research.date}</span>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs px-2 py-0.5"
                      >
                        {research.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {research.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm mb-3">
                    <span className="font-semibold">Authors:</span>
                    <span>{research.authors.join(", ")}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {research.keywords.map((keyword, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Professional Experience
            </h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.id}
                ref={(el) => addToRefs(el, index + researchWorks.length)}
                className={`transform transition-all duration-700 border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 opacity-0 translate-y-8 group`}
              >
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {exp.description}
                  </p>
                  <h5 className="text-sm font-medium text-primary mb-2">Key Responsibilities:</h5>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-muted-foreground">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;