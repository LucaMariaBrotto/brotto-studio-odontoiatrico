import { Card, CardContent } from "@/components/ui/card";
import { Smile, Sparkles, Shield, Stethoscope, Gem, Heart } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Igiene e Prevenzione",
    description: "Pulizia professionale, detartrasi e controlli periodici per mantenere i tuoi denti sani.",
  },
  {
    icon: Smile,
    title: "Ortodonzia",
    description: "Apparecchi fissi, mobili e invisibili per un sorriso perfettamente allineato.",
  },
  {
    icon: Sparkles,
    title: "Estetica Dentale",
    description: "Sbiancamento, faccette e restauri estetici per un sorriso luminoso.",
  },
  {
    icon: Stethoscope,
    title: "Conservativa",
    description: "Cura delle carie con materiali di ultima generazione e tecniche mini-invasive.",
  },
  {
    icon: Gem,
    title: "Implantologia",
    description: "Impianti dentali con tecnologia digitale per sostituire i denti mancanti.",
  },
  {
    icon: Heart,
    title: "Parodontologia",
    description: "Prevenzione e cura delle malattie gengivali per gengive sane e forti.",
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-muted-foreground">
            Offriamo una gamma completa di trattamenti odontoiatrici con le tecnologie più avanzate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
