{/* Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  {displayed.map((project) => (
    <div
      key={project.id}
      className="project-card group flex overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition:
          'opacity 0.5s ease, transform 0.35s ease, border-color 0.3s ease',
        background: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor =
          'color-mix(in srgb, var(--teal) 15%, var(--border-color))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'hsl(var(--border))';
      }}
    >
      {/* LEFT: Small Thumbnail */}
      <div className="relative w-32 sm:w-36 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Tiny research badge */}
        {project.isResearch && (
          <div className="absolute top-2 right-2">
            <span
              className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium"
              style={{
                background: 'hsl(var(--background) / 0.92)',
                color: 'var(--teal)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              <FlaskConical size={10} />
            </span>
          </div>
        )}
      </div>

      {/* RIGHT: Content */}
      <div className="flex flex-col flex-1 p-4 min-w-0">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
              style={{
                background: 'hsl(var(--muted) / 0.15)',
                color: 'var(--teal)',
              }}
            >
              <project.icon size={13} />
            </div>

            <div className="min-w-0">
              <h3
                className="font-semibold text-sm truncate"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                {project.title}
              </h3>

              <span
                className="text-[11px] uppercase tracking-wide"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-5 mb-3 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 rounded-md"
              style={{
                background: 'hsl(var(--muted) / 0.12)',
                color: 'var(--text-secondary)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between">
          {project.link ? (
            <button
              onClick={() =>
                window.open(project.link, '_blank', 'noopener,noreferrer')
              }
              className="flex items-center gap-2 text-sm font-medium transition-all"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              <Code2 size={13} />
              View Project
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          ) : (
            <span
              className="text-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              No Public Repo
            </span>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
