
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
      <section id="home" className="gradient-bg-dark circuit-pattern text-white py-8 md:py-12 lg:py-16 min-h-screen flex items-center mobile-no-overflow">
        <div className="max-w-7xl mx-auto mobile-container w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mobile-no-overflow">
            {/* Left Column - Text Content */}
            <div 
              ref={heroRef}
              className={`space-y-4 lg:space-y-8 text-center lg:text-left scroll-animate-left ${heroVisible ? 'animate' : ''} mobile-no-overflow`}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight font-montserrat mobile-no-overflow">
                Automatisieren Sie Ihre{' '}
                <span className="text-orange-500">Bürokratie</span>,<br />
                konzentrieren Sie sich auf Ihr{' '}
                <span className="text-orange-500">Handwerk</span>.
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-open-sans mobile-no-overflow">
                Gewinnen Sie <strong className="text-white">10 Stunden pro Woche</strong> zurück für das, was wirklich zählt – 
                mit maßgeschneiderten Automatisierungslösungen für Handwerks- und Immobilienbetriebe in der Wetterau.
              </p>

              <div className="flex flex-col gap-3 justify-center lg:justify-start mobile-no-overflow">
                <Button 
                  size="lg" 
                  className="bg-orange-800 hover:bg-orange-900 text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold font-montserrat w-full sm:w-auto mobile-no-overflow"
                  onClick={handleBookingClick}
                >
                  Kostenlose Prozessanalyse vereinbaren
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 bg-transparent px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-montserrat transition-colors duration-300 w-full sm:w-auto mobile-no-overflow"
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Wie wir Ihnen 10h/Woche sparen
                  <ArrowDown className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className={`relative order-first lg:order-last scroll-animate-right ${heroVisible ? 'animate' : ''} mobile-no-overflow`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl float-animation mobile-no-overflow">
                <img 
                  src="/lovable-uploads/8564e40f-1ee8-4e3a-8164-9139168447fd.png" 
                  alt="n8n Automatisierung Workflows - Zukunft der Büroautomatisierung"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover mobile-no-overflow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics Cards */}
          <div 
            ref={statsRef}
            className={`mt-8 lg:mt-16 scroll-animate-scale ${statsVisible ? 'animate' : ''} mobile-no-overflow`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto mobile-no-overflow">
              <div className={`stat-card rounded-2xl p-4 lg:p-6 text-center pulse-glow scroll-animate scroll-animate-stagger-1 ${statsVisible ? 'animate' : ''} mobile-no-overflow`}>
                <div className="text-3xl lg:text-4xl font-bold text-orange-800 font-montserrat mb-2">10h</div>
                <div className="text-sm lg:text-base text-gray-700 font-open-sans font-medium">Zeit gespart pro Woche</div>
                <div className="text-xs text-gray-500 mt-1">Durchschnittliche Einsparung</div>
              </div>
              <div className={`stat-card rounded-2xl p-4 lg:p-6 text-center pulse-glow scroll-animate scroll-animate-stagger-2 ${statsVisible ? 'animate' : ''} mobile-no-overflow`}>
                <div className="text-3xl lg:text-4xl font-bold text-orange-800 font-montserrat mb-2">60%</div>
                <div className="text-sm lg:text-base text-gray-700 font-open-sans font-medium">Kosteneinsparung</div>
                <div className="text-xs text-gray-500 mt-1">Bei Büroarbeiten</div>
              </div>
              <div className={`stat-card rounded-2xl p-4 lg:p-6 text-center pulse-glow scroll-animate scroll-animate-stagger-3 ${statsVisible ? 'animate' : ''} mobile-no-overflow`}>
                <div className="text-3xl lg:text-4xl font-bold text-orange-800 font-montserrat mb-2">90%</div>
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
