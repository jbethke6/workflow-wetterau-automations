
import React from 'react';
import { Card } from "@/components/ui/card";
import { FileText, Calendar, MessageSquare, Users, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Rechnungserstellung",
      description: "Automatische Erstellung und Versendung von Rechnungen basierend auf erledigten Aufträgen",
      benefits: [
        "Rechnungen werden automatisch nach Projektabschluss erstellt",
        "Integration mit Ihrer bestehenden Buchhaltungssoftware",
        "Mahnwesen und Zahlungserinnerungen automatisiert",
        "Reduzierung der Rechnungsstellung von Tagen auf Stunden"
      ]
    },
    {
      icon: Calendar,
      title: "Terminbuchung",
      description: "Online-Terminbuchungssystem mit automatischen Erinnerungen und Kalenderintegration",
      benefits: [
        "24/7 verfügbare Online-Terminbuchung für Kunden",
        "Automatische Bestätigungen und Erinnerungen",
        "Integration mit WhatsApp und E-Mail",
        "Reduzierung von Terminausfällen um bis zu 70%"
      ]
    },
    {
      icon: Search,
      title: "Dokumentenmanagement",
      description: "Digitale Verwaltung und automatische Kategorisierung aller Geschäftsdokumente",
      benefits: [
        "Alle Dokumente zentral und durchsuchbar verfügbar",
        "Automatische Archivierung nach Projektabschluss",
        "Versionskontrolle und Backup-System",
        "Zugriff von überall - auch unterwegs"
      ]
    },
    {
      icon: MessageSquare,
      title: "Kundenkommunikation",
      description: "Automatisierte E-Mail-Kampagnen und strukturierte Kommunikationsworkflows",
      benefits: [
        "Personalisierte Follow-up-Nachrichten",
        "Automatische Zufriedenheitsabfragen",
        "Integration mit bestehenden E-Mail-Systemen",
        "Nachfass-Automatisierung für bessere Kundenbindung"
      ]
    },
    {
      icon: Users,
      title: "CRM-Integration",
      description: "Nahtlose Integration mit führenden CRM-Systemen für optimale Kundenbetreuung",
      benefits: [
        "Automatische Datenübertragung zwischen Systemen",
        "Lead-Scoring und -Priorisierung",
        "Verkaufspipeline-Automatisierung",
        "360°-Kundensicht für besseren Service"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-orange-500">Kernleistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fünf bewährte Automatisierungsbereiche, die sofort spürbare Verbesserungen in Ihrem Betrieb bewirken
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow h-full">
              <div className="text-orange-500 mb-4">
                <service.icon className="h-10 w-10" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-sm">Ihre Vorteile:</h4>
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Maßgeschneiderte Lösungen für Ihr Unternehmen
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Jede Automatisierungslösung wird individuell an Ihre Bedürfnisse angepasst. 
              Wir arbeiten nur mit bewährten Tools und sorgen für nahtlose Integration in Ihre bestehenden Systeme.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="bg-white rounded-lg px-4 py-2">n8n Platform</div>
              <div className="bg-white rounded-lg px-4 py-2">DSGVO-konform</div>
              <div className="bg-white rounded-lg px-4 py-2">24/7 Support</div>
              <div className="bg-white rounded-lg px-4 py-2">Hosting in Deutschland</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
