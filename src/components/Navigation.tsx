
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
    { label: 'Leistungen', href: '#services' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Erfolgsgeschichten', href: '#case-studies' },
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
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/edf6126a-8f1c-4010-b365-60be063f3bb0.png" 
                alt="AutoFlow Pro Logo" 
                className="h-10 w-10"
              />
              <div className="text-2xl font-bold text-blue-900 font-montserrat">
                AutoFlow<span className="text-orange-500">Pro</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors font-open-sans"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-montserrat"
                onClick={handleBookingClick}
              >
                Kostenlose Beratung
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
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 font-medium font-open-sans"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full font-montserrat"
                  onClick={handleBookingClick}
                >
                  Kostenlose Beratung
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
