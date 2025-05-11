
import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
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
  
  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2018 - 2022",
      achievements: ["CGPA: 3.9/4.0", "Research in Resource Provisioning and Forecasting in Cloud"]
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Dhaka College",
      year: "2016 - 2018",
      achievements: ["Excellent academic performance"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Dhanmondi Government Boys' High School",
      year: "2014 - 2016",
      achievements: ["Strong foundation in science and mathematics"]
    }
  ];
  
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "Kotlin"]
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "RAG"]
    },
    {
      category: "Web & Mobile Development",
      skills: ["React", "Node.js", "Express", "React Native", "HTML/CSS"]
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "Firebase"]
    }
  ];
  
  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 px-4 bg-secondary/30 animate-on-scroll"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div ref={addToRefs} className="animate-on-scroll animate-delay-100">
            <h3 className="section-subheading">Who I Am</h3>
            <p className="mb-6 text-lg">
              I'm a Computer Science and Engineering graduate with a passion for academic 
              excellence, machine learning, and software development. My academic journey has 
              equipped me with a strong foundation in both theoretical concepts and practical skills.
            </p>
            <p className="mb-6">
              With a CGPA of 3.9, I've demonstrated a commitment to learning and mastering complex 
              technical concepts. My research focuses on resource provisioning and forecasting in 
              cloud environments, where I apply innovative methods to solve real-world problems.
            </p>
            <p>
              I'm driven by the desire to implement innovative methods and create unique products 
              that can make a difference. Whether it's developing software applications or conducting 
              research, I approach each project with enthusiasm and dedication.
            </p>
          </div>
          
          <div ref={addToRefs} className="animate-on-scroll animate-delay-200">
            <h3 className="section-subheading">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="p-6 bg-card rounded-lg shadow-md card-hover">
                  <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.institution} | {edu.year}</p>
                  <ul className="list-disc list-inside text-sm">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-primary">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div ref={addToRefs} className="animate-on-scroll animate-delay-300">
          <h3 className="section-subheading">My Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h4 className="font-bold text-lg mb-4 text-primary">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
