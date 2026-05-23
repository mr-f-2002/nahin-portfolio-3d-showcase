interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => (
  <section className="pt-16 pb-10 px-6 md:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto text-center">
      {eyebrow && (
        <div className="flex items-center justify-center gap-2 font-handwriting text-base text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {eyebrow}
        </div>
      )}
      <h1 className="font-handwriting font-bold text-5xl md:text-6xl text-foreground mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-[2px] bg-primary mt-6 mx-auto" />
    </div>
  </section>
);

export default PageHeader;
