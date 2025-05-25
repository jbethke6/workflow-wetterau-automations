
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfekt für Einzelunternehmer und kleine Handwerksbetriebe",
      price: "299",
      period: "monatlich",
      setupFee: "999",
      features: [
        "Analyse Ihrer wichtigsten 3 Prozesse",
        "Automatisierung von 2 Kernbereichen",
        "Basic E-Mail Support",
        "Monatliches Check-up",
        "DSGVO-konforme Umsetzung",
        "Hosting inklusive"
      ],
      highlighted: false,
      cta: "Starter-Paket wählen"
    },
    {
      name: "Professional",
      description: "Ideal für etablierte Handwerks- und Immobilienbetriebe",
      price: "599",
      period: "monatlich",
      setupFee: "1.999",
      features: [
        "Vollständige Prozessanalyse",
        "Automatisierung aller 5 Kernbereiche",
        "Priority Support (Telefon & E-Mail)",
        "Wöchentliche Optimierung",
        "CRM-Integration inklusive",
        "Individuelle Anpassungen",
        "Mitarbeiter-Schulungen",
        "Hosting & Backup inklusive"
      ],
      highlighted: true,
      cta: "Professional wählen"
    },
    {
      name: "Enterprise",
      description: "Für größere Betriebe mit komplexen Anforderungen",
      price: "Individuell",
      period: "",
      setupFee: "Auf Anfrage",
      features: [
        "Umfassende Unternehmensanalyse",
        "Komplette Digitalisierung aller Prozesse",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Maßgeschneiderte Entwicklungen",
        "Multi-Standort-Integration",
        "Erweiterte Reporting-Tools",
        "On-Site Training",
        "Disaster Recovery"
      ],
      highlighted: false,
      cta: "Beratung vereinbaren"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparente <span className="text-orange-500">Preisgestaltung</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wählen Sie das Paket, das perfekt zu Ihrem Unternehmen passt. 
            Alle Preise verstehen sich zzgl. MwSt. und ohne versteckte Kosten.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.highlighted 
                  ? 'border-2 border-orange-500 shadow-xl scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Beliebteste Wahl
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-4">
                  {plan.price === "Individuell" ? (
                    <div className="text-3xl font-bold text-blue-900">
                      Individuell
                    </div>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-blue-900">
                        €{plan.price}
                        <span className="text-lg font-normal text-gray-600">
                          /{plan.period}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        Einrichtung: €{plan.setupFee}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                    : 'bg-white border border-orange-500 text-orange-500 hover:bg-orange-50'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Nicht sicher, welches Paket das richtige ist?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Vereinbaren Sie eine kostenlose Beratung und wir finden gemeinsam 
              die optimale Lösung für Ihr Unternehmen.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
            >
              Kostenlose Beratung vereinbaren
            </Button>
            <div className="mt-4 text-sm text-blue-200">
              ✓ Unverbindlich ✓ 30 Minuten ✓ Sofort umsetzbare Tipps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
