import { useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
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

    if (contactRef.current) observer.observe(contactRef.current);
    elementsRef.current.forEach((el) => { if (el) observer.observe(el); });

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
      elementsRef.current.forEach((el) => { if (el) observer.unobserve(el); });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Academic Email",
      value: "nahin@cse.uiu.ac.bd",
      link: "mailto:nahin@cse.uiu.ac.bd",
      note: "Preferred for academic enquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1924-509192",
      link: "tel:+8801924509192",
      note: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "nahin-f-siddiqui",
      link: "https://www.linkedin.com/in/nahin-f-siddiqui-a11871270/",
      note: null
    },
    {
      icon: Github,
      title: "GitHub",
      value: "mr-f-2002",
      link: "https://github.com/mr-f-2002",
      note: null
    }
  ];

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 px-4 relative animate-on-scroll"
    >
      <div className="w-[80%] max-w-none mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to research collaborations, academic enquiries, and professional connections
          </p>
        </div>

        <div ref={addToRefs} className="animate-on-scroll max-w-2xl mx-auto">
          <p className="text-center text-muted-foreground leading-relaxed mb-10">
            If you are a researcher, fellow academic, or student interested in
            collaboration, feel free to reach out via email — it is the most
            reliable way to get in touch. I am particularly open to discussions
            around lightweight deep learning, cloud computing, and NLP research.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(info.link)}
                  className="group cursor-pointer bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-0.5">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground break-all">
                        {info.value}
                      </p>
                      {info.note && (
                        <p className="text-xs text-primary/70 mt-1">
                          {info.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;