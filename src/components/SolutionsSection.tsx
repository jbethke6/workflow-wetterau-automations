
import React from 'react';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Unsere Lösung: Maßgeschneiderte Automatisierung mit{' '}
            <span className="text-orange-500">persönlichem Service</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Wir analysieren Ihre Prozesse, entwickeln individuelle Automatisierungslösungen 
            und begleiten Sie bis zur erfolgreichen Umsetzung – ohne dass Sie sich um die Technik kümmern müssen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Kostenlose Analyse</h3>
            <p className="text-blue-100">
              Wir identifizieren Ihre zeitraubendsten Prozesse und berechnen Ihr Einsparpotential
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Maßgeschneiderte Lösung</h3>
            <p className="text-blue-100">
              Entwicklung individueller Automatisierungsworkflows, perfekt angepasst an Ihr Unternehmen
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Komplette Umsetzung</h3>
            <p className="text-blue-100">
              Wir implementieren alles für Sie – Sie müssen sich um nichts kümmern
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Kontinuierliche Betreuung</h3>
            <p className="text-blue-100">
              Support, Wartung und stetige Optimierung Ihrer Automatisierungslösungen
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Sehen Sie, wie Automatisierung Ihr Unternehmen transformiert
            </h3>
            <p className="text-blue-100 mb-6">
              Erleben Sie anhand eines realen Beispiels, wie ein Handwerksbetrieb durch unsere Lösungen 
              12 Stunden pro Woche einsparen konnte.
            </p>
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-lg mb-4">Demo-Video: Automatisierung in der Praxis</p>
              <p className="text-sm text-gray-300">
                Hier würde das 3-minütige Erklärvideo eingebettet werden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
