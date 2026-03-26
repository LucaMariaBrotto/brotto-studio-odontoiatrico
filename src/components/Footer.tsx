import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">
              Brotto Studio Odontoiatrico
            </h3>
            <p className="text-background/80 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">{t("footer.contacts")}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Via Unione 2, Milano</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>02 86462283</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Printer className="w-5 h-5 flex-shrink-0" />
                <span>Fax: 02 8690627</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@brottostudio.it</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">{t("footer.hours")}</h4>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>{t("footer.days")}</span>
              </div>
              <p className="ml-7">8:30 - 13:00 | 14:30 - 18:00</p>
              <p className="ml-7 italic text-background/60">{t("footer.byAppointment")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} Brotto Studio Odontoiatrico. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
