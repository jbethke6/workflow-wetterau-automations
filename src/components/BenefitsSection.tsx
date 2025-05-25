
import React from 'react';
import { Clock, FileText, Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Zeitersparnis',
      description: 'Durchschnittlich 10 Stunden pro Woche mehr für Ihr Kerngeschäft',
      highlight: '10h/Woche'
    },
    {
      icon: FileText,
      title: 'Kostenreduktion',
      description: 'Senken Sie Ihre Verwaltungskosten um bis zu 60%',
      highlight: '60% weniger Kosten'
    },
    {
      icon: Check,
      title: 'Fehlerminimierung',
      description: 'Reduzieren Sie Fehler durch automatisierte Prozesse um 90%',
      highlight: '90% weniger Fehler'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ihre Vorteile auf einen Blick
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatisierung ist keine Zukunftsmusik – sie funktioniert heute und bringt sofortige Ergebnisse
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-500 mb-6">
                <benefit.icon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">
                {benefit.highlight}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
