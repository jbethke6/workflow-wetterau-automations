
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Automatisieren Sie Ihre{' '}
              <span className="text-orange-500">Bürokratie</span>,<br />
              konzentrieren Sie sich auf Ihr{' '}
              <span className="text-orange-500">Handwerk</span>.
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Gewinnen Sie <strong>10 Stunden pro Woche</strong> zurück für das, was wirklich zählt – 
              mit maßgeschneiderten Automatisierungslösungen für Handwerks- und Immobilienbetriebe in der Wetterau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              >
                Kostenlose Prozessanalyse vereinbaren
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Wie wir Ihnen 10h/Woche sparen
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-red-400 text-sm mb-2">VORHER</div>
                  <div className="bg-red-500/20 rounded-lg p-4 mb-4">
                    <div className="text-sm">📄 Papierkram: 15h/Woche</div>
                    <div className="text-sm">❌ Fehler & Verzögerungen</div>
                    <div className="text-sm">😰 Stress & Überstunden</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl">⬇️</div>
                  <div className="text-orange-500 font-semibold">AUTOMATISIERUNG</div>
                </div>
                
                <div className="text-center">
                  <div className="text-green-400 text-sm mb-2">NACHHER</div>
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <div className="text-sm">⚡ Büroarbeit: 3h/Woche</div>
                    <div className="text-sm">✅ Fehlerfreie Prozesse</div>
                    <div className="text-sm">😊 Mehr Zeit fürs Kerngeschäft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
