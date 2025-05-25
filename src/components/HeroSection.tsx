
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 lg:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-montserrat">
              Automatisieren Sie Ihre{' '}
              <span className="text-orange-500">Bürokratie</span>,<br />
              konzentrieren Sie sich auf Ihr{' '}
              <span className="text-orange-500">Handwerk</span>.
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-open-sans">
              Gewinnen Sie <strong className="text-white">10 Stunden pro Woche</strong> zurück für das, was wirklich zählt – 
              mit maßgeschneiderten Automatisierungslösungen für Handwerks- und Immobilienbetriebe in der Wetterau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold font-montserrat"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kostenlose Prozessanalyse vereinbaren
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-8 py-4 text-lg font-montserrat transition-colors duration-300"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Wie wir Ihnen 10h/Woche sparen
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image with improved comparison */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" 
                alt="Moderner Arbeitsplatz mit Automatisierung und Technologie"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              
              {/* Improved Before/After Comparison */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* VORHER */}
                    <div className="text-center">
                      <div className="bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-lg mb-4 font-montserrat">
                        VORHER
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-800 text-sm font-open-sans">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                          <span>📄 Papierkram: 15h/Woche</span>
                        </div>
                        <div className="flex items-center text-gray-800 text-sm font-open-sans">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                          <span>❌ Fehler & Verzögerungen</span>
                        </div>
                        <div className="flex items-center text-gray-800 text-sm font-open-sans">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                          <span>😰 Stress & Überstunden</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* NACHHER */}
                    <div className="text-center">
                      <div className="bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-lg mb-4 font-montserrat">
                        NACHHER
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-800 text-sm font-open-sans">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <span>⚡ Büroarbeit: 3h/Woche</span>
                        </div>
                        <div className="flex items-center text-gray-800 text-sm font-open-sans">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <span>✅ Fehlerfreie Prozesse</span>
                        </div>
                        <div className="flex items-center text-gray-800 text-sm font-open-sans">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <span>😊 Mehr Zeit fürs Kerngeschäft</span>
                        </div>
                      </div>
                    </div>
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
