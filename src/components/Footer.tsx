import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mr-f-2002",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nahin-f-siddiqui-a11871270/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:nahin@cse.uiu.ac.bd",
      label: "Email"
    }
  ];

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Publications", id: "publications" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="w-[80%] max-w-none mx-auto">

        {/* Top row: Name + Social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <button
              onClick={() => scrollTo('home')}
              className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="text-primary">N</span>ahin F. Siddiqui
            </button>
            <p className="text-sm text-muted-foreground mt-1">
              Lecturer · Researcher · United International University
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <button
                  key={index}
                  onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                  aria-label={link.label}
                  className="w-9 h-9 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {currentYear} Nahin F. Siddiqui. All rights reserved.
          </p>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
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