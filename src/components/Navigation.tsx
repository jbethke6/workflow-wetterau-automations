
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import CalendlyBooking from './CalendlyBooking';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const navItems = [
    { label: 'Startseite', href: '#home' },
    { label: 'Lösungen', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Kontakt', href: '#contact' }
  ];

  const handleBookingClick = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 mobile-no-overflow">
        <div className="max-w-7xl mx-auto mobile-container">
          <div className="flex justify-between items-center py-4 mobile-no-overflow">
            {/* Logo */}
            <div className="flex items-center space-x-3 mobile-no-overflow">
              <img 
                src="/lovable-uploads/edf6126a-8f1c-4010-b365-60be063f3bb0.png" 
                alt="Yami-AI Logo" 
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
              <span className="text-xl font-bold text-gray-900 font-montserrat">Yami-AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-orange-800 font-medium transition-colors font-open-sans text-sm lg:text-base"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="bg-orange-800 hover:bg-orange-900 text-white px-4 lg:px-6 py-2 font-montserrat text-sm lg:text-base"
                onClick={handleBookingClick}
              >
                Kostenlose Analyse
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 mobile-no-overflow">
              <div className="flex flex-col space-y-4 mobile-no-overflow">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-orange-800 font-medium font-open-sans mobile-no-overflow"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  className="bg-orange-800 hover:bg-orange-900 text-white w-full font-montserrat mobile-no-overflow"
                  onClick={handleBookingClick}
                >
                  Kostenlose Analyse
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Calendly Booking Popup */}
      <CalendlyBooking isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};

export default Navigation;
