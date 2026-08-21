import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("privacy.back")}
          </button>

          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("privacy.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("privacy.subtitle")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-medium space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.owner.title")}
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p>{t("privacy.owner.name")}</p>
                  <p>{t("privacy.owner.address")}</p>
                  <p>{t("privacy.owner.email")}</p>
                  <p>{t("privacy.owner.phone")}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.data.title")}
                </h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t("privacy.data.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.purpose.title")}
                </h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t("privacy.purpose.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.legal.title")}
                </h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t("privacy.legal.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.cookies.title")}
                </h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t("privacy.cookies.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.thirdParties.title")}
                </h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t("privacy.thirdParties.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.rights.title")}
                </h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t("privacy.rights.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.changes.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("privacy.changes.content")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
