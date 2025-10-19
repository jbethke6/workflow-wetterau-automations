
import React from 'react';
import { Clock, FileText, Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Automatisierung',
      description: 'Automatisierte Workflows für repetitive Aufgaben',
      highlight: 'Mehr Zeit'
    },
    {
      icon: FileText,
      title: 'Integration',
      description: 'Nahtlose Integration mit Ihren bestehenden Tools',
      highlight: 'Einfache Anbindung'
    },
    {
      icon: Check,
      title: 'Skalierbarkeit',
      description: 'Workflows, die mit Ihrem Unternehmen wachsen',
      highlight: 'Flexibel'
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
            Technische Möglichkeiten für E-Commerce mit n8n und KI
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
      </div>
    </section>
  );
};

export default BenefitsSection;
