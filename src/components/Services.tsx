import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Smile, Sparkles, Hammer, CircleDot, Heart, Crown, Focus, Baby } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Shield, titleKey: "services.hygiene", descKey: "services.hygieneDesc" },
    { icon: Smile, titleKey: "services.orthodontics", descKey: "services.orthodonticsDesc" },
    { icon: Sparkles, titleKey: "services.aesthetics", descKey: "services.aestheticsDesc" },
    { icon: Hammer, titleKey: "services.conservative", descKey: "services.conservativeDesc" },
    { icon: CircleDot, titleKey: "services.implantology", descKey: "services.implantologyDesc" },
    { icon: Heart, titleKey: "services.periodontics", descKey: "services.periodonticsDesc" },
    { icon: Crown, titleKey: "services.prosthetics", descKey: "services.prostheticsDesc" },
    { icon: Focus, titleKey: "services.endodontics", descKey: "services.endodonticsDesc" },
    { icon: Baby, titleKey: "services.pedodontics", descKey: "services.pedodonticsDesc" },
  ];

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-10 h-10 object-contain brightness-0 invert"
                    />
                  ) : (
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
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