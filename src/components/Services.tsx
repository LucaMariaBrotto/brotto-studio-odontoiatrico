import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

import iconHygiene from "@/assets/icon-hygiene.png";
import iconOrthodontics from "@/assets/icon-orthodontics.png";
import iconAesthetics from "@/assets/icon-aesthetics.png";
import iconConservative from "@/assets/icon-conservative.png";
import iconImplantology from "@/assets/icon-implantology.png";
import iconPeriodontics from "@/assets/icon-periodontics.png";
import iconProsthetics from "@/assets/icon-prosthetics.png";
import iconEndodontics from "@/assets/icon-endodontics.png";
import iconPedodontics from "@/assets/icon-pedodontics.png";

type ServiceItem = {
  image: string;
  titleKey: string;
  descKey: string;
};

const Services = () => {
  const { t } = useTranslation();

  const services: ServiceItem[] = [
    { image: iconHygiene, titleKey: "services.hygiene", descKey: "services.hygieneDesc" },
    { image: iconOrthodontics, titleKey: "services.orthodontics", descKey: "services.orthodonticsDesc" },
    { image: iconAesthetics, titleKey: "services.aesthetics", descKey: "services.aestheticsDesc" },
    { image: iconConservative, titleKey: "services.conservative", descKey: "services.conservativeDesc" },
    { image: iconImplantology, titleKey: "services.implantology", descKey: "services.implantologyDesc" },
    { image: iconPeriodontics, titleKey: "services.periodontics", descKey: "services.periodonticsDesc" },
    { image: iconProsthetics, titleKey: "services.prosthetics", descKey: "services.prostheticsDesc" },
    { image: iconEndodontics, titleKey: "services.endodontics", descKey: "services.endodonticsDesc" },
    { image: iconPedodontics, titleKey: "services.pedodontics", descKey: "services.pedodonticsDesc" },
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
                <div className="w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
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
