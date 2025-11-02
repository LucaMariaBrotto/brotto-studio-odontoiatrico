import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">
              Brotto Studio Odontoiatrico
            </h3>
            <p className="text-background/80 leading-relaxed">
              Dal 1970 punto di riferimento nel centro di Milano per la salute e la bellezza del
              tuo sorriso. Certificazione ISO 9001:2015.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Via Unione 2, Milano</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>02 XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@brottostudio.it</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Orari</h4>
            <div className="space-y-2 text-background/80">
              <p>Lunedì - Venerdì: 9:00 - 19:00</p>
              <p>Sabato: 9:00 - 13:00</p>
              <p>Domenica: Chiuso</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} Brotto Studio Odontoiatrico. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
