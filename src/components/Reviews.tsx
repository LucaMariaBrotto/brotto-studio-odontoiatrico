import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Marco R.",
    rating: 5,
    text: "Professionalità e cortesia eccezionali. Mi sono sentito subito a mio agio. Il risultato del trattamento ha superato le mie aspettative.",
    date: "2 settimane fa",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "Studio modernissimo con attrezzature all'avanguardia. Il personale è gentilissimo e molto competente. Consigliatissimo!",
    date: "1 mese fa",
  },
  {
    name: "Luca P.",
    rating: 5,
    text: "Finalmente ho trovato uno studio odontoiatrico di fiducia. Prezzi chiari, nessuna sorpresa. Ottimo rapporto qualità-prezzo.",
    date: "3 settimane fa",
  },
  {
    name: "Giulia T.",
    rating: 5,
    text: "Avevo molta paura del dentista, ma qui mi hanno messo a mio agio. Trattamento indolore e risultato perfetto. Grazie!",
    date: "1 settimana fa",
  },
];

const Reviews = () => {
  // Link diretto per lasciare una recensione su Google Maps
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJx_YqZI3GhkcR_aVrEBw_3mU";
  
  return (
    <section id="recensioni" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cosa Dicono i Nostri Pazienti
          </h2>
          <p className="text-xl text-muted-foreground">
            La soddisfazione dei nostri pazienti è la nostra migliore referenza
          </p>
        </div>

        {/* Widget Google Maps con recensioni integrate */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-strong">
            <CardContent className="p-0">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.089732442744!2d9.187871176527965!3d45.46281397107352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c584664af2c7%3A0x65de1f1c101b6a5d!2sBrotto%20Studio%20Odontoiatrico!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brotto Studio Odontoiatrico - Mappa e Recensioni Google"
                ></iframe>
              </div>
              
              <div className="p-8 text-center space-y-6 bg-gradient-to-b from-background to-accent/5">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-foreground">
                    5.0
                  </span>
                </div>
                
                <p className="text-muted-foreground text-lg">
                  Visualizza tutte le recensioni Google dei nostri pazienti sulla mappa
                </p>
                
                <Button
                  onClick={() => window.open(googleReviewUrl, '_blank')}
                  size="lg"
                  className="shadow-strong text-lg px-8"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Lascia una Recensione su Google
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                  La tua opinione è importante! Lascia una recensione su Google per aiutare altri pazienti 
                  a conoscere la nostra esperienza e qualità del servizio.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recensioni in evidenza */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-4 text-lg">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-card-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Valutazione media:{" "}
            <span className="font-bold text-primary text-lg">5.0/5</span> su oltre 100 recensioni
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
