import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

        <div className="text-center mt-12">
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
