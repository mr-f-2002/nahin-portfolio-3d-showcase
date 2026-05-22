import { useRef } from 'react';
import { ArrowRight, Download, GraduationCap, Building2 } from 'lucide-react';

const Hero = () => {
  const highlights = [
    { icon: Building2, label: "Lecturer at UIU" },
    { icon: GraduationCap, label: "IUT Graduate, 2025" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-5 md:px-4 overflow-hidden"
    >
      {/* Spotlight */}
      <div className="hero-spotlight" />

      {/* Subtle blob accents — desktop only */}
      <div className="hidden md:block absolute right-0 top-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)' }} />
      <div className="hidden md:block absolute left-0 bottom-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.04) 0%, transparent 70%)' }} />

      <div className="w-full md:w-[82%] max-w-none mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">

          {/* ── Text content ── */}
          <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">

            {/* Role badge */}
            <div className="hero-badge flex justify-center md:justify-start mb-6">
              <span className="section-chip">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--teal)' }}></span>
                Lecturer &amp; Researcher · CSE
              </span>
            </div>

            {/* Greeting */}
            <p className="hero-greeting font-body text-xl md:text-2xl mb-2" style={{ color: 'var(--text-secondary)' }}>
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="hero-name font-display font-bold mb-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              <span className="gradient-text">Nahin F. Siddiqui</span>
              <div className="teal-divider mt-3 mx-auto md:mx-0"></div>
            </h1>

            {/* Subtitle */}
            <h2 className="hero-subtitle font-body text-base md:text-lg mb-6 mt-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Lecturer, Dept. of CSE · United International University
            </h2>

            {/* Bio */}
            <p className="hero-bio font-body text-sm md:text-base max-w-lg mx-auto md:mx-0 leading-relaxed mb-8" style={{ color: 'hsl(var(--foreground) / 0.75)' }}>
              Computer Science graduate of Islamic University of Technology, now
              contributing to academia as a full-time lecturer and researcher.
              My work focuses on lightweight deep learning and cloud computing —
              with a long-term commitment to research and teaching.
            </p>

            {/* Highlight chips */}
            <div className="hero-chips flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-8 md:mb-10 items-center md:items-start justify-center md:justify-start">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-body"
                  style={{
                    background: 'hsl(var(--card) / 0.7)',
                    border: '1px solid var(--border-color)',
                    color: 'hsl(var(--foreground) / 0.85)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <item.icon size={14} style={{ color: 'var(--teal)' }} className="shrink-0" />
                  <span className="font-mono text-xs">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row flex-wrap gap-3 w-full">
              <a href="#publications" className="btn-primary w-full sm:w-auto">
                View Publications <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline w-full sm:w-auto">
                Contact Me
              </a>
              <a href="/assets/cv.pdf" download className="btn-outline w-full sm:w-auto">
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center mb-4 md:mb-0">
            <div className="hero-photo relative">
              {/* Outer ring */}
              <div
                className="relative rounded-full"
                style={{
                  padding: '4px',
                  background: 'linear-gradient(135deg, var(--teal), transparent, var(--teal-deep))',
                }}
              >
                <div
                  className="w-[190px] h-[190px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden photo-glow"
                  style={{ background: 'hsl(var(--card))' }}
                >
                  <img
                    src="/assets/nahin.png"
                    alt="Nahin F. Siddiqui"
                    className="w-full h-full object-cover object-center rounded-full"
                    loading="eager"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/assets/avatar.png'; }}
                  />
                </div>
              </div>

              {/* Floating accent dots — desktop only */}
              <div className="hidden md:block absolute -bottom-5 -right-5 w-14 h-14 rounded-full opacity-20 animate-pulse"
                style={{ background: 'var(--teal)' }}></div>
              <div className="hidden md:block absolute -top-5 -left-5 w-10 h-10 rounded-full opacity-15"
                style={{ background: 'var(--teal-deep)' }}></div>

              {/* Status chip overlapping photo */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-6 md:bottom-8 flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs whitespace-nowrap"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid var(--border-color)',
                  color: 'var(--teal)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--teal)' }}></span>
                Open to collaborate
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
