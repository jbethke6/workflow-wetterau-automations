
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import CalendlyBooking from './CalendlyBooking';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const handleBookingClick = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <section id="home" className="gradient-bg-dark circuit-pattern text-white py-12 md:py-16 lg:py-32 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div 
              ref={heroRef}
              className={`space-y-6 lg:space-y-8 text-center lg:text-left scroll-animate-left ${heroVisible ? 'animate' : ''}`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight font-montserrat">
                Automatisieren Sie Ihre{' '}
                <span className="text-orange-500">Bürokratie</span>,<br />
                konzentrieren Sie sich auf Ihr{' '}
                <span className="text-orange-500">Handwerk</span>.
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-open-sans">
                Gewinnen Sie <strong className="text-white">10 Stunden pro Woche</strong> zurück für das, was wirklich zählt – 
                mit maßgeschneiderten Automatisierungslösungen für Handwerks- und Immobilienbetriebe in der Wetterau.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-orange-700 hover:bg-orange-800 text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold font-montserrat w-full sm:w-auto"
                  onClick={handleBookingClick}
                >
                  Kostenlose Prozessanalyse vereinbaren
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 bg-transparent px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-montserrat transition-colors duration-300 w-full sm:w-auto"
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Wie wir Ihnen 10h/Woche sparen
                  <ArrowDown className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className={`relative order-first lg:order-last scroll-animate-right ${heroVisible ? 'animate' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/454c9234-0608-4281-9e92-85a40ad67e69.png" 
                  alt="n8n Automatisierung Workflows - Zukunft der Büroautomatisierung"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Modern Statistics Cards */}
          <div 
            ref={statsRef}
            className={`mt-12 lg:mt-16 scroll-animate-scale ${statsVisible ? 'animate' : ''}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <div className="stat-card rounded-2xl p-4 lg:p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-700 font-montserrat mb-2">10h</div>
                <div className="text-sm lg:text-base text-gray-700 font-open-sans font-medium">Zeit gespart pro Woche</div>
                <div className="text-xs text-gray-500 mt-1">Durchschnittliche Einsparung</div>
              </div>
              <div className="stat-card rounded-2xl p-4 lg:p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-700 font-montserrat mb-2">60%</div>
                <div className="text-sm lg:text-base text-gray-700 font-open-sans font-medium">Kosteneinsparung</div>
                <div className="text-xs text-gray-500 mt-1">Bei Büroarbeiten</div>
              </div>
              <div className="stat-card rounded-2xl p-4 lg:p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-700 font-montserrat mb-2">90%</div>
                <div className="text-sm lg:text-base text-gray-700 font-open-sans font-medium">Weniger Fehler</div>
                <div className="text-xs text-gray-500 mt-1">Durch Automatisierung</div>
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
