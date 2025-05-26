
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import CalendlyBooking from './CalendlyBooking';

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookingClick = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
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
                  onClick={handleBookingClick}
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

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center" 
                  alt="Automatisierte Systeme und digitale Workflows - Zukunft der Büroautomatisierung"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                
                {/* Floating Benefits Cards */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-orange-500 font-montserrat">10h</div>
                      <div className="text-xs text-gray-800 font-open-sans">Zeit gespart/Woche</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600 font-montserrat">60%</div>
                      <div className="text-xs text-gray-800 font-open-sans">Kosteneinsparung</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600 font-montserrat">90%</div>
                      <div className="text-xs text-gray-800 font-open-sans">Weniger Fehler</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Popup */}
      <CalendlyBooking isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};

export default HeroSection;
