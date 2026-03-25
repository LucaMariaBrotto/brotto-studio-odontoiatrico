import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/duomo-milano.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl text-center mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Il Tuo Sorriso è la Nostra Missione
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Dal 1970 punto di riferimento nel centro di Milano per un sorriso bello, sano e duraturo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => scrollToSection("contatti")}
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-strong text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Prenota una Visita
            </Button>
            <Button
              onClick={() => scrollToSection("servizi")}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg"
            >
              Scopri i Servizi
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@brottostudio.it</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Via Unione 2, Milano</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("servizi")}
          className="text-primary-foreground opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
