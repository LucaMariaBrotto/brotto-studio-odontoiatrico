import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import paoloImg from "@/assets/paolo-brotto.jpeg";
import elenaImg from "@/assets/elena-brotto.jpeg";

const teamMembers = [
  {
    name: "Dott. Paolo Maria Brotto",
    role: "Direttore Sanitario",
    description: "Laureato in Medicina e Chirurgia all'Università Statale di Milano, specializzato in odontoiatria presso la Boston University. Dal 1993 direttore sanitario dello studio, esperto in implantologia, protesi, endodonzia, conservativa, chirurgia e ortodonzia.",
    image: paoloImg,
  },
  {
    name: "Valentina",
    role: "Assistente alla Poltrona",
    description: "Specializzata nell'assistenza durante i trattamenti e nella cura del paziente.",
    image: null,
  },
  {
    name: "Elena Poggi",
    role: "Segretaria",
    description: "Il punto di riferimento per appuntamenti e gestione amministrativa dello studio.",
    image: elenaImg,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Il Nostro Team
          </h2>
          <p className="text-xl text-muted-foreground">
            Professionisti dedicati al tuo benessere e alla salute del tuo sorriso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary-foreground">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {member.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{member.role}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
