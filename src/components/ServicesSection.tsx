
import React from 'react';
import { Card } from "@/components/ui/card";
import { FileText, Calendar, MessageSquare, Users, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Der \"Warenkorb-Retter\"",
      description: "Automatisierung der Warenkorb-Wiederherstellung - Automatische E-Mail- und SMS-Sequenzen für abgebrochene Warenkörbe mit intelligenten Anreizen. Wiederherstellung von 10-20% verlorener Verkäufe.",
      benefits: [
        "Automatische Erinnerungen nach 1h, 24h, 72h",
        "Personalisierte Rabattcodes und Anreize",
        "DSGVO-konform",
        "Direkte Umsatzsteigerung messbar"
      ],
      image: "/lovable-uploads/454c9234-0608-4281-9e92-85a40ad67e69.png"
    },
    {
      icon: FileText,
      title: "Der \"Bestands-Bot\"",
      description: "Multi-Channel Bestands-Synchronisierung - Echtzeit-Synchronisierung deiner Lagerbestände über alle Verkaufskanäle (Shopify, Amazon, eBay, etc.). Keine Überverkäufe, 100% genaue Daten.",
      benefits: [
        "Echtzeit-Updates über alle Kanäle",
        "Automatische Fehlerbehandlung",
        "Reduzierung von Überverkäufen um 100%",
        "Integration mit allen gängigen Plattformen"
      ],
      image: "/images/analyse.jpg"
    },
    {
      icon: MessageSquare,
      title: "Der \"Smarte Chatbot-Berater\"",
      description: "KI-gestützter Kundenberatungs-Chatbot - 24/7 KI-Chatbot für Kundensupport, Produktberatung und intelligente Empfehlungen. Reduzierung von Support-Tickets um 70%.",
      benefits: [
        "24/7 Verfügbarkeit",
        "Intelligente Produktempfehlungen",
        "Automatische Lead-Qualifizierung",
        "DSGVO-konform mit lokalen Daten"
      ],
      image: "/images/callcenter.png"
    },
    {
      icon: FileText,
      title: "Der \"Marketing-Content-Generator\"",
      description: "KI-gestützte Content-Erstellung - Automatische Erstellung von Produktbeschreibungen, Social Media Posts, E-Mail-Kampagnen und Blogartikel mit KI. Zeit sparen, Qualität erhöhen.",
      benefits: [
        "Automatische Produktbeschreibungen",
        "Social Media Content in Sekunden",
        "SEO-optimierte Texte",
        "Markenkonformer Ton"
      ],
      image: "/lovable-uploads/77984400-f083-44ea-8ff7-bd541486e149.png"
    },
    {
      icon: Users,
      title: "Der \"Kunden-Loyalitäts-Booster\"",
      description: "Automatisierte Kundenbindung - Personalisierte Follow-ups, Treueprogramme und exklusive Angebote basierend auf Kundenverhalten. Erhöhung des Customer Lifetime Value.",
      benefits: [
        "Automatische Personalisierung",
        "Treuepunkte und Rewards",
        "Wiederkauf-Automatisierung",
        "Segmentierte Kampagnen"
      ],
      image: "/images/vertrag.png"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meine <span className="text-orange-600">Kernleistungen</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Fünf bewährte Automatisierungsbereiche für Online-Shops, die sofort spürbare Verbesserungen bewirken
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full overflow-hidden">
              {/* n8n Screenshot Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`n8n Automatisierung für ${service.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4 text-orange-400">
                  <service.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm lg:text-base">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm">Ihre Vorteile:</h4>
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-orange-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-700 mb-4">
              Maßgeschneiderte Lösungen für Ihr Unternehmen
            </h3>
            <p className="text-base lg:text-lg text-gray-600 mb-6">
              Jede Automatisierungslösung wird individuell an Ihre Bedürfnisse angepasst. 
              Wir arbeiten nur mit bewährten Tools und sorgen für nahtlose Integration in Ihre bestehenden Systeme.
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 text-sm text-gray-600">
              <div className="bg-white rounded-lg px-3 lg:px-4 py-2">n8n Platform</div>
              <div className="bg-white rounded-lg px-3 lg:px-4 py-2">DSGVO-konform</div>
              <div className="bg-white rounded-lg px-3 lg:px-4 py-2">24/7 Support</div>
              <div className="bg-white rounded-lg px-3 lg:px-4 py-2">Hosting in Deutschland</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
