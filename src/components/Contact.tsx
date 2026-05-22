import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nahin@cse.uiu.ac.bd",
      link: "mailto:nahin@cse.uiu.ac.bd"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1924-509192",
      link: "tel:+8801924509192"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "nahin-f-siddiqui",
      link: "https://www.linkedin.com/in/nahin-f-siddiqui-a11871270/"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "mr-f-2002",
      link: "https://github.com/mr-f-2002"
    }
  ];

  const handleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-handwriting font-bold text-5xl text-foreground mb-3">
            Get In Touch
          </h2>
          <p className="font-handwriting text-xl text-muted-foreground">
            Academic collaborations & professional inquiries
          </p>
        </div>

        {/* CONTACT STRIP */}
        <div className="flex flex-col md:flex-row items-stretch">

          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <div
                key={index}
                onClick={() => handleClick(info.link)}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-6 cursor-pointer hover:bg-muted/20 transition"
              >

                <Icon size={16} className="text-primary" />

                <div className="text-center md:text-left">
                  <p className="font-handwriting font-bold text-foreground text-base">
                    {info.title}
                  </p>
                  <p className="font-serif text-sm text-muted-foreground">
                    {info.value}
                  </p>
                </div>

                {/* DIVIDER (except last item) */}
                {index !== contactInfo.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-border ml-6" />
                )}

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Contact;
