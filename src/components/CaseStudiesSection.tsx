
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      company: "Elektro Müller GmbH",
      type: "Elektrohandwerksbetrieb",
      employees: "12 Mitarbeiter",
      timeSaving: "Von 15 auf 3 Stunden Büroarbeit pro Woche",
      roi: "ROI nach 4 Monaten",
      improvements: [
        "Rechnungsstellung innerhalb von 24h statt 14 Tagen",
        "30% schnellere Zahlungseingänge",
        "25% mehr Kundentermine",
        "Fehlerfreie Dateneingabe"
      ],
      quote: "Früher habe ich meine Abende und Wochenenden mit Papierkram verbracht. Heute kann ich mich auf mein Kerngeschäft konzentrieren und habe sogar wieder Zeit für meine Familie.",
      author: "Thomas Müller, Geschäftsführer",
      color: "blue"
    },
    {
      company: "ImmoVision Wetterau",
      type: "Immobilienmakler",
      employees: "5 Mitarbeiter",
      timeSaving: "40% mehr Besichtigungstermine",
      roi: "35% Umsatzsteigerung in 6 Monaten",
      improvements: [
        "Vereinfachte Online-Terminbuchung",
        "60% höhere Konversionsrate",
        "12h Zeitersparnis pro Woche",
        "Konsistente Kundenkommunikation"
      ],
      quote: "Die Automatisierung hat unser Geschäft revolutioniert. Wir können jetzt viel mehr Objekte betreuen, ohne zusätzliches Personal einzustellen.",
      author: "Sarah Weber, Inhaberin",
      color: "orange"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Erfolgsgeschichten unserer Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reale Ergebnisse von Unternehmen aus der Wetterau, die ihre Prozesse erfolgreich automatisiert haben
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  study.color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {study.type}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-2">
                  {study.company}
                </h3>
                <p className="text-gray-600">{study.employees}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {study.timeSaving}
                  </div>
                  <div className="text-sm text-gray-600">Zeitersparnis</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {study.roi}
                  </div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Verbesserungen:</h4>
                <ul className="space-y-2">
                  {study.improvements.map((improvement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 mb-4">
                "{study.quote}"
                <footer className="font-medium text-gray-900 mt-2">
                  — {study.author}
                </footer>
              </blockquote>

              <Button variant="outline" className="w-full">
                Vollständige Geschichte lesen
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
