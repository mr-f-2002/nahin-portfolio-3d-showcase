import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/mr-f-2002", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nahin-f-siddiqui-a11871270/",
      label: "LinkedIn"
    },
    { icon: Mail, href: "mailto:nahin@cse.uiu.ac.bd", label: "Email" }
  ];

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Publications", id: "publications" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "portfolio" },
    { label: "Contact", id: "contact" }
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-14 px-6 md:px-10 lg:px-16 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-10">

          {/* IDENTITY */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollTo("home")}
              className="font-handwriting font-bold text-3xl text-foreground"
            >
              <span className="text-primary">N</span>ahin F. Siddiqui
            </button>

            <p className="font-serif text-sm text-muted-foreground mt-2">
              Lecturer · Researcher · United International University
            </p>
          </div>

          {/* SOCIAL LINKS (minimal row, no cards) */}
          <div className="flex items-center gap-6">

            {socialLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <button
                  key={index}
                  onClick={() =>
                    window.open(link.href, "_blank", "noopener,noreferrer")
                  }
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}

          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-border mb-8" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* COPYRIGHT */}
          <p className="font-serif text-xs text-muted-foreground">
            © {currentYear} Nahin F. Siddiqui. All rights reserved.
          </p>

          {/* NAV LINKS (inline academic style) */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-serif text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}

          </nav>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
