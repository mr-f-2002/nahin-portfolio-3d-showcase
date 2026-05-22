import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/mr-f-2002", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nahin-f-siddiqui-a11871270/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nahin@cse.uiu.ac.bd", label: "Email" }
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
    <footer
      className="px-4 py-10 md:py-14"
      style={{
        background: 'hsl(214 35% 6%)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="w-full md:w-[82%] max-w-none mx-auto">

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center text-center gap-6">
          <div>
            <button
              onClick={() => scrollTo('home')}
              className="font-display font-bold text-xl transition-colors duration-300 hover:text-primary"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              <span style={{ color: 'var(--teal)' }}>N</span>ahin F. Siddiqui
            </button>
            <p className="font-body text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              Lecturer · Researcher · United International University
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <button
                  key={i}
                  onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'hsl(var(--card) / 0.5)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = 'var(--teal)';
                    el.style.borderColor = 'color-mix(in srgb, var(--teal) 50%, var(--border-color))';
                    el.style.background = 'var(--teal-faint)';
                    el.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = 'var(--text-secondary)';
                    el.style.borderColor = 'var(--border-color)';
                    el.style.background = 'hsl(var(--card) / 0.5)';
                    el.style.transform = 'scale(1)';
                  }}
                >
                  <Icon size={16} />
                </button>
              );
            })}
          </div>

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-body text-xs transition-colors duration-300 hover:text-primary"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground) / 0.6)' }}>
            © {currentYear} Nahin F. Siddiqui. All rights reserved.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="flex justify-between items-start mb-8">
            <div>
              <button
                onClick={() => scrollTo('home')}
                className="font-display font-bold text-xl transition-colors duration-300 hover:text-primary block"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                <span style={{ color: 'var(--teal)' }}>N</span>ahin F. Siddiqui
              </button>
              <p className="font-body text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                Lecturer · Researcher · United International University
              </p>
              <p className="font-mono text-xs mt-3 max-w-xs leading-relaxed" style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}>
                Building the next generation of lightweight AI for cloud computing.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <button
                    key={i}
                    onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ background: 'hsl(var(--card) / 0.5)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = 'var(--teal)';
                      el.style.borderColor = 'color-mix(in srgb, var(--teal) 50%, var(--border-color))';
                      el.style.background = 'var(--teal-faint)';
                      el.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = 'var(--text-secondary)';
                      el.style.borderColor = 'var(--border-color)';
                      el.style.background = 'hsl(var(--card) / 0.5)';
                      el.style.transform = 'scale(1)';
                    }}
                  >
                    <Icon size={15} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
            <p className="font-mono text-xs" style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}>
              © {currentYear} Nahin F. Siddiqui. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-body text-xs transition-colors duration-300 hover:text-primary"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
