import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import paoloImg from "@/assets/paolo-brotto.jpeg";
import elenaImg from "@/assets/elena-brotto.jpeg";
import valentinaImg from "@/assets/valentina.jpeg";

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      nameKey: "team.paolo",
      roleKey: "team.paoloRole",
      descKey: "team.paoloDesc",
      image: paoloImg,
      imageClass: "object-top",
    },
    {
      nameKey: "team.valentina",
      roleKey: "team.valentinaRole",
      descKey: "team.valentinaDesc",
      image: valentinaImg,
      imageClass: "object-[center_20%]",
    },
    {
      nameKey: "team.elena",
      roleKey: "team.elenaRole",
      descKey: "team.elenaDesc",
      image: elenaImg,
      imageClass: "object-top",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("team.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("team.subtitle")}
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
                      alt={t(member.nameKey)}
                      className={`w-full h-full object-cover ${member.imageClass}`}
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary-foreground">
                      {t(member.nameKey).charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {t(member.nameKey)}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{t(member.roleKey)}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t(member.descKey)}
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
