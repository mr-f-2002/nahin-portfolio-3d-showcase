import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Lightbulb,
  Zap,
  Rocket,
  ChevronRight
} from 'lucide-react';

const AboutFlashcards = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const whoIAmItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeWhoIAmIndex, setActiveWhoIAmIndex] = useState<number>(-1);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    whoIAmItemsRef.current.forEach((el, index) => {
      if (!el) return;
      
      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setActiveWhoIAmIndex(prevIndex => 
                  index > prevIndex ? index : prevIndex
                );
              }, index * 150);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      itemObserver.observe(el);
      
      return () => {
        if (el) itemObserver.unobserve(el);
      };
    });
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  const addToWhoIAmRefs = (el: HTMLDivElement | null, index: number) => {
    whoIAmItemsRef.current[index] = el;
  };

  const whoIAmFlashcards = [
    {
      title: "Academic Excellence",
      content: "Computer Science and Engineering graduate with CGPA of 3.89/4.00, passionate about learning and implementing innovative methods.",
      icon: Trophy,
      highlight: "3.89/4.00 CGPA",
      color: "text-yellow-600"
    },
    {
      title: "Research Pioneer",
      content: "Focused on developing lightweight hybrid models for resource provisioning and forecasting in cloud environments.",
      icon: Lightbulb,
      highlight: "Light-weight models",
      color: "text-blue-600"
    },
    {
      title: "Tech Specialist",
      content: "Specialized in machine learning, software development, and cloud computing with a strong foundation in both theoretical concepts and practical skills.",
      icon: Zap,
      highlight: "ML & AI Enthusiast",
      color: "text-purple-600"
    },
    {
      title: "Innovation Driver",
      content: "Driven to create unique products that make a difference while expanding knowledge in machine learning and cloud computing.",
      icon: Rocket,
      highlight: "Product Creator",
      color: "text-green-600"
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-28 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto max-w-[90%] xl:max-w-[1400px] px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science Engineer • Research Enthusiast • Innovation Driver
          </p>
        </div>
        
        {/* Who I Am Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {whoIAmFlashcards.map((card, index) => (
            <Card
              key={index}
              ref={(el) => addToWhoIAmRefs(el, index)}
              className={`border border-primary/10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                index <= activeWhoIAmIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${card.color}`}>
                  <card.icon className={`w-10 h-10 ${card.color}`} />
                </div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm px-3 py-1">
                  {card.highlight}
                </Badge>
                <h4 className="text-2xl font-semibold mb-3 text-foreground">{card.title}</h4>
                <p className="text-base text-muted-foreground leading-relaxed">{card.content}</p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-6 h-6 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFlashcards;
