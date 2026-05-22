{/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
  {displayed.map((project) => (
    <div
      key={project.id}
      className="project-card group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition:
          'opacity 0.5s ease, transform 0.4s ease, border-color 0.3s ease',
        background: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-3px)';
        el.style.borderColor =
          'color-mix(in srgb, var(--teal) 18%, var(--border-color))';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.borderColor = 'hsl(var(--border))';
      }}
    >
      {/* Small Image */}
      <div
        className="relative h-40 overflow-hidden border-b"
        style={{
          background: 'hsl(var(--muted) / 0.15)',
          borderColor: 'hsl(var(--border))',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Category */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span
            className="px-2 py-1 text-[11px] rounded-full font-medium"
            style={{
              background: 'hsl(var(--background) / 0.9)',
              border: '1px solid hsl(var(--border))',
            }}
          >
            {project.category}
          </span>

          {project.isResearch && (
            <span
              className="px-2 py-1 text-[11px] rounded-full flex items-center gap-1 font-medium"
              style={{
                background:
                  'color-mix(in srgb, var(--teal) 12%, transparent)',
                color: 'var(--teal)',
                border:
                  '1px solid color-mix(in srgb, var(--teal) 22%, transparent)',
              }}
            >
              <FlaskConical size={10} />
              Research
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: 'hsl(var(--muted) / 0.18)',
              color: 'var(--teal)',
            }}
          >
            <project.icon size={14} />
          </div>

          <h3
            className="font-semibold text-sm tracking-tight"
            style={{ color: 'hsl(var(--foreground))' }}
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-6 mb-4 line-clamp-3"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-1 rounded-md"
              style={{
                background: 'hsl(var(--muted) / 0.2)',
                color: 'var(--text-secondary)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span
              className="text-[11px] px-2 py-1 rounded-md"
              style={{
                background: 'hsl(var(--muted) / 0.2)',
                color: 'var(--text-secondary)',
              }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action */}
        <div className="mt-auto">
          {project.link ? (
            <button
              onClick={() =>
                window.open(project.link, '_blank', 'noopener,noreferrer')
              }
              className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl transition-all"
              style={{
                border: '1px solid hsl(var(--border))',
                background: 'transparent',
                color: 'hsl(var(--foreground))',
              }}
            >
              <Code2 size={14} />
              View Project
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          ) : (
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 text-sm py-2.5 rounded-xl"
              style={{
                background: 'hsl(var(--muted) / 0.15)',
                color: 'var(--text-secondary)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              <Calendar size={14} />
              No Public Repo
            </button>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
