import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light');
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Publications", href: "#publications" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-border transition-all duration-300 ${isScrolled
          ? 'bg-background/80 backdrop-blur-md'
          : 'bg-background'
        }`}
      style={{ height: 72 }}
    >
      <div className="w-[85%] mx-auto h-full flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1">
          <span className="font-handwriting text-3xl text-primary font-bold">
            N
          </span>
          <span className="font-serif text-2xl text-foreground tracking-wide">
            ahin
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-handwriting text-lg text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Theme button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <Sun size={16} />
          </button>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <Sun size={16} />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-muted-foreground"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-handwriting text-lg text-muted-foreground hover:text-foreground py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
