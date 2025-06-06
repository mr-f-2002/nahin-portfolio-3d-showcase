
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
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
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const researchWorks = [
    // {
    //   id: 1,
    //   title: "Resource Allocation Optimization in Cloud Computing",
    //   journal: "International Journal of Cloud Computing",
    //   date: "June 2023 - Present",
    //   description: "Researching efficient resource allocation algorithms for cloud computing environments using predictive analytics and machine learning techniques.",
    //   status: "Ongoing",
    //   authors: ["Nahin Ahmed", "Dr. John Smith", "Dr. Emily Taylor"],
    //   keywords: ["Cloud Computing", "Resource Allocation", "Machine Learning", "Optimization"]
    // },
    // {
    //   id: 2,
    //   title: "Bangla Text Classification Using Deep Learning",
    //   journal: "Journal of Natural Language Processing",
    //   date: "March 2023 - December 2023",
    //   description: "Developed a novel approach for Bangla text classification using transformer-based models, achieving 92% accuracy on benchmark datasets.",
    //   status: "Published",
    //   authors: ["Nahin Ahmed", "Dr. Sarah Johnson"],
    //   keywords: ["NLP", "Bangla Language", "Text Classification", "Deep Learning"]
    // },
    // {
    //   id: 3,
    //   title: "Performance Analysis of RAG Models in Medical Education",
    //   journal: "AI in Education Conference",
    //   date: "January 2024 - Present",
    //   description: "Analyzing the effectiveness of Retrieval Augmented Generation models in medical education scenarios, with focus on knowledge retention and accuracy.",
    //   status: "Under Review",
    //   authors: ["Nahin Ahmed", "Dr. Robert Chen", "Dr. Lisa Wong"],
    //   keywords: ["RAG", "Medical Education", "Knowledge Assessment", "AI"]
    // }
  ];

  const experiences = [
    {
      id: 1,
      role: "AI Engineering Intern",
      company: "Kernel Technologies Limited",
      period: "June 2024 - September 2024",
      description:
        "Developed an AI-powered viva system for medical students using Retrieval Augmented Generation (RAG) for textbook-based viva questions and feedback.",
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
      description:
        "Assisted in organizing and managing the ICPC regional programming contest hosted at the university.",
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
      description:
        "Provided academic support to an SSC-level student in science subjects.",
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
      description:
        "Tutored an HSC-level student in science disciplines for university admission preparation.",
      responsibilities: [
        "Taught advanced concepts in physics and mathematics",
        "Monitored progress and adapted teaching style based on performance",
        "Prepared custom study materials for efficiency and retention"
      ],
      technologies: ["Communication", "Curriculum Design", "Problem Solving"]
    },
  ];

  const researchInterests = [
    "Cloud Computing Resource Optimization",
    "Natural Language Processing in Education",
    "Retrieval Augmented Generation",
    "Machine Learning for Healthcare",
    "Bangla Language Processing"
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 px-4 bg-secondary/30 animate-on-scroll"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">Research & Work Experience</h2>

        {/* Research Works Section */}
        <div ref={addToRefs} className="mb-16 animate-on-scroll animate-delay-100">
          <h3 className="section-subheading mb-6">Research Works</h3>
          <div className="space-y-8">
            {researchWorks.map((research) => (
              <Card key={research.id} className="card-hover">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-primary">{research.title}</CardTitle>
                      <CardDescription className="text-lg font-medium">{research.journal}</CardDescription>
                    </div>
                    <div className="text-right flex flex-col">
                      <span className="text-sm text-muted-foreground">{research.date}</span>
                      <span className="mt-1 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                        {research.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{research.description}</p>
                  <div className="flex items-center gap-1 text-sm mb-3">
                    <span className="font-semibold">Authors:</span>
                    <span>{research.authors.join(", ")}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {research.keywords.map((keyword, i) => (
                      <span key={i} className="bg-secondary px-3 py-1 rounded-full text-xs">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="grid md:grid-cols-1 gap-12 mb-16">
          <div>
            <div ref={addToRefs} className="animate-on-scroll animate-delay-200">
              <h3 className="section-subheading">Professional Experience</h3>

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <Card key={exp.id} className="card-hover">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-primary">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="bg-secondary px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
