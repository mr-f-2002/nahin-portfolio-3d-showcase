import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light');
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Publications", href: "#publications" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        padding: isScrolled ? '10px 0' : '18px 0',
        background: isScrolled ? 'hsl(var(--background) / 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div className="container mx-auto px-5 md:px-6 flex justify-between items-center min-h-[48px]">

        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl flex items-center gap-0.5 group" style={{ textDecoration: 'none' }}>
          <span className="transition-all duration-300 group-hover:scale-110" style={{ color: 'var(--teal)' }}>N</span>
          <span className="transition-colors duration-300" style={{ color: 'hsl(var(--foreground))' }}>ahin</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'hsl(var(--card) / 0.5)',
              border: '1px solid var(--border-color)',
              color: 'var(--teal)',
            }}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: 'hsl(var(--card) / 0.5)',
              border: '1px solid var(--border-color)',
              color: 'var(--teal)',
            }}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: 'hsl(var(--card) / 0.5)',
              border: '1px solid var(--border-color)',
              color: 'hsl(var(--foreground))',
            }}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden animate-fadeIn"
          style={{
            background: 'hsl(var(--card) / 0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border-color)',
          }}
        >
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-body text-base py-3 px-3 rounded-lg flex items-center gap-3 transition-all duration-200"
                style={{
                  color: 'hsl(var(--foreground) / 0.8)',
                  minHeight: '52px',
                  borderBottom: '1px solid var(--border-color)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--teal)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--teal-faint)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'hsl(var(--foreground) / 0.8)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--teal)', opacity: 0.6 }}></span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
