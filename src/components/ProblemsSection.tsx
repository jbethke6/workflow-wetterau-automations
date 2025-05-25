
import React from 'react';
import { Button } from "@/components/ui/button";

const ProblemsSection = () => {
  const problems = [
    "Verbringen Sie zu viel Zeit mit Angeboten und Rechnungen?",
    "Frustriert von endlosen E-Mail-Ketten zur Terminvereinbarung?",
    "Suchen Sie ständig nach wichtigen Dokumenten?",
    "Verlieren Sie den Überblick über Ihre Kundenkommunikation?",
    "Fehlt Ihnen die Zeit für konsequente Nachverfolgung von Leads?"
  ];

  return (
    <section className="py-20 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-montserrat">
              Kennen Sie diese <span className="text-orange-500">Herausforderungen</span>?
            </h2>
            
            <div className="space-y-6 mb-12">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center text-left">
                  <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-700 font-medium font-open-sans">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 font-montserrat">
                Sie sind nicht allein!
              </h3>
              <p className="text-lg text-gray-700 mb-6 font-open-sans">
                85% aller Kleinbetriebe verlieren täglich wertvolle Stunden durch vermeidbare Verwaltungsaufgaben. 
                Dabei könnte diese Zeit viel besser in das Kerngeschäft investiert werden.
              </p>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-montserrat"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Erfahren Sie, wie wir diese Probleme für Sie lösen
              </Button>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=700&fit=crop&crop=center" 
              alt="Handwerker und Immobilienmakler bei der Arbeit"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
