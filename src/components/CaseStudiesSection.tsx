
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      company: "Fashion & Accessoires Shop",
      type: "Fashion E-Commerce",
      employees: "3 Mitarbeiter",
      timeSaving: "Von 5 auf 2 Stunden Kundensupport pro Tag",
      roi: "ROI nach 3 Monaten",
      improvements: [
        "Warenkorb-Wiederherstellungsrate von 2% auf 8%",
        "Chatbot beantwortet 70% aller Kundenfragen automatisch",
        "Umsatzsteigerung von 25% in 6 Monaten",
        "Durchschnittlicher Bestellwert um 15% gestiegen"
      ],
      quote: "Unser Chatbot hat unseren Support revolutioniert. Wir können jetzt viel mehr Kunden betreuen, ohne zusätzliches Personal einzustellen.",
      author: "Sarah M., Shop-Inhaberin",
      color: "blue",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop&crop=center"
    },
    {
      company: "Elektronik & Gadgets Online-Shop",
      type: "Elektronik E-Commerce",
      employees: "5 Mitarbeiter",
      timeSaving: "15% mehr Umsatz durch intelligente Produktempfehlungen",
      roi: "ROI nach 2 Monaten",
      improvements: [
        "Durchschnittlicher Bestellwert um 18% gestiegen",
        "Bestandsverwaltung über 3 Kanäle automatisiert",
        "Fehlerquote bei Bestandsverwaltung auf 0% reduziert",
        "12h Zeitersparnis pro Woche bei Bestandspflege"
      ],
      quote: "Mit dem Bestands-Bot und dem Cross-Sell-Assistenten haben wir unseren Umsatz deutlich gesteigert, ohne mehr Zeit in die Verwaltung zu investieren.",
      author: "Michael K., Geschäftsführer",
      color: "orange",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section id="case-studies" className="py-16 lg:py-20 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Erfolgsgeschichten meiner Kunden
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-open-sans px-4">
            Reale Ergebnisse von Online-Shops, die ihre Prozesse erfolgreich automatisiert haben
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 lg:h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={`${study.company} Arbeitsplatz`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium font-montserrat ${
                    study.color === 'blue' ? 'bg-gray-100 text-gray-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {study.type}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-3 mb-2 font-montserrat">
                    {study.company}
                  </h3>
                  <p className="text-gray-600 font-open-sans">{study.employees}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-base lg:text-lg font-bold text-orange-600 mb-1 font-montserrat">
                      {study.timeSaving}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 font-open-sans">Zeitersparnis</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-base lg:text-lg font-bold text-gray-600 mb-1 font-montserrat">
                      {study.roi}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 font-open-sans">ROI</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 font-montserrat">Verbesserungen:</h4>
                  <ul className="space-y-2">
                    {study.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-orange-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-open-sans text-sm lg:text-base">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="border-l-4 border-orange-600 pl-4 italic text-gray-700 mb-4 font-open-sans text-sm lg:text-base">
                  "{study.quote}"
                  <footer className="font-medium text-gray-900 mt-2 font-montserrat">
                    — {study.author}
                  </footer>
                </blockquote>

                <Button variant="outline" className="w-full font-montserrat">
                  Vollständige Geschichte lesen
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <img 
            src="/images/logo auto.png" 
            alt="Erfolgreiches Team bei der Arbeit"
            className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-lg mb-8"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
