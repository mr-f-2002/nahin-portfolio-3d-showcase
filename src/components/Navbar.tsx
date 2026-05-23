import { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Teaching", href: "/teaching" },
  { name: "Contact", href: "/contact" },
];

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-border transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background'
      }`}
      style={{ height: 72 }}
    >
      <div className="w-[90%] mx-auto h-full flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-handwriting text-3xl text-primary font-bold">N</span>
          <span className="font-serif text-2xl text-foreground tracking-wide">ahin</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `font-handwriting text-lg transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <Sun size={16} />
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <Sun size={16} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-muted-foreground"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-handwriting text-lg py-2 border-b border-border/50 ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
