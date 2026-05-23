const FAQ = () => {
  const items = [
    {
      q: "Are you open to research collaboration?",
      a: "Yes — especially on efficient deep learning, Bangla NLP, and applied cloud systems. The fastest way to start is a short email outlining the problem and your current progress.",
    },
    {
      q: "Do you supervise undergraduate theses?",
      a: "I supervise a small number of UIU undergraduate theses each semester. Priority goes to students with a clear problem statement and a willingness to read primary literature.",
    },
    {
      q: "Will you review my paper / give feedback on my draft?",
      a: "Within reason and time, yes. I cannot promise turnaround under a week, and I am most useful on the framing, evaluation, and writing rather than line edits.",
    },
    {
      q: "Do you take on industry consulting?",
      a: "Selectively, on problems that are technically interesting and ethically aligned. Email me with scope, timeline, and the question you want answered.",
    },
    {
      q: "What is the best way to reach you?",
      a: "Email is best for anything substantive. LinkedIn works for short introductions. I do not check social DMs reliably.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-handwriting font-bold text-4xl text-foreground mb-10 text-center">
          Frequently asked
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((it, i) => (
            <details
              key={i}
              className="p-5 border border-border rounded-lg group"
            >
              <summary className="cursor-pointer font-handwriting font-bold text-lg text-foreground list-none flex justify-between items-center gap-4">
                {it.q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="font-serif text-base text-muted-foreground leading-relaxed mt-3">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
