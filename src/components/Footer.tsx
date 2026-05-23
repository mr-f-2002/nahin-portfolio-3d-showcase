import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/mr-f-2002", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nahin-f-siddiqui-a11871270/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nahin@cse.uiu.ac.bd", label: "Email" }
  ];

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Research", to: "/research" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Skills", to: "/skills" },
    { label: "Teaching", to: "/teaching" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <footer className="py-14 px-6 md:px-10 lg:px-16 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-10">
          <div className="text-center md:text-left">
            <Link to="/" className="font-handwriting font-bold text-3xl text-foreground">
              <span className="text-primary">N</span>ahin F. Siddiqui
            </Link>
            <p className="font-serif text-sm text-muted-foreground mt-2">
              Lecturer · Researcher · United International University
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="w-full h-px bg-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-serif text-xs text-muted-foreground">
            © {currentYear} Nahin F. Siddiqui. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-serif text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
