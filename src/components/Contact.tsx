import { Card, CardContent } from "@/components/ui/card";
import { Train, Bus, TrainFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";

const googleMapsUrl = "https://www.google.com/maps/place/Brotto+Studio+Odontoiatrico/@45.4624472,9.1843558,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6ab8fb9ff55:0x1c293e0989737ece!8m2!3d45.4624472!4d9.1869307!16s%2Fg%2F1tzghj1c";

const contactItems = [
  {
    icon: MapPin,
    title: "Indirizzo",
    content: "Via Unione 2, Milano",
    href: googleMapsUrl,
    external: true,
  },
  {
    icon: Phone,
    title: "Telefono",
    content: "02 86462283",
    href: "tel:0286462283",
    external: false,
  },
  {
    icon: Printer,
    title: "Fax",
    content: "02 8690627",
    href: "tel:028690627",
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@brottostudio.it",
    href: "mailto:info@brottostudio.it",
    external: false,
  },
];

const openingHours = {
  days: "Dal Lunedì al Giovedì",
  morning: "8:30 - 13:00",
  afternoon: "14:30 - 18:00"
};
const Contact = () => {
  return <section id="contatti" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contatti e Orari
          </h2>
          <p className="text-xl text-muted-foreground">
            Siamo qui per te. Contattaci per prenotare la tua visita
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Contact Info */}
          <Card className="border-border bg-card shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                Informazioni di Contatto
              </h3>
              <div className="space-y-6">
                {contactItems.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.external ? "_blank" : undefined}
                    rel={info.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-card-foreground mb-1">{info.title}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
              <Button asChild className="w-full mt-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                <a href="tel:0286462283">
                  <Phone className="w-5 h-5 mr-2" />
                  Prenota Ora
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Opening Hours */}
          <Card className="border-border bg-card shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Orari di Apertura
              </h3>
              <div className="text-center space-y-6">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
                  <p className="text-lg font-bold text-card-foreground">{openingHours.days}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-muted-foreground">Mattina:</span>
                    <span className="text-xl font-semibold text-card-foreground">{openingHours.morning}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-muted-foreground">Pomeriggio:</span>
                    <span className="text-xl font-semibold text-card-foreground">{openingHours.afternoon}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic mt-4">Si riceve su appuntamento</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <Card className="max-w-5xl mx-auto border-border bg-card shadow-medium overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-xl font-bold text-foreground">Via Unione 2, Milano</p>
            </div>

            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Come Raggiungerci</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Tram */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Train className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="font-bold text-card-foreground">Tram</p>
                <p className="text-muted-foreground text-sm">A 130 m fermata dei tram N°: 2 – 3 – 14 – 20 – 24 – 27</p>
              </div>

              {/* Autobus */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Bus className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="font-bold text-card-foreground">Autobus</p>
                <p className="text-muted-foreground text-sm">A 180 m fermata autobus N° 50</p>
              </div>

              {/* Metropolitana */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <TrainFront className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="font-bold text-card-foreground">Metropolitana</p>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>A 180 m fermata <span className="font-semibold">MISSORI</span> linea GIALLA</p>
                  <p>A 220 m fermata <span className="font-semibold">DUOMO</span> linea ROSSA</p>
                  <p>A ~400 m fermata <span className="font-semibold">CORDUSIO</span> linea ROSSA</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Contact;