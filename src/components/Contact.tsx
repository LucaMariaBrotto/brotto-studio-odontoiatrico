import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Indirizzo",
    content: "Via Unione 2, Milano",
  },
  {
    icon: Phone,
    title: "Telefono",
    content: "02 86462283",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@brottostudio.it",
  },
];

const openingHours = [
  { day: "Lunedì - Venerdì", hours: "9:00 - 19:00" },
  { day: "Sabato", hours: "9:00 - 13:00" },
  { day: "Domenica", hours: "Chiuso" },
];

const Contact = () => {
  return (
    <section id="contatti" className="py-24 bg-gradient-to-b from-muted to-background">
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
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-card-foreground mb-1">{info.title}</p>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="w-full mt-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Prenota Ora
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
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted"
                  >
                    <span className="font-medium text-card-foreground">{schedule.day}</span>
                    <span className="text-primary font-bold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <p className="text-center text-card-foreground">
                  <span className="font-bold">Emergenze?</span>
                  <br />
                  Chiamaci per un appuntamento urgente
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <Card className="max-w-5xl mx-auto border-border bg-card shadow-medium overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xl font-bold text-foreground">Via Unione 2, Milano</p>
              <p className="text-muted-foreground mt-2">Facilmente raggiungibile con mezzi pubblici</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
