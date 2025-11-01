import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award } from "lucide-react";

const cases = [
  {
    title: "Implantologia Complessa",
    description: "Ripristino completo dell'arcata dentale con impianti multipli",
    result: "Paziente tornato a sorridere con sicurezza",
  },
  {
    title: "Ortodonzia Invisibile",
    description: "Trattamento con allineatori trasparenti per adulti",
    result: "Sorriso perfetto in 18 mesi",
  },
  {
    title: "Riabilitazione Estetica",
    description: "Faccette in ceramica e sbiancamento professionale",
    result: "Trasformazione completa del sorriso",
  },
  {
    title: "Parodontologia Avanzata",
    description: "Trattamento rigenerativo delle gengive",
    result: "Recupero completo della salute gengivale",
  },
];

const Cases = () => {
  return (
    <section id="casi" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Casi Clinici Risolti
          </h2>
          <p className="text-xl text-muted-foreground">
            Risultati eccellenti che testimoniano la qualità del nostro lavoro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((clinicalCase, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {clinicalCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {clinicalCase.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{clinicalCase.result}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
