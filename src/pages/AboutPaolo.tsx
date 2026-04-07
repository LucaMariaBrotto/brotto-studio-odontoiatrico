import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, Briefcase, Award, Globe, Heart, Building } from "lucide-react";
import paoloImg from "@/assets/paolo-brotto-about.jpeg";

const AboutPaolo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 pt-28">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("about.back")}
          </Button>
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-xl flex-shrink-0">
              <img
                src={paoloImg}
                alt="Dr. Pietro Paolo Maria Brotto"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
                {t("about.name")}
              </h1>
              <p className="text-xl text-primary-foreground/80">{t("about.subtitle")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Biografia */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">{t("about.bioTitle")}</h2>
                </div>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.bio1")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.bio2")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.bio3")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.bio4")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.bio5")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.bio6")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lingue e Famiglia */}
            <div className="space-y-4">
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-card-foreground">{t("about.languagesTitle")}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t("about.languages")}</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-card-foreground">{t("about.familyTitle")}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t("about.family")}</p>
                </CardContent>
              </Card>
            </div>

            {/* Esperienza Professionale */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">{t("about.experienceTitle")}</h2>
                </div>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.exp1")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.exp2")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{t("about.exp3")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Certificazioni e Studio */}
            <div className="space-y-8">
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-card-foreground">{t("about.certTitle")}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t("about.cert")}</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-card-foreground">{t("about.studioTitle")}</h2>
                  </div>
                  <ul className="space-y-4 text-muted-foreground leading-relaxed">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{t("about.studio1")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{t("about.studio2")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPaolo;
