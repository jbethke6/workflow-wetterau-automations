
import React from 'react';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-700 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
            Unsere Lösung: Maßgeschneiderte Automatisierung mit{' '}
            <span className="text-orange-600">persönlichem Service</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto font-open-sans px-4">
            Wir analysieren Ihre Prozesse, entwickeln individuelle Automatisierungslösungen 
            und begleiten Sie bis zur erfolgreichen Umsetzung – ohne dass Sie sich um die Technik kümmern müssen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl lg:text-2xl font-bold font-montserrat">1</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 font-montserrat">Kostenlose Analyse</h3>
            <p className="text-gray-200 font-open-sans text-sm lg:text-base">
              Wir identifizieren Ihre zeitraubendsten Prozesse und berechnen Ihr Einsparpotential
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl lg:text-2xl font-bold font-montserrat">2</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 font-montserrat">Maßgeschneiderte Lösung</h3>
            <p className="text-gray-200 font-open-sans text-sm lg:text-base">
              Entwicklung individueller Automatisierungsworkflows, perfekt angepasst an Ihr Unternehmen
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl lg:text-2xl font-bold font-montserrat">3</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 font-montserrat">Komplette Umsetzung</h3>
            <p className="text-gray-200 font-open-sans text-sm lg:text-base">
              Wir implementieren alles für Sie – Sie müssen sich um nichts kümmern
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl lg:text-2xl font-bold font-montserrat">4</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 font-montserrat">Kontinuierliche Betreuung</h3>
            <p className="text-gray-200 font-open-sans text-sm lg:text-base">
              Support, Wartung und stetige Optimierung Ihrer Automatisierungslösungen
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 font-montserrat">
                Sehen Sie, wie Automatisierung Ihr Unternehmen transformiert
              </h3>
              <p className="text-gray-200 mb-6 font-open-sans">
                Erleben Sie anhand eines realen Beispiels, wie ein Handwerksbetrieb durch unsere Lösungen 
                12 Stunden pro Woche einsparen konnte.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center" 
                alt="KI-gesteuerte Automatisierung für Handwerk und Immobilien"
                className="w-full h-48 lg:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
