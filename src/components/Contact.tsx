import { useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const contactInfo = [
    { icon: Mail, title: "Academic Email", value: "nahin@cse.uiu.ac.bd", link: "mailto:nahin@cse.uiu.ac.bd", note: "Preferred for academic enquiries" },
    { icon: Phone, title: "Phone", value: "+880 1924-509192", link: "tel:+8801924509192", note: null },
    { icon: Linkedin, title: "LinkedIn", value: "nahin-f-siddiqui", link: "https://www.linkedin.com/in/nahin-f-siddiqui-a11871270/", note: null },
    { icon: Github, title: "GitHub", value: "mr-f-2002", link: "https://github.com/mr-f-2002", note: null },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 px-4 relative animate-on-scroll">
      <div className="w-full md:w-[82%] max-w-none mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex justify-center">
            <span className="section-chip">Let's Talk</span>
          </div>
          <h2 className="section-title mb-3">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto px-2">
            Open to research collaborations, academic enquiries, and professional connections
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-center text-sm md:text-base leading-relaxed mb-8 md:mb-10 px-2"
            style={{ color: 'var(--text-secondary)' }}>
            If you are a researcher, fellow academic, or student interested in
            collaboration, feel free to reach out via email — it is the most
            reliable way to get in touch. I am particularly open to discussions
            around lightweight deep learning, cloud computing, and NLP research.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  onClick={() => window.open(info.link, '_blank', 'noopener,noreferrer')}
                  className="subtle-card group cursor-pointer p-4 md:p-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-box w-10 h-10 shrink-0">
                      <Icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors duration-300"
                        style={{ color: 'hsl(var(--foreground))' }}>
                        {info.title}
                      </h4>
                      <p className="font-mono text-xs break-all" style={{ color: 'var(--text-secondary)' }}>
                        {info.value}
                      </p>
                      {info.note && (
                        <p className="font-mono text-xs mt-1" style={{ color: 'var(--teal)', opacity: 0.8 }}>
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
