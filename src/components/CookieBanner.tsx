import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

// Set to true only if analytics/marketing tracking cookies are added in the future.
const TRACKING_ENABLED = false;

const CONSENT_KEY = "brotto-cookie-consent";

type ConsentStatus = "granted" | "denied" | null;

const CookieBanner = () => {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus;
    setConsent(stored);
  }, []);

  if (!TRACKING_ENABLED || !mounted || consent !== null) {
    return null;
  }

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            Questo sito utilizza cookie tecnici necessari al funzionamento. Se attivi i cookie di
            terze parti (analytics, marketing), ci aiuti a migliorare l'esperienza. Puoi modificare la
            tua scelta in qualsiasi momento dalla Privacy Policy.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Rifiuta
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accetta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
