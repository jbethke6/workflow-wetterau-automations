import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Zap, Bot, ShoppingCart } from 'lucide-react';
import ServiceModal from './ServiceModal';

const WorkflowExamplesSection = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<number | null>(null);

  const workflows = [
    {
      icon: ShoppingCart,
      title: "Warenkorb-Recovery Automation",
      description: "Vollautomatische E-Mail-Sequenz für abgebrochene Warenkörbe mit personalisierten Angeboten und Timing-Optimierung.",
      details: "Dieser Workflow erkennt automatisch abgebrochene Warenkörbe, erstellt personalisierte Recovery-E-Mails mit dynamischen Produktinformationen und sendet diese zu optimierten Zeitpunkten (1h, 24h, 72h nach Abbruch).",
      benefits: [
        "Automatische Erkennung abgebrochener Warenkörbe",
        "Personalisierte E-Mail-Sequenzen mit Produktbildern",
        "Dynamische Rabattcode-Generierung",
        "A/B Testing verschiedener Nachrichtenvarianten",
        "Conversion-Tracking und ROI-Messung"
      ]
    },
    {
      icon: Bot,
      title: "KI-Chatbot mit Terminbuchung",
      description: "Intelligenter Chatbot für Kundensupport und automatische Terminvereinbarung direkt im Chat.",
      details: "Ein KI-gestützter Chatbot, der Kundenanfragen beantwortet, Produktempfehlungen gibt und bei Bedarf automatisch Termine in Ihrem Google Kalender bucht.",
      benefits: [
        "24/7 automatische Kundenbetreuung",
        "Intelligente Produktempfehlungen basierend auf Kundenanfragen",
        "Direkte Integration mit Google Calendar",
        "Automatische Follow-up E-Mails nach Terminbuchung",
        "Lead-Qualifizierung und CRM-Integration"
      ]
    },
    {
      icon: Zap,
      title: "Multi-Channel Bestands-Sync",
      description: "Echtzeit-Synchronisierung Ihrer Lagerbestände über alle Verkaufskanäle hinweg.",
      details: "Dieser Workflow synchronisiert Ihre Lagerbestände in Echtzeit über Shopify, Amazon, eBay und andere Plattformen, um Überverkäufe zu vermeiden.",
      benefits: [
        "Echtzeit-Synchronisierung über alle Kanäle",
        "Automatische Bestandsanpassungen bei Verkäufen",
        "Warnungen bei niedrigen Beständen",
        "Fehlerbehandlung und automatische Korrekturen",
        "Zentrale Bestandsverwaltung"
      ]
    }
  ];

  return (
    <>
      <section id="workflow-examples" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Live <span className="text-orange-600">Workflow Beispiele</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Sehen Sie, wie n8n Automatisierungen in der Praxis funktionieren
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {workflows.map((workflow, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all cursor-pointer hover:scale-105 duration-300"
                onClick={() => setSelectedWorkflow(index)}
              >
                <div className="p-6">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <workflow.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {workflow.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {workflow.description}
                  </p>
                  
                  <div className="mt-4 text-orange-600 text-sm font-semibold">
                    Klicken für Details →
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedWorkflow !== null && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedWorkflow(null)}
          title={workflows[selectedWorkflow].title}
          description={workflows[selectedWorkflow].details}
          benefits={workflows[selectedWorkflow].benefits}
        />
      )}
    </>
  );
};

export default WorkflowExamplesSection;
