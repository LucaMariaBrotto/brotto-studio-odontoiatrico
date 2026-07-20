import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import iconImplantology from "@/assets/icon-implantology.png";
import iconProsthetics from "@/assets/icon-prosthetics.png";
import iconOrthodontics from "@/assets/icon-orthodontics.png";
import caseOrtho1 from "@/assets/case-ortho-1.jpg";
import caseOrtho2 from "@/assets/case-ortho-2.jpg";
import caseOrtho3 from "@/assets/case-ortho-3.jpg";
import caseOrtho4 from "@/assets/case-ortho-4.jpg";
import caseProsthetics1 from "@/assets/case-prosthetics-1.jpg";
import caseProsthetics2 from "@/assets/case-prosthetics-2.jpg";
import caseProsthetics3 from "@/assets/case-prosthetics-3.jpg";
import caseImplant1 from "@/assets/case-implant-1.png.asset.json";
import caseImplant2 from "@/assets/case-implant-2.png.asset.json";
import caseImplant3 from "@/assets/case-implant-3.png.asset.json";

const Cases = () => {
  const { t } = useTranslation();

  const areas = [
    {
      icon: iconImplantology,
      titleKey: "cases.implantology",
      descKey: "cases.implantologyDesc",
      photos: [caseImplant1.url, caseImplant2.url, caseImplant3.url],
      showBeforeAfter: false,
    },
    {
      icon: iconProsthetics,
      titleKey: "cases.prosthetics",
      descKey: "cases.prostheticsDesc",
      photos: [caseProsthetics1, caseProsthetics2, caseProsthetics3],
      showBeforeAfter: true,
    },
    {
      icon: iconOrthodontics,
      titleKey: "cases.orthodontics",
      descKey: "cases.orthodonticsDesc",
      photos: [caseOrtho1, caseOrtho2, caseOrtho3, caseOrtho4],
      showBeforeAfter: true,
    },
  ];

  return (
    <section id="casi" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("cases.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("cases.subtitle")}
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 border-border bg-card overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={area.icon}
                    alt={t(area.titleKey)}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {t(area.titleKey)}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {t(area.descKey)}
                    </p>
                  </div>
                </div>

                {area.photos.length > 0 && (
                  <div>
                    {area.showBeforeAfter && (
                      <p className="text-sm font-semibold text-primary mb-3">
                        {t("cases.beforeAfter")}
                      </p>
                    )}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {area.photos.map((photo, i) => (
                        <div key={i} className="rounded-lg overflow-hidden border border-border aspect-square bg-muted">
                          <img
                            src={photo}
                            alt={`${t(area.titleKey)} ${i + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
