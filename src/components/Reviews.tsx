import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Laura B.",
    rating: 5,
    text: "Il dottor Paolo e il suo staff sono una certezza per me, che sono loro cliente da trent'anni, prima del padre Luigi e poi del figlio Paolo. Mi sono affidata a loro anche per i miei figli. L'ultimo intervento per l'estrazione del dente del giudizio di mio figlio è andato benissimo. Vi ringraziamo per la grande competenza, gentilezza, attenzione e umanità che dimostrate sempre.",
    
  },
  {
    name: "Giovanni P.",
    rating: 5,
    text: "Paolo è il mio dentista da circa 20 anni. La professionalità è altissima. Il dottore è molto preparato, onesto e trasparente ed agisce nell'interesse del paziente! Lo studio è molto bello e molto pulito. Tutto lo staff è fantastico, gentilissimo e disponibilissimo nei confronti del paziente. La posizione è comodissima, facilmente raggiungibile con ogni mezzo di trasporto. Studio dentistico consigliatissimo!",
    
  },
  {
    name: "Lorenzo S.",
    rating: 5,
    text: "Conosco il doc Paolo da 10 anni. Mi ha insegnato a lavarmi i denti, mi ha fatto trattamento ortodontico e rimosso i 4 denti del giudizio. Voto 5 stelle!",
  },
  {
    name: "Tonino M.",
    rating: 5,
    text: "Sono passato dal padre (molto bravo) al figlio altrettanto bravo! Mi hanno sistemato la bocca disastrata ed oggi, da ormai 5 anni… solo igiene orale. Grazie Paolo",
  },
];

const Reviews = () => {
  // Link per vedere le recensioni su Google
  const googlePlaceUrl = "https://www.google.com/maps/place/Brotto+Studio+Odontoiatrico/@45.4624472,9.1843558,17z/data=!4m18!1m9!3m8!1s0x4786c6ab8fb9ff55:0x1c293e0989737ece!2sBrotto+Studio+Odontoiatrico!8m2!3d45.4624472!4d9.1869307!9m1!1b1!16s%2Fg%2F1tzghj1c!3m7!1s0x4786c6ab8fb9ff55:0x1c293e0989737ece!8m2!3d45.4624472!4d9.1869307!9m1!1b1!16s%2Fg%2F1tzghj1c?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D";
  // Link per lasciare una recensione
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJVf-5j6vGhkcRzn5ziQk-KRw";
  
  return (
    <section id="recensioni" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recensioni Google
          </h2>
          <p className="text-xl text-muted-foreground">
            Leggi le opinioni dei nostri pazienti su Google
          </p>
        </div>

        {/* Call to action per Google Reviews */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-strong">
            <CardContent className="p-8 text-center space-y-6 bg-gradient-to-b from-background to-accent/5">
              <div className="flex items-center justify-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-3xl font-bold text-foreground">
                  5.0
                </span>
              </div>
              
              <p className="text-muted-foreground text-lg">
                Valutazione media su Google
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={() => window.open(googlePlaceUrl, '_blank')}
                  size="lg"
                  variant="outline"
                  className="shadow-strong text-lg px-8"
                >
                  Leggi le Recensioni Google
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                
                <Button
                  onClick={() => window.open(googleReviewUrl, '_blank')}
                  size="lg"
                  className="shadow-strong text-lg px-8"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Lascia una Recensione
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                La tua opinione è importante! Le recensioni Google aiutano altri pazienti 
                a conoscere la qualità del nostro servizio.
              </p>
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
                <p className="font-bold text-card-foreground">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Valutazione media:{" "}
            <span className="font-bold text-primary text-lg">5.0/5</span> su Google
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
