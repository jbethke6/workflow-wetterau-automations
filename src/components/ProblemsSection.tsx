
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Kennen Sie diese <span className="text-orange-500">Herausforderungen</span>?
        </h2>
        
        <div className="space-y-6 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-center justify-center text-left">
              <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 font-medium">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Sie sind nicht allein!
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            85% aller Kleinbetriebe verlieren täglich wertvolle Stunden durch vermeidbare Verwaltungsaufgaben. 
            Dabei könnte diese Zeit viel besser in das Kerngeschäft investiert werden.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Erfahren Sie, wie wir diese Probleme für Sie lösen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
