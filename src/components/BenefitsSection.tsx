
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
    <section className="py-16 lg:py-20 bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Ihre Vorteile auf einen Blick
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-open-sans px-4">
            Automatisierung ist keine Zukunftsmusik – sie funktioniert heute und bringt sofortige Ergebnisse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-6">
                <benefit.icon className="h-10 w-10 lg:h-12 lg:w-12" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                {benefit.title}
              </h3>
              <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4 font-montserrat">
                {benefit.highlight}
              </div>
              <p className="text-gray-600 leading-relaxed font-open-sans">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16">
          <img 
            src="/images/stuff.png" 
            alt="Futuristische Automatisierungstechnologie - KI-gesteuerte Workflows für modernes Business"
            className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
