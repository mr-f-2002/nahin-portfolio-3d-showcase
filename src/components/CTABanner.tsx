import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  text: string;
  to: string;
  label: string;
}

const CTABanner = ({ title, text, to, label }: CTAProps) => (
  <section className="py-16 px-6 md:px-10 lg:px-16">
    <div className="max-w-5xl mx-auto p-8 md:p-12 border border-border rounded-xl text-center">
      <h2 className="font-handwriting font-bold text-3xl md:text-4xl text-foreground mb-3">
        {title}
      </h2>
      <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
        {text}
      </p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-handwriting text-base rounded-md hover:opacity-90 transition"
      >
        {label} <ArrowRight size={14} />
      </Link>
    </div>
  </section>
);

export default CTABanner;
