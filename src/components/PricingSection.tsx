
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from 'lucide-react';
import CalendlyBooking from './CalendlyBooking';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PricingSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  const plans = [
    {
      name: "Starter",
      price: "299€",
      description: "Perfekt für Einzelunternehmer",
      features: [
        "Bis zu 5 Automatisierungsworkflows",
        "E-Mail & WhatsApp Integration",
        "Grundlegende Terminbuchung",
        "30 Tage Support",
        "Einmalige Einrichtung"
      ],
      highlighted: false,
      setupTime: "2-3 Wochen"
    },
    {
      name: "Professional",
      price: "599€",
      description: "Ideal für kleine Handwerksbetriebe",
      features: [
        "Bis zu 15 Automatisierungsworkflows",
        "CRM Integration (HubSpot, Pipedrive)",
        "Erweiterte Terminbuchung mit Kalendly",
        "Rechnungsautomatisierung",
        "60 Tage Support + Optimierung",
        "Mitarbeiter-Onboarding"
      ],
      highlighted: true,
      setupTime: "3-4 Wochen"
    },
    {
      name: "Business",
      price: "999€",
      description: "Für wachsende Unternehmen",
      features: [
        "Unbegrenzte Automatisierungsworkflows",
        "Vollständige Geschäftsprozess-Integration",
        "API-Anbindungen nach Wunsch",
        "Kundenportal & Dashboard",
        "90 Tage Support + monatliche Reviews",
        "Team-Schulungen"
      ],
      highlighted: false,
      setupTime: "4-6 Wochen"
    },
    {
      name: "Enterprise",
      price: "Individuell",
      description: "Maßgeschneiderte Lösungen",
      features: [
        "Vollständig individualisierte Lösung",
        "Dedizierter Projektmanager",
        "Unbegrenzte Integrationen",
        "24/7 Priority Support",
        "Continuous Improvement Program",
        "White-Label Optionen"
      ],
      highlighted: false,
      setupTime: "6-8 Wochen"
    }
  ];

  return (
    <>
      <section id="pricing" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={titleRef}
            className={`text-center mb-8 md:mb-12 lg:mb-16 scroll-animate ${titleVisible ? 'animate' : ''}`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 font-montserrat">
              Transparente <span className="text-orange-800">Preise</span> für Ihre Automatisierung
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Wählen Sie das Paket, das perfekt zu Ihrem Unternehmen passt. 
              Alle Preise sind einmalig – keine versteckten Kosten, keine monatlichen Gebühren.
            </p>
          </div>

          <div 
            ref={cardsRef}
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-8 md:mb-12 scroll-animate ${cardsVisible ? 'animate' : ''}`}
          >
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.highlighted ? 'ring-2 ring-orange-800 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300 h-full flex flex-col`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-800 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Beliebteste Wahl
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 font-montserrat">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-open-sans">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl lg:text-4xl font-bold text-orange-800 font-montserrat">
                      {plan.price}
                    </span>
                    {plan.price !== "Individuell" && (
                      <span className="text-gray-500 text-sm ml-2">einmalig</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-orange-800 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-open-sans text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 font-open-sans">Umsetzungsdauer:</div>
                      <div className="text-orange-800 font-semibold">{plan.setupTime}</div>
                    </div>
                    
                    <Button 
                      className={`w-full font-montserrat ${
                        plan.highlighted 
                          ? 'bg-orange-800 hover:bg-orange-900 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                      onClick={openCalendly}
                    >
                      Jetzt starten
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Separate gray CTA section */}
      <section className="py-8 md:py-12 gradient-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={ctaRef}
            className={`text-center scroll-animate ${ctaVisible ? 'animate' : ''}`}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-montserrat">
              Nicht sicher welches Paket das richtige ist?
            </h3>
            <p className="text-gray-600 mb-6 font-open-sans">
              Lassen Sie uns in einem kostenlosen Beratungsgespräch Ihre Anforderungen besprechen. 
              Wir finden gemeinsam die perfekte Lösung für Ihr Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-orange-800 hover:bg-orange-900 text-white font-montserrat"
                onClick={openCalendly}
              >
                Beratung vereinbaren
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-orange-800 text-orange-800 hover:bg-orange-50 font-montserrat"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fragen per E-Mail
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CalendlyBooking isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};

export default PricingSection;
