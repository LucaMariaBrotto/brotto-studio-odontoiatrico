import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Globe } from "lucide-react";
import logoAsset from "@/assets/logo-brotto.png.asset.json";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "it" ? "en" : "it");
  };

  const navLinks = [
    { label: t("nav.home"), id: "home" },
    { label: t("nav.services"), id: "servizi" },
    { label: t("nav.team"), id: "team" },
    { label: t("nav.cases"), id: "casi" },
    { label: t("nav.reviews"), id: "recensioni" },
    { label: t("nav.contacts"), id: "contatti" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logoImg} alt="Brotto Studio Odontoiatrico" className="h-14" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              title={i18n.language === "it" ? "Switch to English" : "Passa all'italiano"}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-sm">{i18n.language === "it" ? "EN" : "IT"}</span>
            </button>
            <Button
              onClick={() => scrollToSection("contatti")}
              className="bg-gradient-to-r from-primary to-secondary"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t("nav.book")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              <Globe className="w-4 h-4" />
              <span>{i18n.language === "it" ? "English" : "Italiano"}</span>
            </button>
            <Button
              onClick={() => scrollToSection("contatti")}
              className="w-full bg-gradient-to-r from-primary to-secondary"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t("nav.book")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
