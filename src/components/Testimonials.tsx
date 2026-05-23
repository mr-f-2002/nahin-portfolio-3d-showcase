const Testimonials = () => {
  const quotes = [
    {
      quote: "Nahin has the rare ability to make a hard topic feel obvious without making it feel small. The best lab instructor I had at IUT.",
      who: "Former undergraduate student, IUT",
    },
    {
      quote: "Careful, well-read, and unusually quick from prototype to shippable system. A natural collaborator.",
      who: "Engineering lead, Kernel Technologies",
    },
    {
      quote: "Asks the questions that should have been in the paper. I expect a lot of good work from him in the next few years.",
      who: "Faculty mentor, CSE",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          Kind words
        </h2>
        <div className="flex flex-col gap-6">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="p-6 border-l-2 border-primary bg-card/40 rounded-r-lg"
            >
              <p className="font-serif text-lg text-foreground leading-relaxed italic mb-3">
                “{q.quote}”
              </p>
              <footer className="font-handwriting text-sm text-muted-foreground">
                — {q.who}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
