
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SolutionsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { ref: workflowRef, isVisible: workflowVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="py-12 md:py-16 lg:py-20 gradient-bg-dark circuit-pattern text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div 
          ref={titleRef}
          className={`text-center mb-8 md:mb-12 lg:mb-16 scroll-animate ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 font-montserrat">
            Unsere Lösung: Maßgeschneiderte Automatisierung mit{' '}
            <span className="text-orange-500">persönlichem Service</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto font-open-sans">
            Ich analysiere Ihre Shop-Prozesse und entwickle individuelle Automatisierungslösungen mit n8n
          </p>
        </div>

        <div 
          ref={stepsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16 scroll-animate ${stepsVisible ? 'animate' : ''}`}
        >
          <div className="text-center">
            <div className="bg-orange-700 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
              <span className="text-lg md:text-xl lg:text-2xl font-bold font-montserrat text-white">1</span>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 font-montserrat">Prozessanalyse</h3>
            <p className="text-gray-200 font-open-sans text-sm md:text-base">
              Identifizierung automatisierbarer Prozesse in Ihrem Shop
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-700 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
              <span className="text-lg md:text-xl lg:text-2xl font-bold font-montserrat text-white">2</span>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 font-montserrat">Workflow-Entwicklung</h3>
            <p className="text-gray-200 font-open-sans text-sm md:text-base">
              Entwicklung individueller n8n Workflows für Ihr Unternehmen
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-700 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
              <span className="text-lg md:text-xl lg:text-2xl font-bold font-montserrat text-white">3</span>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 font-montserrat">Implementation</h3>
            <p className="text-gray-200 font-open-sans text-sm md:text-base">
              Integration der Workflows in Ihre bestehende Infrastruktur
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-700 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
              <span className="text-lg md:text-xl lg:text-2xl font-bold font-montserrat text-white">4</span>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 font-montserrat">Support</h3>
            <p className="text-gray-200 font-open-sans text-sm md:text-base">
              Wartung und Optimierung Ihrer Workflows
            </p>
          </div>
        </div>

        <div 
          ref={workflowRef}
          className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-white/20 scroll-animate-scale ${workflowVisible ? 'animate' : ''}`}
        >
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-montserrat">
              n8n Workflow Beispiele
            </h3>
            <p className="text-gray-200 mb-4 md:mb-6 font-open-sans text-sm md:text-base">
              Erleben Sie anhand realer n8n Workflow-Beispiele, wie Automatisierungen funktionieren
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-sm max-w-2xl mx-auto">
              <div className="bg-orange-700/20 rounded-lg p-3 text-center">
                <div className="font-bold text-orange-400">Warenkorb-Wiederherstellung</div>
                <div className="text-xs text-gray-300 mt-1">Automatische Erinnerungen</div>
              </div>
              <div className="bg-orange-700/20 rounded-lg p-3 text-center">
                <div className="font-bold text-orange-400">Bestands-Synchronisation</div>
                <div className="text-xs text-gray-300 mt-1">Multi-Channel Management</div>
              </div>
              <div className="bg-orange-700/20 rounded-lg p-3 text-center">
                <div className="font-bold text-orange-400">KI-Chatbot</div>
                <div className="text-xs text-gray-300 mt-1">24/7 Kundensupport</div>
              </div>
              <div className="bg-orange-700/20 rounded-lg p-3 text-center">
                <div className="font-bold text-orange-400">Content-Generierung</div>
                <div className="text-xs text-gray-300 mt-1">KI-gestützte Texte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
