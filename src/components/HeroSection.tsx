
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
      <section id="home" className="bg-gradient-to-br from-gray-800 to-gray-700 text-white py-16 lg:py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight font-montserrat">
                Automatisieren Sie Ihre{' '}
                <span className="text-orange-600">Bürokratie</span>,<br />
                konzentrieren Sie sich auf Ihr{' '}
                <span className="text-orange-600">Handwerk</span>.
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-open-sans">
                Gewinnen Sie <strong className="text-white">10 Stunden pro Woche</strong> zurück für das, was wirklich zählt – 
                mit maßgeschneiderten Automatisierungslösungen für Handwerks- und Immobilienbetriebe in der Wetterau.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold font-montserrat w-full sm:w-auto"
                  onClick={handleBookingClick}
                >
                  Kostenlose Prozessanalyse vereinbaren
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 bg-transparent px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-montserrat transition-colors duration-300 w-full sm:w-auto"
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Wie wir Ihnen 10h/Woche sparen
                  <ArrowDown className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center" 
                  alt="Automatisierte Systeme und digitale Workflows - Zukunft der Büroautomatisierung"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent"></div>
                
                {/* Floating Benefits Cards */}
                <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4">
                  <div className="grid grid-cols-3 gap-2 lg:gap-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 lg:p-3 text-center">
                      <div className="text-lg lg:text-2xl font-bold text-orange-600 font-montserrat">10h</div>
                      <div className="text-xs text-gray-800 font-open-sans">Zeit gespart/Woche</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 lg:p-3 text-center">
                      <div className="text-lg lg:text-2xl font-bold text-orange-600 font-montserrat">60%</div>
                      <div className="text-xs text-gray-800 font-open-sans">Kosteneinsparung</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 lg:p-3 text-center">
                      <div className="text-lg lg:text-2xl font-bold text-orange-600 font-montserrat">90%</div>
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
