import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "Dott. Paolo Maria Brotto",
    role: "Direttore Sanitario",
    description: "Specializzato in odontoiatria presso la Boston University. Dal 1993 direttore sanitario dello studio, esperto in implantologia, protesi, endodonzia, conservativa, chirurgia e ortodonzia.",
  },
  {
    name: "Elena Brotto",
    role: "Segretaria",
    description: "Il punto di riferimento per appuntamenti e gestione amministrativa dello studio.",
  },
  {
    name: "Valentina",
    role: "Assistente alla Poltrona",
    description: "Specializzata nell'assistenza durante i trattamenti e nella cura del paziente.",
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
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <User className="w-12 h-12 text-primary-foreground" />
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
