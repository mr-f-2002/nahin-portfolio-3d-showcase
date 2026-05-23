import { Clock, MapPin } from "lucide-react";

const OfficeHours = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-3 text-primary">
            <Clock size={18} />
            <h3 className="font-handwriting font-bold text-2xl text-foreground">
              Office hours
            </h3>
          </div>
          <p className="font-serif text-base text-muted-foreground leading-relaxed mb-3">
            For current students and advisees. Please email a one-line agenda before
            dropping in so I can prepare.
          </p>
          <ul className="font-serif text-base text-muted-foreground space-y-1">
            <li>Sunday · 11:00 – 13:00</li>
            <li>Tuesday · 14:00 – 16:00</li>
            <li>Thursday · by appointment</li>
          </ul>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-3 text-primary">
            <MapPin size={18} />
            <h3 className="font-handwriting font-bold text-2xl text-foreground">
              Where to find me
            </h3>
          </div>
          <p className="font-serif text-base text-muted-foreground leading-relaxed">
            Department of Computer Science & Engineering
            <br />
            United International University
            <br />
            United City, Madani Avenue
            <br />
            Dhaka 1212, Bangladesh
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeHours;
